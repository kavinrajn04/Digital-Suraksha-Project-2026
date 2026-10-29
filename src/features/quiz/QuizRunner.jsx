import { useState } from 'react'
import { useSettings } from '../../hooks/useSettings'

export default function QuizRunner({ questions, onComplete }) {
  const { t, lang } = useSettings()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)

  const total = questions.length
  const q = questions[index][lang]
  const answered = selected !== null
  const isCorrect = selected === q.answer
  const isLast = index === total - 1

  function choose(i) {
    if (answered) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      onComplete({ score, total })
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function optionStyle(i) {
    const base = 'w-full rounded-xl border-2 p-4 text-left text-xl font-semibold '
    if (!answered) return base + 'border-slate-500 bg-white text-slate-900 hover:bg-blue-50'
    if (i === q.answer) return base + 'border-green-700 bg-green-50 text-green-900'
    if (i === selected) return base + 'border-red-700 bg-red-50 text-red-900'
    return base + 'border-slate-300 bg-white text-slate-500'
  }

  return (
    <section>
      <p className="text-lg font-semibold">{t.quiz.question} {index + 1} / {total}</p>
      <div
        className="mt-2 h-3 rounded-full bg-slate-200"
        role="progressbar"
        aria-label={t.quiz.question}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
      >
        <div className="h-3 rounded-full bg-blue-800" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <h2 className="mt-6 text-2xl font-bold leading-snug">{q.question}</h2>

      <div className="mt-4 grid gap-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={selected === i}
            onClick={() => choose(i)}
            className={optionStyle(i)}
          >
            {answered && i === q.answer && <span aria-hidden="true">✔ </span>}
            {answered && i === selected && i !== q.answer && <span aria-hidden="true">✖ </span>}
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div role="status" className="mt-6 text-xl leading-relaxed">
          <p className="text-2xl font-bold">{isCorrect ? t.quiz.correct : t.quiz.incorrect}</p>
          <p className="mt-2">{q.explanation}</p>
          <button
            type="button"
            onClick={next}
            className="mt-5 rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900"
          >
            {isLast ? t.quiz.finish : t.quiz.next} →
          </button>
        </div>
      )}
    </section>
  )
}