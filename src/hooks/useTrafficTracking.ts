import { useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../lib/auth'

interface UTMs {
  source: string | null
  medium: string | null
  campaign: string | null
  content: string | null
  term: string | null
}

export function useTrafficTracking() {
  const getVisitorId = () => {
    let visitorId = localStorage.getItem('vd_visitor_id')
    if (!visitorId) {
      visitorId = uuidv4()
      localStorage.setItem('vd_visitor_id', visitorId)
    }
    return visitorId
  }

  const getUTMs = (): UTMs => {
    const urlParams = new URLSearchParams(window.location.search)
    return {
      source: urlParams.get('utm_source') || sessionStorage.getItem('utm_source'),
      medium: urlParams.get('utm_medium') || sessionStorage.getItem('utm_medium'),
      campaign: urlParams.get('utm_campaign') || sessionStorage.getItem('utm_campaign'),
      content: urlParams.get('utm_content') || sessionStorage.getItem('utm_content'),
      term: urlParams.get('utm_term') || sessionStorage.getItem('utm_term'),
    }
  }

  const saveUTMsToSession = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    utms.forEach(utm => {
      const value = urlParams.get(utm)
      if (value) sessionStorage.setItem(utm, value)
    })
  }

  const getDeviceInfo = () => {
    const ua = navigator.userAgent
    let device = 'Desktop'
    if (/android/i.test(ua)) device = 'Android'
    if (/iPad|iPhone|iPod/.test(ua)) device = 'iOS'
    
    let browser = 'Unknown'
    if (/chrome|crios|crmo/i.test(ua)) browser = 'Chrome'
    else if (/firefox|iceweasel|fxios/i.test(ua)) browser = 'Firefox'
    else if (/safari/i.test(ua)) browser = 'Safari'
    else if (/edg/i.test(ua)) browser = 'Edge'

    return { device, browser }
  }

  const trackEvent = useCallback(async (eventType: string, eventName: string) => {
    try {
      const visitorId = getVisitorId()
      const utms = getUTMs()
      const { device, browser } = getDeviceInfo()
      const landingPage = window.location.pathname

      await supabase.from('page_events').insert({
        event_type: eventType,
        event_name: eventName,
        utm_source: utms.source,
        utm_medium: utms.medium,
        utm_campaign: utms.campaign,
        utm_content: utms.content,
        utm_term: utms.term,
        landing_page: landingPage,
        device,
        browser,
        visitor_id: visitorId
      })
    } catch (e) {
      console.error('Failed to track event:', e)
    }
  }, [])

  const trackLead = useCallback(async (name?: string, email?: string, whatsapp?: string, message?: string) => {
    try {
      const utms = getUTMs()
      const { device, browser } = getDeviceInfo()
      const landingPage = window.location.pathname

      await supabase.from('leads').insert({
        name,
        email,
        whatsapp,
        message,
        status: 'Novo',
        utm_source: utms.source,
        utm_medium: utms.medium,
        utm_campaign: utms.campaign,
        utm_content: utms.content,
        utm_term: utms.term,
        landing_page: landingPage,
        device,
        browser
      })
    } catch (e) {
      console.error('Failed to track lead:', e)
    }
  }, [])

  useEffect(() => {
    // Only run tracking on public pages, not inside /admin
    if (window.location.pathname.startsWith('/admin')) return

    saveUTMsToSession()
    const visitorId = getVisitorId()
    const utms = getUTMs()
    const { device, browser } = getDeviceInfo()
    const landingPage = window.location.pathname

    // 1. Register or Update Visitor Online Status
    const pingVisitor = async () => {
      try {
        // Try to update existing
        const { data } = await supabase
          .from('visitors')
          .update({ last_seen_at: new Date().toISOString() })
          .eq('visitor_id', visitorId)
          .select()

        // If it doesn't exist, insert
        if (!data || data.length === 0) {
          await supabase.from('visitors').insert({
            visitor_id: visitorId,
            utm_source: utms.source,
            utm_medium: utms.medium,
            utm_campaign: utms.campaign,
            landing_page: landingPage,
            device,
            browser
          })
        }
      } catch (e) {
        console.error('Failed to ping visitor:', e)
      }
    }

    pingVisitor()
    const pingInterval = setInterval(pingVisitor, 60000) // Ping every 1 min

    // 2. Track PageView
    trackEvent('PageView', 'Landed on page')

    // 3. Track Time on Page
    const timers = [
      setTimeout(() => trackEvent('TimeOnPage', '15 seconds'), 15000),
      setTimeout(() => trackEvent('TimeOnPage', '30 seconds'), 30000),
      setTimeout(() => trackEvent('TimeOnPage', '60 seconds'), 60000),
    ]

    // 4. Track Scroll
    let scrolled50 = false
    let scrolled90 = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = (scrollY / (docHeight - winHeight)) * 100

      if (scrollPercent >= 50 && !scrolled50) {
        scrolled50 = true
        trackEvent('Scroll', 'Scrolled 50%')
      }
      if (scrollPercent >= 90 && !scrolled90) {
        scrolled90 = true
        trackEvent('Scroll', 'Scrolled 90%')
      }
    }
    window.addEventListener('scroll', handleScroll)

    // 5. Track WhatsApp Clicks automatically
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.href.includes('wa.me')) {
        trackEvent('Click', 'WhatsApp CTA')
        // Consider this a lead capture for now, as requested
        trackLead(undefined, undefined, undefined, 'Lead via clique no WhatsApp')
      }
    }
    document.addEventListener('click', handleGlobalClick)

    return () => {
      clearInterval(pingInterval)
      timers.forEach(clearTimeout)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [trackEvent, trackLead])

  return { trackEvent, trackLead }
}
