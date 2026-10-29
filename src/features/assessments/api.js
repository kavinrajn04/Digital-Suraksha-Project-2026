import { supabase } from "../../lib/supabase"

const notConfigured = { data: null, error: new Error("Supabase is not configured") }

export async function fetchPublishedWorkshops() {
  if (!supabase) return notConfigured
  const { data, error } = await supabase
    .from("workshops")
    .select("id, title, location, workshop_date")
    .order("workshop_date", { ascending: false })
  return { data, error }
}

// No .select() after insert: assessment rows are intentionally not readable by the app.
export async function submitAssessment({ workshopId, type, score, total, participantCode }) {
  if (!supabase) return { error: new Error("Supabase is not configured") }
  const { error } = await supabase.from("assessment_results").insert({
    workshop_id: workshopId,
    assessment_type: type, // 'pre-test' | 'post-test'
    score,
    total_questions: total,
    participant_code: participantCode || null,
  })
  return { error }
}

export async function submitFeedback({ workshopId, rating, feedback }) {
  if (!supabase) return { error: new Error("Supabase is not configured") }
  const { error } = await supabase.from("participant_feedback").insert({
    workshop_id: workshopId,
    rating,
    feedback: feedback?.trim() || null,
  })
  return { error }
}
