import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'
import { getQuestionSet } from '../data/quizQuestions'
import QuizRunner from '../features/quiz/QuizRunner'
import QuizResult from '../features/quiz/QuizResult'

const btnPrimary = 'rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900'
const btnOutline = 'rounded-xl border-2 border-blue-800 px-6 py-3 text-xl font-bold text-blue-900 hover:bg-blue-100'

export default function Quiz() {
  const { t } = useSettings()
  const [set, setSet] = useState(null) // null = choose screen
  const [result, setResult] = useState(null)
  const [runKey, setRunKey] = useState(0)

  function begin(s) {
    setSet(s)
    setResult(null)
    setRunKey((k) => k + 1)
    window.scrollTo({ top: 0 })
  }

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{t.quiz.title}</h1>

      {!set && (
        <div>
          <p className="mt-3 text-xl">{t.quiz.subtitle}</p>
          <h2 className="mt-6 text-2xl font-bold">{t.quiz.chooseQuiz}</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <button type="button" onClick={() => begin('A')} className={btnPrimary}>{t.quiz.quizOne}: {t.quiz.start}</button>
            <button type="button" onClick={() => begin('B')} className={btnPrimary}>{t.quiz.quizTwo}: {t.quiz.start}</button>
          </div>
          <p className="mt-6 text-lg">{t.quiz.notSaved}</p>
          <p className="mt-4 text-lg">
            <Link to="/assessment" className="font-bold text-blue-800 underline">{t.quiz.workshopLink}</Link>
          </p>
        </div>
      )}

      {set && !result && (
        <div className="mt-6">
          <QuizRunner key={runKey} questions={getQuestionSet(set)} onComplete={setResult} />
        </div>
      )}

      {set && result && (
        <div className="mt-6">
          <QuizResult score={result.score} total={result.total}>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => begin(set)} className={btnPrimary}>{t.quiz.retake}</button>
              <button type="button" onClick={() => begin(set === 'A' ? 'B' : 'A')} className={btnOutline}>{t.quiz.otherQuiz}</button>
              <Link to="/learn" className={btnOutline}>{t.quiz.reviewLessons}</Link>
            </div>
          </QuizResult>
        </div>
      )}
    </section>
  )
}