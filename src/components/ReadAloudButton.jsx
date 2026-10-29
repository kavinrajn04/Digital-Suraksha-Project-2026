import { useSettings } from '../hooks/useSettings'
import { useReadAloud } from '../hooks/useReadAloud'

export default function ReadAloudButton({ text }) {
  const { t, lang } = useSettings()
  const { speaking, error, speak, stop } = useReadAloud(lang)

  return (
    <div>
      <button
        type="button"
        onClick={() => (speaking ? stop() : speak(text))}
        className="rounded-xl border-2 border-blue-800 bg-blue-800 px-5 py-3 text-lg font-bold text-white hover:bg-blue-900"
      >
        <span aria-hidden="true">{speaking ? '⏹ ' : '🔊 '}</span>
        {speaking ? t.learn.stop : t.learn.readAloud}
      </button>
      {error && (
        <p role="alert" className="mt-3 rounded border-2 border-amber-600 bg-amber-50 p-3 text-lg text-amber-900">
          {t.learn.noVoice}
        </p>
      )}
    </div>
  )
}