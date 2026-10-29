import { useSettings } from '../hooks/useSettings'
import { about, aboutShared } from '../data/about'

export default function About() {
  const { lang } = useSettings()
  const c = about[lang]

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{c.title}</h1>
      <p className="mt-4 text-xl leading-relaxed">{c.intro}</p>

      {c.sections.map((s) => (
        <div key={s.heading} className="mt-8">
          <h2 className="text-3xl font-bold text-blue-900">{s.heading}</h2>
          {s.text && <p className="mt-3 text-xl leading-relaxed">{s.text}</p>}
          {s.list && (
            <ul className="mt-3 list-disc space-y-2 pl-6 text-xl leading-relaxed">
              {s.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-10 rounded-2xl border-2 border-blue-800 p-6">
        <h2 className="text-3xl font-bold text-blue-900">{c.teamHeading}</h2>
        <dl className="mt-4 space-y-2 text-xl">
          <div><dt className="inline font-bold">{c.institutionLabel}: </dt><dd className="inline">{aboutShared.institution}</dd></div>
          <div><dt className="inline font-bold">{c.departmentLabel}: </dt><dd className="inline">{aboutShared.department}</dd></div>
          <div><dt className="inline font-bold">{c.guideLabel}: </dt><dd className="inline">{aboutShared.guide}</dd></div>
        </dl>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {aboutShared.team.map((m, i) => (
            <li key={i} className="rounded-xl bg-slate-100 p-4 text-xl text-slate-900">
              <p className="font-bold">{m.name}</p>
              <p>{m.role}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-lg">{c.disclaimer}</p>
    </section>
  )
}