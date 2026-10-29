import { useSettings } from '../../hooks/useSettings'

const ICONS = { sms: '💬', call: '📞', whatsapp: '🟢', upi: '💸' }

export default function MessageBubble({ kind, sender, message }) {
  const { t } = useSettings()
  return (
    <figure className="rounded-2xl border-2 border-slate-400 bg-slate-100 p-5">
      <figcaption className="text-lg font-bold text-slate-700">
        <span aria-hidden="true">{ICONS[kind]} </span>
        {t.sim.kinds[kind]}: {sender}
      </figcaption>
      <blockquote className="mt-3 whitespace-pre-line rounded-xl bg-white p-4 text-xl leading-relaxed text-slate-900 shadow">
        {message}
      </blockquote>
    </figure>
  )
}