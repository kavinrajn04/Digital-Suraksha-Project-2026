import { useState } from 'react'
import { useSettings } from '../../hooks/useSettings'

export default function KnowledgeCheck({ check }) {
  const { t } = useSettings()
  const [selected, setSelected] = useState(null)
  const answered = selected !== null
  const isCorrect = selected === check.answer

  function optionStyle(i) {
    const base = 'w-full rounded-xl border-2 p-4 text-left text-xl font-semibold '
    if (!answered) return base + 'border-slate-500 bg-white text-slate-900 hover:bg-blue-50'
    if (i === check.answer) return base + 'border-green-700 bg-green-50 text-green-900'
    if (i === selected) return base + 'border-red-700 bg-red-50 text-red-900'
    return base + 'border-slate-300 bg-white text-slate-500'
  }

  return (
    <section aria-labelledby="check-heading" className="mt-10 rounded-2xl border-2 border-blue-800 p-6">
      <h2 id="check-heading" className="text-2xl font-bold text-blue-900">{t.learn.check}</h2>
      <p className="mt-3 text-xl">{check.question}</p>

      <div className="mt-4 grid gap-3">
        {check.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={selected === i}
            onClick={() => { if (!answered) setSelected(i) }}
            className={optionStyle(i)}
          >
            {answered && i === check.answer && <span aria-hidden="true">✔ </span>}
            {answered && i === selected && i !== check.answer && <span aria-hidden="true">✖ </span>}
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div role="status" className="mt-4 text-xl">
          <p className="font-bold">{isCorrect ? t.learn.correct : t.learn.incorrect}</p>
          <p className="mt-1">{check.explanation}</p>
          {!isCorrect && (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-3 rounded-xl border-2 border-blue-800 px-5 py-2 font-bold text-blue-900 hover:bg-blue-100"
            >
              {t.learn.tryAgain}
            </button>
          )}
        </div>
      )}
    </section>
  )
}