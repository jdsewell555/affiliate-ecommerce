export default function Home() {
  // ╔═══════════════════════════════════════════════════════════════════════════════╗
  // ║                     HOME PAGE (src/app/page.tsx)                             ║
  // ║                     RELATABLE RESOLUTIONS WEBSITE                            ║
  // ╚═══════════════════════════════════════════════════════════════════════════════╝
  // 
  // THIS FILE CONTROLS: Your homepage that visitors see first
  // 
  // EDITABLE SECTIONS IN THIS FILE:
  // ✏️  Section 1: HEADLINE TEXT (around line 25-28)
  // ✏️  Section 2: SUBTITLE TEXT (around line 29-32)
  // ✏️  Section 3: FEATURE CARDS (around line 42-57)
  // 
  // TO RUN YOUR WEBSITE:
  //   1. Open Terminal in this folder
  //   2. Type: npm run dev
  //   3. Go to: http://localhost:3000
  // ═════════════════════════════════════════════════════════════════════════════════
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation Bar - Links to all pages */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="font-bold text-2xl text-indigo-600">Relatable Resolutions</a>
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition font-semibold text-indigo-600">Home</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="/partners" className="text-gray-700 hover:text-indigo-600 transition">Partners</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ✏️ SECTION 1: HOMEPAGE HEADLINE & DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* ✏️ SECTION 1A: CHANGE YOUR MAIN HEADLINE HERE */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Resolutions Into <span className="text-indigo-600">Real Results</span>
          </h1>
          {/* ← EDIT: Change "Turn Your Resolutions Into Real Results" to your headline */}
          
          {/* ✏️ SECTION 1B: CHANGE YOUR SUBTITLE HERE */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover practical tools, proven strategies, and actionable resources to help you achieve your goals and build lasting habits.
          </p>
          {/* ← EDIT: Change this description text to match your brand */}
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/partners" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition text-center">
              Shop with Us
            </a>
            <a href="/about" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ✏️ SECTION 2: FEATURE CARDS - What You Offer */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          
          {/* ✏️ SECTION 2A: EDIT FEATURE CARD 1 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-4xl mb-4">📚</div>
              {/* ← EDIT: Change emoji to something else like 🎯 💡 🚀 etc */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Curated Resources</h3>
              {/* ← EDIT: Change title */}
              <p className="text-gray-600">Hand-picked tools and resources to support your journey toward meaningful change.</p>
              {/* ← EDIT: Change description */}
            </div>
            
            {/* ✏️ SECTION 2B: EDIT FEATURE CARD 2 */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-4xl mb-4">🏃</div>
              {/* ← EDIT: Change emoji */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Strategies</h3>
              {/* ← EDIT: Change title */}
              <p className="text-gray-600">Evidence-based approaches and proven methods to help you stay on track.</p>
              {/* ← EDIT: Change description */}
            </div>
            
            {/* ✏️ SECTION 2C: EDIT FEATURE CARD 3 */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-4xl mb-4">💡</div>
              {/* ← EDIT: Change emoji */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Insights</h3>
              {/* ← EDIT: Change title */}
              <p className="text-gray-600">Learn from industry experts and success stories that inspire real change.</p>
              {/* ← EDIT: Change description */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Relatable Resolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
