import { useState, useEffect } from 'react'
import { supabase } from '../lib/auth'

export function useRealtimeDashboard() {
  const [leads, setLeads] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [onlineVisitors, setOnlineVisitors] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Initial Fetch
    const fetchData = async () => {
      setLoading(true)
      
      const [leadsRes, eventsRes, visitorsRes] = await Promise.all([
        supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(50),
        supabase.from('page_events').select('*').order('created_at', { ascending: false }).limit(50),
        // Conta visitantes com last_seen nos últimos 2 minutos
        supabase.from('visitors').select('id', { count: 'exact' })
          .gte('last_seen_at', new Date(Date.now() - 2 * 60 * 1000).toISOString())
      ])

      if (leadsRes.data) setLeads(leadsRes.data)
      if (eventsRes.data) setEvents(eventsRes.data)
      if (visitorsRes.count !== null) setOnlineVisitors(visitorsRes.count)
      
      setLoading(false)
    }

    fetchData()

    // Intervalo para atualizar contagem de visitantes online a cada 10s
    const visitorsInterval = setInterval(async () => {
      const { count } = await supabase.from('visitors').select('id', { count: 'exact' })
        .gte('last_seen_at', new Date(Date.now() - 2 * 60 * 1000).toISOString())
      if (count !== null) setOnlineVisitors(count)
    }, 10000)

    // 2. Realtime Subscriptions
    const leadsSub = supabase.channel('public:leads')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'leads' }, payload => {
        setLeads(prev => [payload.new, ...prev].slice(0, 50))
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'leads' }, payload => {
        setLeads(prev => prev.map(l => l.id === payload.new.id ? payload.new : l))
      })
      .subscribe()

    const eventsSub = supabase.channel('public:page_events')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'page_events' }, payload => {
        setEvents(prev => [payload.new, ...prev].slice(0, 50))
      })
      .subscribe()

    return () => {
      clearInterval(visitorsInterval)
      supabase.removeChannel(leadsSub)
      supabase.removeChannel(eventsSub)
    }
  }, [])

  return { leads, setLeads, events, onlineVisitors, loading }
}
