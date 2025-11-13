export default function ToolsPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        ✨ AI Astrology Tools
      </h1>
      <p className="text-gray-400 mb-8">Explore our suite of AI-powered astrology tools</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-purple-500/30 rounded-lg p-6 hover:bg-purple-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">🔮 Birth Chart</h3>
          <p className="text-gray-400">Generate detailed birth charts with AI insights</p>
        </div>
        
        <div className="border border-cyan-500/30 rounded-lg p-6 hover:bg-cyan-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">🌙 Daily Horoscope</h3>
          <p className="text-gray-400">Personalized daily readings powered by AI</p>
        </div>
        
        <div className="border border-pink-500/30 rounded-lg p-6 hover:bg-pink-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">💖 Compatibility</h3>
          <p className="text-gray-400">Check relationship compatibility scores</p>
        </div>
        
        <div className="border border-blue-500/30 rounded-lg p-6 hover:bg-blue-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">🎯 Karma Analysis</h3>
          <p className="text-gray-400">Deep dive into your karmic patterns</p>
        </div>
        
        <div className="border border-green-500/30 rounded-lg p-6 hover:bg-green-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">⭐ Transit Tracker</h3>
          <p className="text-gray-400">Track planetary transits and their effects</p>
        </div>
        
        <div className="border border-yellow-500/30 rounded-lg p-6 hover:bg-yellow-500/5 transition">
          <h3 className="text-2xl font-bold mb-2">🧘 Meditation Guide</h3>
          <p className="text-gray-400">Astrology-based meditation recommendations</p>
        </div>
      </div>
    </main>
  )
}
