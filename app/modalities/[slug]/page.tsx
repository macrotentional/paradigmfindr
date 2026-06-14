import Link from 'next/link'
import { notFound } from 'next/navigation'
import { modalities } from '@/data/modalities'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return modalities.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const modality = modalities.find((m) => m.slug === slug)
  if (!modality) return {}
  return {
    title: `${modality.fullName} — ParadigmFindr`,
    description: modality.tagline,
  }
}

const familyLabels: Record<string, string> = {
  'cognitive-behavioral': 'Cognitive-Behavioral',
  'humanistic': 'Humanistic',
  'psychodynamic': 'Psychodynamic',
  'somatic': 'Somatic',
  'integrative': 'Integrative',
  'process': 'Process',
}

export default async function ModalityPage({ params }: PageProps) {
  const { slug } = await params
  const modality = modalities.find((m) => m.slug === slug)
  if (!modality) notFound()

  return (
    <main className="min-h-screen bg-zinc-950">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link
          href="/modalities"
          className="text-xs font-mono tracking-widest text-zinc-500 uppercase hover:text-white transition-colors"
        >
          ← All modalities
        </Link>
        <Link
          href="/quiz"
          className="text-xs font-mono tracking-widest text-amber-400 uppercase hover:text-amber-300 transition-colors"
        >
          Take the quiz →
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              {modality.name}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              {familyLabels[modality.theoreticalFamily]}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
            {modality.fullName}
          </h1>
          <p className="text-xl text-amber-400 font-mono leading-relaxed">
            &ldquo;{modality.tagline}&rdquo;
          </p>
        </div>

        {/* At a glance chips */}
        <div className="flex flex-wrap gap-3 mb-16 pb-16 border-b border-zinc-800">
          <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-2 capitalize">
            {modality.sessionStructure} structure
          </span>
          <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-2 capitalize">
            {modality.timeOrientation === 'all' ? 'Past + present + future' : `${modality.timeOrientation}-oriented`}
          </span>
          {modality.bodyBased && (
            <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-2">
              Body-based
            </span>
          )}
          {modality.relationalFocus && (
            <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-2">
              Relational focus
            </span>
          )}
        </div>

        {/* Description */}
        <section className="mb-12">
          <p className="text-zinc-300 text-lg leading-relaxed">{modality.description}</p>
        </section>

        {/* What it treats */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
            Commonly addressed
          </h2>
          <div className="flex flex-wrap gap-2">
            {modality.whatItTreats.map((item) => (
              <span
                key={item}
                className="text-sm text-zinc-300 border border-zinc-800 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* What sessions look like */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
            What sessions look like
          </h2>
          <p className="text-zinc-300 leading-relaxed">{modality.whatSessionsLookLike}</p>
        </section>

        {/* Best for / Not ideal for */}
        <section className="grid md:grid-cols-2 gap-6 mb-16 pb-16 border-b border-zinc-800">
          <div className="border border-zinc-800 p-6">
            <h3 className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-3">
              Best for
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{modality.bestFor}</p>
          </div>
          <div className="border border-zinc-800 p-6">
            <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
              Less suited for
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{modality.notIdealFor}</p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/quiz"
            className="inline-block bg-amber-400 text-zinc-950 font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber-300 transition-colors"
          >
            Find your match →
          </Link>
          <Link
            href="/modalities"
            className="inline-block border border-zinc-700 text-zinc-400 font-mono text-xs tracking-widest uppercase px-8 py-4 hover:border-zinc-500 hover:text-white transition-colors"
          >
            All modalities
          </Link>
        </div>
      </article>
    </main>
  )
}
