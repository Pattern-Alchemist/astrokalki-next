export default function PlansPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        💎 Subscription Plans
      </h1>
      <p className="text-gray-400 mb-8">Choose the plan that fits your cosmic journey</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Free</h3>
          <p className="text-3xl font-bold mb-4">$0<span className="text-sm">/month</span></p>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Basic astrology tools</li>
            <li>✓ Daily horoscope</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-lg p-6 bg-purple-500/10">
          <h3 className="text-2xl font-bold mb-4">Pro</h3>
          <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm">/month</span></p>
          <ul className="text-gray-300 space-y-2">
            <li>✓ All Free features</li>
            <li>✓ Advanced AI readings</li>
            <li>✓ Live radio access</li>
          </ul>
        </div>
        
        <div className="border border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="text-3xl font-bold mb-4">Custom</p>
          <ul className="text-gray-400 space-y-2">
            <li>✓ All Pro features</li>
            <li>✓ API access</li>
            <li>✓ Priority support</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
