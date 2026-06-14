'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          {current} / {total}
        </span>
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          {pct}%
        </span>
      </div>
      <div className="h-px w-full bg-zinc-800">
        <div
          className="h-px bg-amber-400 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
