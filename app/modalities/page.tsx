import Link from 'next/link'
import { modalities } from '@/data/modalities'

const familyLabels: Record<string, string> = {
  'cognitive-behavioral': 'Cognitive-Behavioral',
  'humanistic': 'Humanistic',
  'psychodynamic': 'Psychodynamic',
  'somatic': 'Somatic',
  'integrative': 'Integrative',
  'process': 'Process',
}

const families = [...new Set(modalities.map((m) => m.theoreticalFamily))]

export default function ModalitiesPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-zinc-500 uppercase hover:text-white transition-colors"
        >
          ← ParadigmFindr
        </Link>
        <Link
          href="/quiz"
          className="text-xs font-mono tracking-widest text-amber-400 uppercase hover:text-amber-300 transition-colors"
        >
          Take the quiz →
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-4">
            All modalities
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            {modalities.length} ways to heal
          </h1>
        </div>

        {families.map((family) => {
          const group = modalities.filter((m) => m.theoreticalFamily === family)
          return (
            <section key={family} className="mb-16">
              <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-6 pb-3 border-b border-zinc-800">
                {familyLabels[family]}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {group.map((m) => (
                  <Link key={m.slug} href={`/modalities/${m.slug}`} className="group">
                    <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs font-mono text-zinc-500">{m.name}</span>
                          <h3 className="text-white font-bold leading-tight mt-1">{m.fullName}</h3>
                        </div>
                        <span className="text-zinc-700 group-hover:text-amber-400 transition-colors text-xs font-mono">
                          →
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed italic">
                        &ldquo;{m.tagline}&rdquo;
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
