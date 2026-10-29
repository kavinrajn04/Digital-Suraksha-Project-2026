import { useEffect, useState } from 'react'
import { useSettings } from '../hooks/useSettings'
import { modules } from '../data/modules'
import { impactText } from '../features/impact/text'
import {
  fetchImpactStats,
  fetchPairedImprovement,
  fetchApprovedFeedback,
} from '../features/impact/api'
import { calcImprovement } from '../utils/improvement'

const fmtSigned = (n) => (n > 0 ? `+${n}` : `${n}`)
const pct = (v) => (v == null ? '—' : `${v}%`)

function StatCard({ label, value, note }) {
  return (
    <div className="rounded-2xl border-2 border-blue-800 p-5">
      <p className="text-lg font-semibold">{label}</p>
      <p className="mt-1 text-4xl font-bold text-blue-900">{value}</p>
      {note && <p className="mt-2 text-base">{note}</p>}
    </div>
  )
}

function Stars({ rating }) {
  return (
    <span role="img" aria-label={`${rating} / 5`} className="text-2xl text-amber-600">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

export default function Impact() {
  const { lang } = useSettings()
  const x = impactText[lang]

  const [state, setState] = useState({ status: 'loading' })
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let active = true
    Promise.all([fetchImpactStats(), fetchPairedImprovement(), fetchApprovedFeedback()])
      .then(([s, p, f]) => {
        if (!active) return
        if (s.error || !s.data) {
          setState({ status: 'error' })
        } else {
          setState({
            status: 'ready',
            stats: s.data,
            paired: p.error ? null : p.data,
            comments: f.error ? [] : f.data || [],
          })
        }
      })
      .catch(() => { if (active) setState({ status: 'error' }) })
    return () => { active = false }
  }, [reloadKey])

  function retry() {
    setState({ status: 'loading' })
    setReloadKey((k) => k + 1)
  }

  const header = (
    <>
      <h1 className="text-4xl font-bold text-blue-900">{x.title}</h1>
      <p className="mt-3 text-xl">{x.subtitle}</p>
    </>
  )

  if (state.status === 'loading') {
    return <section>{header}<p role="status" className="mt-8 text-xl">{x.loading}</p></section>
  }

  if (state.status === 'error') {
    return (
      <section>
        {header}
        <p role="alert" className="mt-8 text-xl font-semibold text-red-800">{x.error}</p>
        <button
          type="button"
          onClick={retry}
          className="mt-4 rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900"
        >
          {x.retry}
        </button>
      </section>
    )
  }

  const { stats, paired, comments } = state
  const hasData = Number(stats.workshops_conducted) > 0

  if (!hasData) {
    return (
      <section>
        {header}
        <div className="mt-8 rounded-2xl border-2 border-blue-800 p-6">
          <h2 className="text-2xl font-bold text-blue-900">{x.emptyTitle}</h2>
          <p className="mt-2 text-xl">{x.emptyText}</p>
        </div>
      </section>
    )
  }

  const pre = stats.avg_pre_pct
  const post = stats.avg_post_pct
  const change = calcImprovement(pre, post)

  const pairsCount = Number(paired?.pairs ?? 0)
  const pairedChange = calcImprovement(paired?.avg_pre_pct, paired?.avg_post_pct)

  return (
    <section>
      {header}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard label={x.participants} value={stats.participants_trained} />
        <StatCard label={x.workshops} value={stats.workshops_conducted} />
        <StatCard label={x.modules} value={modules.length} />
      </div>

      {/* Pre-test / post-test */}
      <h2 className="mt-10 text-3xl font-bold text-blue-900">{x.scoresTitle}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <StatCard label={x.preAvg} value={pct(pre)} />
        <StatCard label={x.postAvg} value={pct(post)} />
      </div>
      <p className="mt-3 text-lg">{x.basedOn(stats.pre_test_count, stats.post_test_count)}</p>

      {change ? (
        <div className="mt-6 rounded-2xl border-2 border-blue-800 p-5">
          <h3 className="text-2xl font-bold text-blue-900">{x.changeTitle}</h3>
          <dl className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-lg font-semibold">{x.pointsLabel}</dt>
              <dd className="text-3xl font-bold text-blue-900">
                {fmtSigned(change.pointChange)} {x.pp}
              </dd>
              <dd className="text-base">{x.pointsHelp}</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold">{x.relativeLabel}</dt>
              <dd className="text-3xl font-bold text-blue-900">
                {change.relativeChange === null ? '—' : `${fmtSigned(change.relativeChange)}%`}
              </dd>
              <dd className="text-base">{x.relativeHelp}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <p className="mt-6 text-xl">{x.needBoth}</p>
      )}

      {/* Matched participants */}
      <div className="mt-6 rounded-2xl border-2 border-slate-400 p-5">
        <h3 className="text-2xl font-bold text-blue-900">{x.pairedTitle}</h3>
        <p className="mt-1 text-lg">{x.pairedHelp}</p>
        <p className="mt-2 text-xl font-semibold">{x.pairedCount(pairsCount)}</p>
        {pairedChange ? (
          <p className="mt-2 text-xl">
            {pct(paired.avg_pre_pct)} → {pct(paired.avg_post_pct)} (
            {fmtSigned(pairedChange.pointChange)} {x.pp}
            {pairedChange.relativeChange !== null && `, ${fmtSigned(pairedChange.relativeChange)}%`})
          </p>
        ) : (
          <p className="mt-2 text-lg">{x.pairedHidden}</p>
        )}
      </div>

      <p className="mt-6 rounded-xl border-2 border-amber-600 bg-amber-50 p-4 text-lg text-amber-950">
        <span aria-hidden="true">ℹ️ </span>{x.caution}
      </p>

      {/* Feedback */}
      <h2 className="mt-10 text-3xl font-bold text-blue-900">{x.feedbackTitle}</h2>
      {Number(stats.feedback_count) > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <StatCard
            label={x.avgRating}
            value={`${stats.avg_rating} ${x.outOf5}`}
            note={x.feedbackCount(stats.feedback_count)}
          />
        </div>
      ) : (
        <p className="mt-4 text-xl">{x.noFeedback}</p>
      )}

      <h3 className="mt-6 text-2xl font-bold">{x.commentsTitle}</h3>
      {comments.length > 0 ? (
        <ul className="mt-3 space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="rounded-2xl border-2 border-slate-400 p-4">
              <Stars rating={c.rating} />
              <p className="mt-1 text-xl">{c.feedback}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-xl">{x.noComments}</p>
      )}
      <p className="mt-3 text-base">{x.commentsNote}</p>
    </section>
  )
}