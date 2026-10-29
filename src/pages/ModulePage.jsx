import { Link, useParams } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'
import { modules } from '../data/modules'
import ReadAloudButton from '../components/ReadAloudButton'
import KnowledgeCheck from '../features/learn/KnowledgeCheck'

function Block({ title, icon, children, className = '' }) {
  return (
    <section className={`mt-8 ${className}`}>
      <h2 className="text-2xl font-bold text-blue-900">
        <span aria-hidden="true">{icon} </span>{title}
      </h2>
      <div className="mt-3 text-xl leading-relaxed">{children}</div>
    </section>
  )
}

function BulletList({ items }) {
  return (
    <ul className="list-disc space-y-3 pl-6">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export default function ModulePage() {
  const { moduleId } = useParams()
  const { t, lang } = useSettings()

  const index = modules.findIndex((m) => m.id === moduleId)
  if (index === -1) {
    return (
      <div>
        <p className="text-xl">{t.learn.notFound}</p>
        <Link to="/learn" className="mt-4 inline-block text-xl font-bold text-blue-800 underline">
          {t.learn.back}
        </Link>
      </div>
    )
  }

  const m = modules[index]
  const c = m[lang]
  const next = modules[index + 1]

  const spokenText = [
    c.title, c.intro, ...c.points, c.example,
    t.learn.warnings, ...c.warnings, t.learn.actions, ...c.actions,
  ].join('\n')

  return (
    <article>
      <Link to="/learn" className="text-xl font-bold text-blue-800 underline">{t.learn.back}</Link>

      <h1 className="mt-4 text-4xl font-bold text-blue-900">
        <span aria-hidden="true">{m.icon} </span>{c.title}
      </h1>
      <div className="mt-4"><ReadAloudButton text={spokenText} /></div>

      <Block title={t.learn.intro} icon="📖"><p>{c.intro}</p></Block>
      <Block title={t.learn.points} icon="💡"><BulletList items={c.points} /></Block>
      <Block title={t.learn.example} icon="🔍"><p className="rounded-xl bg-slate-100 p-4">{c.example}</p></Block>

      <Block title={t.learn.warnings} icon="⚠️" className="rounded-2xl border-2 border-amber-600 bg-amber-50 p-6 text-amber-950">
        <BulletList items={c.warnings} />
      </Block>

      <Block title={t.learn.actions} icon="✅" className="rounded-2xl border-2 border-green-700 bg-green-50 p-6 text-green-950">
        <BulletList items={c.actions} />
      </Block>

      <KnowledgeCheck key={`${m.id}-${lang}`} check={c.check} />

      {next && (
        <Link
          to={`/learn/${next.id}`}
          className="mt-8 inline-block rounded-xl bg-blue-800 px-6 py-3 text-xl font-bold text-white hover:bg-blue-900"
        >
          {t.learn.next}: {next[lang].title} →
        </Link>
      )}
    </article>
  )
}