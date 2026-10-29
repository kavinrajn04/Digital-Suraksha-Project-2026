import { useEffect, useState } from 'react'
import { useSettings } from '../hooks/useSettings'
import { getQuestionSet } from '../data/quizQuestions'
import QuizRunner from '../features/quiz/QuizRunner'
import QuizResult from '../features/quiz/QuizResult'
import { fetchPublishedWorkshops, submitAssessment } from '../features/assessments/api'
import { generateParticipantCode, isValidParticipantCode } from '../utils/participantCode'

const btnPrimary = 'rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900'
const field = 'mt-2 w-full rounded-xl border-2 border-slate-500 bg-white p-3 text-xl text-slate-900'

export default function Assessment() {
  const { t } = useSettings()

  const [workshops, setWorkshops] = useState(null) // null = still loading
  const [loadError, setLoadError] = useState(false)

  const [workshopId, setWorkshopId] = useState('')
  const [type, setType] = useState('pre-test')
  const [codeInput, setCodeInput] = useState('')
  const [formError, setFormError] = useState('')

  const [phase, setPhase] = useState('setup') // setup | running | done
  const [code, setCode] = useState(null)
  const [result, setResult] = useState(null)
  const [saveState, setSaveState] = useState('idle') // idle | saving | saved | duplicate | error

  useEffect(() => {
    let active = true
    fetchPublishedWorkshops().then(({ data, error }) => {
      if (!active) return
      if (error) setLoadError(true)
      else setWorkshops(data)
    })
    return () => { active = false }
  }, [])

  function start() {
    if (!workshopId) { setFormError(t.assess.pickWorkshop); return }

    let finalCode = null
    if (type === 'pre-test') {
      finalCode = generateParticipantCode()
    } else if (codeInput.trim()) {
      finalCode = codeInput.trim().toUpperCase()
      if (!isValidParticipantCode(finalCode)) { setFormError(t.assess.codeInvalid); return }
    }

    setFormError('')
    setCode(finalCode)
    setResult(null)
    setSaveState('idle')
    setPhase('running')
    window.scrollTo({ top: 0 })
  }

  async function save(r) {
    setSaveState('saving')
    const { error } = await submitAssessment({
      workshopId,
      type,
      score: r.score,
      total: r.total,
      participantCode: code,
    })
    if (error) setSaveState(error.code === '23505' ? 'duplicate' : 'error')
    else setSaveState('saved')
  }

  function handleComplete(r) {
    setResult(r)
    setPhase('done')
    save(r)
  }

  function reset() {
    setPhase('setup')
    setCode(null)
    setResult(null)
    setCodeInput('')
    setSaveState('idle')
  }

  const questionSet = getQuestionSet(type === 'pre-test' ? 'A' : 'B')

  const codeBanner = code && (
    <div className="mt-6 rounded-xl border-2 border-blue-800 bg-blue-50 p-4 text-blue-950">
      <p className="text-lg font-semibold">{t.assess.yourCode}</p>
      <p className="text-3xl font-bold tracking-widest">{code}</p>
      {type === 'pre-test' && <p className="mt-2 text-lg">{t.assess.codeHelpPre}</p>}
    </div>
  )

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{t.assess.title}</h1>
      <p className="mt-3 text-xl">{t.assess.subtitle}</p>
      <p className="mt-3 text-lg font-semibold">🔒 {t.assess.privacy}</p>

      {phase === 'setup' && (
        <div className="mt-6 space-y-6">
          {loadError && <p role="alert" className="text-xl font-semibold text-red-800">{t.assess.loadError}</p>}
          {!loadError && workshops === null && <p className="text-xl">{t.assess.loading}</p>}
          {workshops && workshops.length === 0 && <p className="text-xl">{t.assess.noWorkshops}</p>}

          {workshops && workshops.length > 0 && (
            <>
              <div>
                <label htmlFor="workshop" className="text-xl font-bold">{t.assess.chooseWorkshop}</label>
                <select id="workshop" value={workshopId} onChange={(e) => setWorkshopId(e.target.value)} className={field}>
                  <option value="">{t.assess.select}</option>
                  {workshops.map((w) => (
                    <option key={w.id} value={w.id}>{w.title} · {w.location} · {w.workshop_date}</option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="text-xl font-bold">{t.assess.chooseType}</legend>
                {[['pre-test', t.assess.pre], ['post-test', t.assess.post]].map(([value, label]) => (
                  <label key={value} className="mt-3 flex items-center gap-3 text-xl">
                    <input
                      type="radio"
                      name="type"
                      value={value}
                      checked={type === value}
                      onChange={() => setType(value)}
                      className="h-6 w-6"
                    />
                    {label}
                  </label>
                ))}
              </fieldset>

              {type === 'post-test' && (
                <div>
                  <label htmlFor="code" className="text-xl font-bold">{t.assess.codeEnter}</label>
                  <input
                    id="code"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                    maxLength={12}
                    autoComplete="off"
                    className={`${field} uppercase tracking-widest`}
                  />
                </div>
              )}

              {formError && <p role="alert" className="text-xl font-semibold text-red-800">{formError}</p>}
              <button type="button" onClick={start} className={btnPrimary}>{t.assess.start}</button>
            </>
          )}
        </div>
      )}

      {phase === 'running' && (
        <div>
          {codeBanner}
          <div className="mt-6">
            <QuizRunner questions={questionSet} onComplete={handleComplete} />
          </div>
        </div>
      )}

      {phase === 'done' && result && (
        <div className="mt-6">
          <QuizResult score={result.score} total={result.total}>
            {codeBanner}
            <div role="status" className="mt-6 text-xl font-semibold">
              {saveState === 'saving' && <p>{t.assess.saving}</p>}
              {saveState === 'saved' && <p className="text-green-800">✔ {t.assess.saved}</p>}
              {saveState === 'duplicate' && <p className="text-red-800">✖ {t.assess.duplicate}</p>}
              {saveState === 'error' && (
                <div>
                  <p className="text-red-800">✖ {t.assess.saveError}</p>
                  <button type="button" onClick={() => save(result)} className={`${btnPrimary} mt-3`}>
                    {t.assess.retrySave}
                  </button>
                </div>
              )}
            </div>
            <button type="button" onClick={reset} className={`${btnPrimary} mt-8`}>{t.assess.newTest}</button>
          </QuizResult>
        </div>
      )}
    </section>
  )
}