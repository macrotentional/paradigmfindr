'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { questions } from '@/data/questions'
import { scoreAnswers } from '@/lib/scoring'
import QuizStep from '@/components/QuizStep'
import ProgressBar from '@/components/ProgressBar'

export default function QuizPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const question = questions[currentStep]
  const selectedId = answers[question.id] ?? null
  const isLast = currentStep === questions.length - 1

  function handleSelect(answerId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: answerId }))
  }

  function handleNext() {
    if (!selectedId) return
    if (isLast) {
      const selectedAnswerIds = Object.values({ ...answers, [question.id]: selectedId })
      const scores = scoreAnswers(selectedAnswerIds, questions)
      const top3 = scores.slice(0, 3).map((s) => `${s.slug}:${s.percentage}`).join(',')
      router.push(`/results?matches=${encodeURIComponent(top3)}`)
    } else {
      setCurrentStep((s) => s + 1)
    }
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          ParadigmFindr
        </span>
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="text-xs font-mono tracking-widest text-zinc-600 uppercase hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
        >
          ← Back
        </button>
      </nav>

      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-16">
        <div className="mb-12">
          <ProgressBar current={currentStep + 1} total={questions.length} />
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <QuizStep
              key={currentStep}
              question={question}
              selectedId={selectedId}
              onSelect={handleSelect}
              stepIndex={currentStep}
            />
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <button
            onClick={handleNext}
            disabled={!selectedId}
            className="w-full bg-amber-400 text-zinc-950 font-black text-sm tracking-widest uppercase py-5 hover:bg-amber-300 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            {isLast ? 'See my matches →' : 'Next →'}
          </button>
        </div>
      </div>
    </main>
  )
}
