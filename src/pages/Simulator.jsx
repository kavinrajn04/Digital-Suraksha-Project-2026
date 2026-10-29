import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'
import { scenarios } from '../data/scenarios'
import MessageBubble from '../features/simulator/MessageBubble'

export default function Simulator() {
  const { t, lang } = useSettings()
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const total = scenarios.length

  function choose(i, options) {
    if (selected !== null) return
    setSelected(i)
    if (options[i].safe) setScore((s) => s + 1)
  }

  function next() {
    setSelected(null)
    setStep((s) => s + 1)
    window.scrollTo({ top: 0 })
  }

  function restart() {
    setStep(0)
    setSelected(null)
    setScore(0)
    window.scrollTo({ top: 0 })
  }

  const btnPrimary = 'rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900'
  const btnOutline = 'rounded-xl border-2 border-blue-800 px-6 py-3 text-xl font-bold text-blue-900 hover:bg-blue-100'

  // Results screen
  if (step >= total) {
    return (
      <section>
        <h1 className="text-4xl font-bold text-blue-900">{t.sim.resultsTitle}</h1>
        <p className="mt-6 text-xl">{t.sim.safeCount}</p>
        <p className="text-5xl font-bold text-blue-900">{score} / {total}</p>
        <p className="mt-4 text-xl">{t.sim.resultsNote}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" onClick={restart} className={btnPrimary}>{t.sim.restart}</button>
          <Link to="/learn" className={btnOutline}>{t.sim.goLearn}</Link>
          <Link to="/quiz" className={btnOutline}>{t.sim.goQuiz}</Link>
        </div>
      </section>
    )
  }

  const s = scenarios[step]
  const c = s[lang]
  const answered = selected !== null
  const chosen = answered ? c.options[selected] : null
  const isLast = step === total - 1

  function optionStyle(i) {
    const base = 'w-full rounded-xl border-2 p-4 text-left text-xl font-semibold '
    if (!answered) return base + 'border-slate-500 bg-white text-slate-900 hover:bg-blue-50'
    if (c.options[i].safe) return base + 'border-green-700 bg-green-50 text-green-900'
    if (i === selected) return base + 'border-red-700 bg-red-50 text-red-900'
    return base + 'border-slate-300 bg-white text-slate-500'
  }

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{t.sim.title}</h1>
      <p className="mt-3 text-xl">{t.sim.subtitle}</p>

      <p className="mt-5 rounded-xl border-2 border-amber-600 bg-amber-50 p-4 text-lg font-semibold text-amber-950">
        <span aria-hidden="true">🛡️ </span>{t.sim.practiceOnly}
      </p>

      <div className="mt-6">
        <p className="text-lg font-semibold">{t.sim.scenario} {step + 1} / {total}</p>
        <div
          className="mt-2 h-3 rounded-full bg-slate-200"
          role="progressbar"
          aria-label={t.sim.scenario}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={step + 1}
        >
          <div className="h-3 rounded-full bg-blue-800" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-blue-900">{c.title}</h2>
      <div className="mt-4">
        <MessageBubble kind={s.kind} sender={c.sender} message={c.message} />
      </div>

      <h3 className="mt-6 text-2xl font-bold">{t.sim.question}</h3>
      <div className="mt-3 grid gap-3">
        {c.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={selected === i}
            onClick={() => choose(i, c.options)}
            className={optionStyle(i)}
          >
            {answered && opt.safe && <span aria-hidden="true">✔ </span>}
            {answered && i === selected && !opt.safe && <span aria-hidden="true">✖ </span>}
            {opt.text}
          </button>
        ))}
      </div>

      {answered && (
        <div role="status" className="mt-6 space-y-5 text-xl leading-relaxed">
          <p className="text-2xl font-bold">{chosen.safe ? t.sim.safeChoice : t.sim.unsafeChoice}</p>
          <p><strong>{t.sim.why}:</strong> {chosen.why}</p>

          <div className="rounded-2xl border-2 border-amber-600 bg-amber-50 p-5 text-amber-950">
            <h3 className="text-xl font-bold"><span aria-hidden="true">⚠️ </span>{t.sim.warnings}</h3>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              {c.warnings.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-green-700 bg-green-50 p-5 text-green-950">
            <h3 className="text-xl font-bold"><span aria-hidden="true">✅ </span>{t.sim.recommended}</h3>
            <p className="mt-2">{c.recommended}</p>
          </div>

          <button type="button" onClick={next} className={btnPrimary}>
            {isLast ? t.sim.seeResults : t.sim.next} →
          </button>
        </div>
      )}
    </section>
  )
}