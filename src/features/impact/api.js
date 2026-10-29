import { supabase } from "../../lib/supabase"

const notConfigured = { data: null, error: new Error("Supabase is not configured") }

export async function fetchImpactStats() {
  if (!supabase) return notConfigured
  const { data, error } = await supabase.rpc("get_impact_stats")
  return { data, error }
}

export async function fetchPairedImprovement() {
  if (!supabase) return notConfigured
  const { data, error } = await supabase.rpc("get_paired_improvement")
  return { data, error }
}

export async function fetchApprovedFeedback() {
  if (!supabase) return notConfigured
  const { data, error } = await supabase
    .from("participant_feedback")
    .select("id, rating, feedback, created_at")
    .eq("is_approved", true)
    .not("feedback", "is", null)
    .order("created_at", { ascending: false })
    .limit(6)
  return { data, error }
}
