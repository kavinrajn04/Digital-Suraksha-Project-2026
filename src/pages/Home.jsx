import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useSettings } from '../hooks/useSettings'

export default function Home() {
  const { t } = useSettings()
  const [status, setStatus] = useState(
    supabase ? 'Checking...' : 'Keys not found. Check .env.local and restart.'
  )

  useEffect(() => {
    if (!supabase) return
    supabase.rpc('get_impact_stats').then(({ data, error }) => {
      setStatus(error ? `Connected, but: ${error.message}` : `Connected. ${JSON.stringify(data)}`)
    })
  }, [])

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{t.home.title}</h1>
      <p className="mt-4 text-xl">{t.home.subtitle}</p>
      <p className="mt-6 rounded border-2 p-3">{status}</p>
    </section>
  )
}