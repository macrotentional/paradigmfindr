import type { ModalitySlug } from '@/data/modalities'
import type { Question } from '@/data/questions'

export interface ModalityScore {
  slug: ModalitySlug
  score: number
  percentage: number
}

export function scoreAnswers(
  selectedAnswerIds: string[],
  questions: Question[]
): ModalityScore[] {
  const totals: Partial<Record<ModalitySlug, number>> = {}

  for (const question of questions) {
    for (const answerId of selectedAnswerIds) {
      const answer = question.answers.find((a) => a.id === answerId)
      if (!answer) continue
      for (const [slug, weight] of Object.entries(answer.weights) as [ModalitySlug, number][]) {
        totals[slug] = (totals[slug] ?? 0) + weight
      }
    }
  }

  const entries = Object.entries(totals) as [ModalitySlug, number][]
  if (entries.length === 0) return []

  const max = Math.max(...entries.map(([, v]) => v))

  return entries
    .map(([slug, score]) => ({
      slug,
      score,
      percentage: Math.round((score / max) * 100),
    }))
    .sort((a, b) => b.score - a.score)
}
