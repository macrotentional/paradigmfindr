import Link from 'next/link'
import type { Modality } from '@/data/modalities'

interface ModalityCardProps {
  modality: Modality
  percentage: number
  rank: number
}

const rankLabels = ['Top match', '2nd match', '3rd match']

const familyLabels: Record<Modality['theoreticalFamily'], string> = {
  'cognitive-behavioral': 'Cognitive-Behavioral',
  'humanistic': 'Humanistic',
  'psychodynamic': 'Psychodynamic',
  'somatic': 'Somatic',
  'integrative': 'Integrative',
  'process': 'Process',
}

export default function ModalityCard({ modality, percentage, rank }: ModalityCardProps) {
  return (
    <Link href={`/modalities/${modality.slug}`} className="group block">
      <div className="border border-zinc-700 bg-zinc-900 p-8 transition-all duration-200 hover:border-amber-400/50 hover:bg-zinc-800/80">

        {/* Rank + percentage header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
              {rankLabels[rank - 1] ?? `#${rank} match`}
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
              {modality.fullName}
            </h3>
            <p className="text-zinc-500 text-xs font-mono mt-1">
              {modality.name} · {familyLabels[modality.theoreticalFamily]}
            </p>
          </div>
          <div className="text-right shrink-0 ml-6">
            <span className="text-5xl font-black text-amber-400 leading-none">{percentage}</span>
            <span className="text-amber-400 font-black text-xl">%</span>
            <p className="text-zinc-600 text-xs font-mono mt-1">match</p>
          </div>
        </div>

        {/* Match bar */}
        <div className="w-full h-1 bg-zinc-800 mb-6">
          <div
            className="h-1 bg-amber-400 transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Tagline */}
        <p className="text-zinc-400 text-sm italic mb-4">
          &ldquo;{modality.tagline}&rdquo;
        </p>

        {/* Description excerpt */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {modality.description.slice(0, 200)}…
        </p>

        {/* Tags */}
        <div className="flex items-center gap-3 flex-wrap">
          {modality.bodyBased && (
            <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1">
              Body-based
            </span>
          )}
          {modality.relationalFocus && (
            <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1">
              Relational
            </span>
          )}
          <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 capitalize">
            {modality.sessionStructure} structure
          </span>
          <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 capitalize">
            {modality.timeOrientation === 'all' ? 'Past · present · future' : `${modality.timeOrientation}-oriented`}
          </span>
        </div>

        <p className="text-xs font-mono text-zinc-600 mt-6 group-hover:text-amber-400 transition-colors">
          Deep dive →
        </p>
      </div>
    </Link>
  )
}
