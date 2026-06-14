import Link from 'next/link'
import { modalities } from '@/data/modalities'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          ParadigmFindr
        </span>
        <Link
          href="/modalities"
          className="text-xs font-mono tracking-widest text-zinc-500 uppercase hover:text-white transition-colors"
        >
          All modalities
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 max-w-5xl">
        <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-8">
          Find your therapy
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8">
          There are{' '}
          <span className="text-amber-400">{modalities.length}</span>{' '}
          ways to heal.
          <br />
          Which one fits you?
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
          Not all therapy is the same. CBT, IFS, Somatic, Logotherapy — each works through a
          completely different theory of what causes suffering and what resolves it. Seven questions.
          Your top matches. No DSM required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/quiz"
            className="inline-block bg-amber-400 text-zinc-950 font-black text-sm tracking-widest uppercase px-10 py-5 hover:bg-amber-300 transition-colors"
          >
            Start the quiz →
          </Link>
          <Link
            href="/modalities"
            className="inline-block border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase px-10 py-5 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Browse all modalities
          </Link>
        </div>
      </section>

      {/* Modality strip */}
      <section className="border-t border-zinc-800 py-5 px-6 overflow-hidden">
        <div className="flex gap-8 flex-wrap">
          {modalities.map((m) => (
            <Link
              key={m.slug}
              href={`/modalities/${m.slug}`}
              className="text-xs font-mono tracking-widest text-zinc-600 uppercase hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
