import { LogOut, Users, MousePointerClick, MessageCircle, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/auth'
import { useRealtimeDashboard } from '../hooks/useRealtimeDashboard'
import { MetricCard } from '../components/admin/MetricCard'
import { TrafficSourcesChart } from '../components/admin/TrafficSourcesChart'
import { LeadsTable } from '../components/admin/LeadsTable'
import { RealtimeActivity } from '../components/admin/RealtimeActivity'

export function AdminLeads() {
  const navigate = useNavigate()
  const { leads, events, onlineVisitors, loading } = useRealtimeDashboard()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  // Calculate Metrics
  const today = new Date().toISOString().split('T')[0]
  
  const pageViewsToday = events.filter(e => e.event_type === 'PageView' && e.created_at.startsWith(today)).length
  const ctaClicksToday = events.filter(e => e.event_type === 'Click' && e.created_at.startsWith(today)).length
  const leadsToday = leads.filter(l => l.created_at.startsWith(today)).length
  
  const conversionRate = pageViewsToday > 0 ? ((leadsToday / pageViewsToday) * 100).toFixed(1) + '%' : '0%'

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col">
      {/* Topbar */}
      <header className="h-16 border-b border-white/10 bg-[#08080C] flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-white text-sm">
            VD
          </div>
          <span className="font-bold tracking-wide">Inteligência Comercial</span>
        </div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sair
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Visão Geral do Tráfego</h1>
              <p className="text-text-muted">Acompanhe a performance da sua landing page e conversão de leads em tempo real.</p>
            </div>
            {loading && (
              <div className="flex items-center gap-2 text-sm text-primary">
                <span className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                Sincronizando...
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <MetricCard 
              title="Visitantes Online" 
              value={onlineVisitors} 
              icon={Activity} 
              isLive={true} 
            />
            <MetricCard 
              title="PageViews (Hoje)" 
              value={pageViewsToday} 
              icon={Users} 
            />
            <MetricCard 
              title="Cliques em CTA (Hoje)" 
              value={ctaClicksToday} 
              icon={MousePointerClick} 
            />
            <MetricCard 
              title="Leads (Hoje)" 
              value={leadsToday} 
              icon={MessageCircle} 
            />
            <MetricCard 
              title="Conversão" 
              value={conversionRate} 
              icon={Activity} 
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Chart & Leads */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Traffic Sources Chart */}
              <div className="bg-[#111118] border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-6">Origem do Tráfego (UTM Source)</h3>
                <TrafficSourcesChart events={events} />
              </div>

              {/* Leads Table */}
              <div>
                <h3 className="font-bold text-white mb-4">Leads Capturados</h3>
                <LeadsTable leads={leads} />
              </div>

            </div>

            {/* Right Column: Realtime Timeline */}
            <div className="lg:col-span-1">
              <RealtimeActivity events={events} />
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
