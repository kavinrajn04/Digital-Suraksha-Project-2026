import { useEffect, useState } from 'react'
import { translations } from '../locales'
import { SettingsContext } from './SettingsContext'

export function SettingsProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [fontScale, setFontScale] = useState(() => Number(localStorage.getItem('fontScale')) || 18)
  const [contrast, setContrast] = useState(() => localStorage.getItem('contrast') === 'true')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('fontScale', fontScale)
    document.documentElement.style.setProperty('--base-font', `${fontScale}px`)
  }, [fontScale])

  useEffect(() => {
    localStorage.setItem('contrast', contrast)
    document.documentElement.classList.toggle('high-contrast', contrast)
  }, [contrast])

  const t = translations[lang]

  return (
    <SettingsContext.Provider
      value={{ lang, setLang, fontScale, setFontScale, contrast, setContrast, t }}
    >
      {children}
    </SettingsContext.Provider>
  )
}