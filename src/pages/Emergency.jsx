import { useSettings } from '../hooks/useSettings'
import { emergency, contacts } from '../data/emergency'

function BulletList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export default function Emergency() {
  const { lang } = useSettings()
  const c = emergency[lang]

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">
        <span aria-hidden="true">🚨 </span>{c.title}
      </h1>
      <p className="mt-3 text-xl">{c.subtitle}</p>

      {/* Urgent action banner */}
      <div className="mt-6 rounded-2xl border-4 border-red-700 bg-red-50 p-6 text-red-950">
        <h2 className="text-2xl font-bold">{c.urgentTitle}</h2>
        <p className="mt-2 text-xl">{c.urgentText}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={contacts.helplineHref}
            className="rounded-xl bg-red-700 px-6 py-4 text-2xl font-bold text-white hover:bg-red-800"
          >
            <span aria-hidden="true">📞 </span>{c.callButton}
          </a>
          <a
            href={contacts.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-red-700 px-6 py-4 text-xl font-bold text-red-900 hover:bg-red-100"
          >
            {c.portalButton} ↗
          </a>
        </div>
      </div>

      {/* Flow summary */}
      <p className="mt-8 text-2xl font-bold text-blue-900" aria-hidden="true">
        {c.steps.map((s) => s.label).join(' → ')}
      </p>

      {/* The four steps */}
      <ol className="mt-4 space-y-6">
        {c.steps.map((step, i) => (
          <li key={i} className="rounded-2xl border-2 border-blue-800 p-6">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-blue-900">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white"
              >
                {i + 1}
              </span>
              {step.label}
            </h2>
            <p className="mt-3 text-xl font-semibold">{step.intro}</p>
            <div className="mt-3 text-xl leading-relaxed">
              <BulletList items={step.details} />
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl border-2 border-green-700 bg-green-50 p-6 text-green-950">
        <h2 className="text-2xl font-bold"><span aria-hidden="true">📸 </span>{c.evidenceTitle}</h2>
        <div className="mt-3 text-xl leading-relaxed"><BulletList items={c.evidence} /></div>
      </div>

      <div className="mt-6 rounded-2xl border-2 border-amber-600 bg-amber-50 p-6 text-amber-950">
        <h2 className="text-2xl font-bold"><span aria-hidden="true">🙅 </span>{c.dontTitle}</h2>
        <div className="mt-3 text-xl leading-relaxed"><BulletList items={c.donts} /></div>
      </div>

      <p className="mt-8 text-lg">{c.footer}</p>
    </section>
  )
}