export default function About() {
  // ╔═══════════════════════════════════════════════════════════════════════════════╗
  // ║                     ABOUT PAGE (src/app/about/page.tsx)                      ║
  // ║                     Tell visitors about you & your company                    ║
  // ╚═══════════════════════════════════════════════════════════════════════════════╝
  // 
  // THIS FILE CONTROLS: Your about page where you tell your story
  // 
  // EDITABLE SECTIONS IN THIS FILE:
  // ✏️  Section 1: YOUR CANVA IMAGE (around line 35-45)
  // ✏️  Section 2: YOUR STORY TEXT (around line 46-60)
  // ✏️  Section 3: MISSION/VALUES (around line 62-75)
  // ═════════════════════════════════════════════════════════════════════════════════
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="font-bold text-2xl text-indigo-600">Relatable Resonations</a>
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 transition font-semibold text-indigo-600">About</a>
              <a href="/partners" className="text-gray-700 hover:text-indigo-600 transition">Partners</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Relatable Resonations</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Learn about our mission to help people achieve their goals and build better habits through practical resources and trusted recommendations.
        </p>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* ✏️ SECTION 1: ADD YOUR CANVA IMAGE HERE */}
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl h-80 flex items-center justify-center overflow-hidden">
              {/* EDIT: Replace the src URL with your Canva image URL */}
              {/* To get your Canva image URL: */}
              {/* 1. Open your Canva design */}
              {/* 2. Click the Download or Share button */}
              {/* 3. Copy the image link */}
              {/* 4. Paste it below where it says "YOUR_IMAGE_URL" */}
              <img 
                src="https://via.placeholder.com/400x300?text=Your+Canva+Design" 
                alt="About us" 
                className="w-full h-full object-cover"
              />
              {/* Example: src="https://images.canva.com/your-image-link-here.jpg" */}
            </div>
            
            {/* ✏️ SECTION 2: YOUR STORY & COMPANY DESCRIPTION */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              
              {/* EDIT: Change this paragraph to tell YOUR story */}
              <p className="text-gray-600 text-lg mb-4">
                Founded with a passion for helping people turn their resolutions into reality, Relatable Resolutions combines practical strategies with curated resources.
              </p>
              
              {/* EDIT: Change this paragraph */}
              <p className="text-gray-600 text-lg mb-4">
                We believe that achieving your goals doesn't have to be complicated. It's about finding the right tools, strategies, and support systems.
              </p>
              
              {/* EDIT: Change this paragraph */}
              <p className="text-gray-600 text-lg">
                Through our carefully selected affiliate partnerships, we recommend products and services we genuinely believe in to help you succeed.
              </p>
            </div>
          </div>

          {/* ✏️ SECTION 3: YOUR MISSION, VALUES, AND VISION */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              {/* EDIT: Change this mission statement */}
              <p className="text-gray-600">Empower individuals to achieve meaningful change through practical guidance and trusted recommendations.</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              {/* EDIT: Change your core values */}
              <p className="text-gray-600">Honesty, authenticity, and genuine care in every recommendation we share with our community.</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              {/* EDIT: Change your vision */}
              <p className="text-gray-600">A world where everyone has access to the tools and knowledge they need to succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Relatable Resonations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
