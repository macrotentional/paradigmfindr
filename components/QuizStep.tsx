'use client'

import { motion } from 'framer-motion'
import type { Question } from '@/data/questions'

interface QuizStepProps {
  question: Question
  selectedId: string | null
  onSelect: (answerId: string) => void
  stepIndex: number
}

export default function QuizStep({ question, selectedId, onSelect, stepIndex }: QuizStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -32 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="w-full"
    >
        <div className="mb-10">
          <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-4">
            Question {stepIndex + 1}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
            {question.text}
          </h2>
          {question.subtext && (
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{question.subtext}</p>
          )}
        </div>

        <div className="grid gap-3">
          {question.answers.map((answer) => {
            const selected = selectedId === answer.id
            return (
              <button
                key={answer.id}
                onClick={() => onSelect(answer.id)}
                className={`
                  group w-full text-left px-6 py-5 border transition-all duration-200
                  ${selected
                    ? 'border-amber-400 bg-amber-400/10 text-white'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500 hover:text-white'
                  }
                `}
              >
                <span className="text-base leading-snug">{answer.text}</span>
                {selected && (
                  <span className="ml-3 text-amber-400 text-xs font-mono tracking-widest uppercase">
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </motion.div>
  )
}
