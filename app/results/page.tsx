import Link from 'next/link'
import { modalities } from '@/data/modalities'
import ModalityCard from '@/components/ModalityCard'
import type { ModalitySlug } from '@/data/modalities'

interface ResultsPageProps {
  searchParams: Promise<{ matches?: string }>
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const params = await searchParams
  const matchesParam = params.matches ?? ''

  const parsed = matchesParam
    .split(',')
    .map((entry) => {
      const [slug, pct] = entry.split(':')
      return { slug: slug as ModalitySlug, percentage: parseInt(pct ?? '0', 10) }
    })
    .filter(({ slug }) => modalities.some((m) => m.slug === slug))
    .slice(0, 3)

  const hasResults = parsed.length > 0

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-zinc-500 uppercase hover:text-white transition-colors"
        >
          ParadigmFindr
        </Link>
        <Link
          href="/quiz"
          className="text-xs font-mono tracking-widest text-zinc-600 uppercase hover:text-white transition-colors"
        >
          Retake quiz
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto w-full px-6 py-16">
        {hasResults ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-4">
                Your suggestions
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                Your top{' '}
                <span className="text-amber-400">{parsed.length}</span> matches
              </h1>
              <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
                These modalities fit the shape of how you answered — not a diagnosis, not a
                prescription. Think of them as informed starting points. You choose what resonates,
                what to explore, and what to ask a therapist about.
              </p>
            </div>

            {/* Disclaimer banner */}
            <div className="border border-zinc-800 bg-zinc-900/50 px-6 py-4 mb-12">
              <p className="text-zinc-500 text-xs font-mono leading-relaxed">
                <span className="text-zinc-400">This is a suggestion, not a diagnosis.</span>{' '}
                ParadigmFindr doesn&apos;t assess mental health conditions or recommend specific
                treatment. It helps you understand the landscape of therapy approaches so you can
                make an informed, autonomous choice — on your own terms.
              </p>
            </div>

            {/* Match cards */}
            <div className="grid gap-4">
              {parsed.map(({ slug, percentage }, i) => {
                const modality = modalities.find((m) => m.slug === slug)
                if (!modality) return null
                return (
                  <ModalityCard
                    key={slug}
                    modality={modality}
                    percentage={percentage}
                    rank={i + 1}
                  />
                )
              })}
            </div>

            {/* Agency callout */}
            <div className="mt-16 border border-zinc-800 px-8 py-10 bg-zinc-900/30">
              <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-3">
                Your move
              </p>
              <p className="text-white font-bold text-lg mb-3">
                You don&apos;t have to accept whatever therapy you&apos;re handed.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Most people end up in therapy by default — whatever their insurance covers, whoever
                has availability. ParadigmFindr exists so you can walk into that first session with
                a clear sense of what approach resonates with you, and ask for it by name. That&apos;s
                not demanding — that&apos;s good self-advocacy.
              </p>
            </div>

            {/* Browse all */}
            <div className="mt-12 pt-12 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm mb-6">
                Want to explore the full landscape?
              </p>
              <Link
                href="/modalities"
                className="inline-block border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase px-8 py-4 hover:border-zinc-500 hover:text-white transition-colors"
              >
                Browse all {modalities.length} modalities →
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start">
            <p className="text-zinc-500 mb-6">No results found. Take the quiz to get your matches.</p>
            <Link
              href="/quiz"
              className="inline-block bg-amber-400 text-zinc-950 font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber-300 transition-colors"
            >
              Take the quiz →
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
