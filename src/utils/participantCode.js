const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"

export function generateParticipantCode(length = 8) {
  const bytes = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("")
}

export const isValidParticipantCode = (c) => /^[A-Z0-9]{6,12}$/.test(c)
