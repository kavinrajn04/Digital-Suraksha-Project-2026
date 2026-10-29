export function calcImprovement(prePct, postPct) {
  if (prePct == null || postPct == null) return null
  const pointChange = Number((postPct - prePct).toFixed(1)) // percentage points
  const relativeChange = prePct > 0 ? Number((((postPct - prePct) / prePct) * 100).toFixed(1)) : null // % of starting score
  return { pointChange, relativeChange }
}
