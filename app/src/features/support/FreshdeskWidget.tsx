import { useEffect } from 'react'

export default function FreshdeskWidget() {
  useEffect(() => {
    const url = import.meta.env.VITE_FRESHDESK_WIDGET_URL
    if (!url) return
    const s = document.createElement('script')
    s.src = url
    s.async = true
    document.body.appendChild(s)
    return () => { document.body.removeChild(s) }
  }, [])
  return null
}


