import { useCallback, useEffect, useRef, useState } from "react"

const LOCALES = { en: "en-IN", ta: "ta-IN" }

function pickVoice(lang) {
  const voices = window.speechSynthesis.getVoices()
  if (voices.length === 0) return { voice: null, known: false }
  const target = LOCALES[lang].toLowerCase()
  const voice =
    voices.find((v) => v.lang.replace("_", "-").toLowerCase() === target) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(lang))
  return { voice: voice || null, known: true }
}

export function useReadAloud(lang) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window
  const [speaking, setSpeaking] = useState(false)
  const [error, setError] = useState(false)
  const runId = useRef(0)

  const stop = useCallback(() => {
    runId.current += 1
    if (supported) window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(
    (text) => {
      if (!supported) {
        setError(true)
        return
      }
      window.speechSynthesis.cancel()

      const { voice, known } = pickVoice(lang)
      if (known && !voice && lang === "ta") {
        setError(true)
        return
      }
      setError(false)

      runId.current += 1
      const myRun = runId.current
      const chunks = text
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)

      chunks.forEach((chunk, i) => {
        const u = new SpeechSynthesisUtterance(chunk)
        u.lang = LOCALES[lang]
        if (voice) u.voice = voice
        u.rate = 0.9
        if (i === chunks.length - 1) {
          const done = () => {
            if (runId.current === myRun) setSpeaking(false)
          }
          u.onend = done
          u.onerror = done
        }
        window.speechSynthesis.speak(u)
      })
      setSpeaking(true)
    },
    [lang, supported],
  )

  // Stop talking when the user leaves the page
  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [supported])

  return { supported, speaking, error, speak, stop }
}
