import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        AstroKalki Interactive Oracle
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <Link href="/tools" className="p-6 border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition">
          <h2 className="text-2xl font-bold mb-2">✨ Tools</h2>
          <p className="text-gray-400">Explore AI-powered astrology tools</p>
        </Link>
        
        <Link href="/radio" className="p-6 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition">
          <h2 className="text-2xl font-bold mb-2">📻 Radio</h2>
          <p className="text-gray-400">Listen to Astrokalki Live</p>
        </Link>
        
        <Link href="/plans" className="p-6 border border-pink-500/30 rounded-lg hover:bg-pink-500/10 transition">
          <h2 className="text-2xl font-bold mb-2">💎 Plans</h2>
          <p className="text-gray-400">Choose your subscription</p>
        </Link>
      </div>
    </main>
  )
}
