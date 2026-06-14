import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col">
      <nav className="border-b border-zinc-800 px-6 py-4">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-zinc-500 uppercase hover:text-white transition-colors"
        >
          ParadigmFindr
        </Link>
      </nav>
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-2xl py-24">
        <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-6">404</p>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
          Page not found.
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          This page doesn&apos;t exist — but there are 16 therapy modalities that might.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/quiz"
            className="inline-block bg-amber-400 text-zinc-950 font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber-300 transition-colors"
          >
            Take the quiz →
          </Link>
          <Link
            href="/modalities"
            className="inline-block border border-zinc-700 text-zinc-400 font-mono text-xs tracking-widest uppercase px-8 py-4 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Browse modalities
          </Link>
        </div>
      </div>
    </main>
  )
}
