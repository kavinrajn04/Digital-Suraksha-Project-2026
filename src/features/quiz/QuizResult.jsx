import { useSettings } from '../../hooks/useSettings'

export default function QuizResult({ score, total, children }) {
  const { t } = useSettings()
  const pct = Math.round((score / total) * 100)
  const message = pct >= 80 ? t.quiz.great : pct >= 50 ? t.quiz.good : t.quiz.low

  return (
    <section role="status">
      <h2 className="text-3xl font-bold text-blue-900">{t.quiz.resultTitle}</h2>
      <p className="mt-4 text-xl">{t.quiz.scoreLabel}</p>
      <p className="text-5xl font-bold text-blue-900">{score} / {total} ({pct}%)</p>
      <p className="mt-4 text-xl">{message}</p>
      {children}
    </section>
  )
}