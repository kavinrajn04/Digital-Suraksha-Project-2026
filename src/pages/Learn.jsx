import { Link } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'
import { modules } from '../data/modules'
import {} from 'lucide-react'

export default function Learn() {
  const { t, lang } = useSettings()

  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-900">{t.learn.title}</h1>
      <p className="mt-3 text-xl">{t.learn.subtitle}</p>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {modules.map((m, i) => (
          <li key={m.id}>
            <Link
              to={`/learn/${m.id}`}
              className="block h-full rounded-2xl border-2 border-blue-800 p-6 hover:bg-blue-50"
            >
              <span aria-hidden="true" className="text-4xl">{m.icon}</span>
              <h2 className="mt-2 text-2xl font-bold text-blue-900">{i + 1}. {m[lang].title}</h2>
              <p className="mt-2 text-lg">{m[lang].summary}</p>
              <span className="mt-4 inline-block text-lg font-bold text-blue-800 underline">
                {t.learn.openModule}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}