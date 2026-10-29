import { NavLink, Outlet } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'

const links = [
  ['/', 'home'], ['/learn', 'learn'], ['/simulator', 'simulator'], ['/quiz', 'quiz'],
  ['/emergency', 'emergency'], ['/impact', 'impact'], ['/resources', 'resources'], ['/about', 'about'],
]

export default function Layout() {
  const { t, lang, setLang, fontScale, setFontScale, contrast, setContrast } = useSettings()
  const btn = 'rounded-lg border-2 border-blue-800 px-3 py-2 font-semibold hover:bg-blue-100 hover:text-blue-900'

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="border-b-4 border-blue-800 bg-blue-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 p-4">
          <span className="text-2xl font-bold text-blue-900">Digital Suraksha</span>
          <div className="flex flex-wrap gap-2">
            <button className={btn} onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}>
              {lang === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <button className={btn} aria-label="Smaller text" onClick={() => setFontScale(Math.max(16, fontScale - 2))}>A−</button>
            <button className={btn} aria-label="Larger text" onClick={() => setFontScale(Math.min(28, fontScale + 2))}>A+</button>
            <button className={btn} aria-pressed={contrast} onClick={() => setContrast(!contrast)}>Contrast</button>
          </div>
        </div>
        <nav aria-label="Main" className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-4">
          {links.map(([to, key]) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-lg font-semibold ${isActive ? 'bg-blue-800 text-white' : 'text-blue-900 hover:bg-blue-100'}`}>
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl p-4 md:p-8"><Outlet /></main>
    </div>
  )
}