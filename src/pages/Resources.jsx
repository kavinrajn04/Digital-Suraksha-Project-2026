import { useSettings } from '../hooks/useSettings'
import { resources, resourceCategories, resourcesText } from '../data/resources'

export default function Resources() {
  const { lang } = useSettings()
  const x = resourcesText[lang]

  const groups = Object.keys(resourceCategories)
    .map((key) => ({ key, items: resources.filter((r) => r.category === key) }))
    .filter((g) => g.items.length > 0)

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{x.title}</h1>
      <p className="mt-3 text-xl">{x.subtitle}</p>
      <p className="mt-4 rounded-xl border-2 border-blue-800 bg-blue-50 p-4 text-lg text-blue-950">
        <span aria-hidden="true">💡 </span>{x.tip}
      </p>

      {groups.map((g) => (
        <div key={g.key} className="mt-10">
          <h2 className="text-3xl font-bold text-blue-900">{resourceCategories[g.key][lang]}</h2>
          <ul className="mt-4 grid gap-6 md:grid-cols-2">
            {g.items.map((r) => (
              <li key={r.id} className="rounded-2xl border-2 border-blue-800 p-6">
                <h3 className="text-2xl font-bold">{r[lang].title}</h3>
                <p className="mt-2 text-xl leading-relaxed">{r[lang].description}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-xl bg-blue-800 px-5 py-3 text-xl font-bold text-white hover:bg-blue-900"
                >
                  {x.open} ↗ <span className="sr-only">{x.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="mt-10 text-lg">{x.note}</p>
    </section>
  )
}