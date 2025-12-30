export default function Partners() {
  // ╔═══════════════════════════════════════════════════════════════════════════════╗
  // ║                PARTNERS PAGE (src/app/partners/page.tsx)                      ║
  // ║             Where you make money with affiliate links! 💰                     ║
  // ╚═══════════════════════════════════════════════════════════════════════════════╝
  // 
  // THIS FILE CONTROLS: The page with all your affiliate shopping links
  //                     This is where visitors shop and you earn money!
  // 
  // EDITABLE SECTIONS IN THIS FILE:
  // ✏️  Section 1: AFFILIATE LINKS (around line 30-55)
  //                Update the "url" field for each retailer with YOUR affiliate link
  // ✏️  Section 2: ADD MORE RETAILERS (around line 56)
  //                Add new shopping partners here
  // ═════════════════════════════════════════════════════════════════════════════════
  
  // ✏️ SECTION 1: YOUR AFFILIATE LINKS - THIS IS HOW YOU MAKE MONEY!
  // ═════════════════════════════════════════════════════════════════════════════════
  // HOW THIS WORKS:
  // 1. Sign up for each retailer's affiliate program (free!)
  // 2. Get your unique affiliate link from them
  // 3. Paste it in the "url" field below
  // 4. When someone clicks your link and shops = YOU EARN MONEY! 💰
  //
  // EXAMPLE:
  // BEFORE: url: "https://amazon.com"
  // AFTER:  url: "https://amazon.com?tag=yourcode-20"
  //
  // Affiliate programs to sign up for:
  // - Amazon Associates (associates.amazon.com)
  // - Walmart Affiliate (walmart.com/affiliate)
  // - Best Buy Affiliate (bestbuy.com/affiliate)
  // - Target Affiliate (target.com/affiliate)
  // - eBay Affiliate (ebayaffiliatenetwork.com)
  // - Costco Affiliate (costco.com/affiliate)
  // ═════════════════════════════════════════════════════════════════════════════════
  
  const affiliateLinks = [
    {
      name: "Amazon",
      description: "Shop millions of products and support us through our affiliate link",
      icon: "🛒",
      url: "https://amazon.com", // ✏️ EDIT: Replace with YOUR Amazon affiliate link
      color: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200"
    },
    {
      name: "Walmart",
      description: "Find great deals on everyday essentials",
      icon: "🏪",
      url: "https://walmart.com", // ✏️ EDIT: Replace with YOUR Walmart affiliate link
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Best Buy",
      description: "Get the latest electronics and tech products",
      icon: "📱",
      url: "https://bestbuy.com", // ✏️ EDIT: Replace with YOUR Best Buy affiliate link
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      name: "Target",
      description: "Shop everyday items and trending products",
      icon: "🎯",
      url: "https://target.com", // ✏️ EDIT: Replace with YOUR Target affiliate link
      color: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      name: "eBay",
      description: "Discover unique and discounted items",
      icon: "🏷️",
      url: "https://ebay.com", // ✏️ EDIT: Replace with YOUR eBay affiliate link
      color: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      name: "Costco",
      description: "Bulk shopping at member prices",
      icon: "📦",
      url: "https://costco.com", // ✏️ EDIT: Replace with YOUR Costco affiliate link
      color: "from-gray-50 to-blue-50",
      borderColor: "border-gray-200"
    }
    // ✏️ SECTION 2: TO ADD MORE RETAILERS, COPY ONE OF THE ABOVE AND ADD HERE
    // Example:
    // {
    //   name: "Your Store Name",
    //   description: "What they sell",
    //   icon: "🛍️",
    //   url: "https://your-affiliate-link.com",
    //   color: "from-green-50 to-teal-50",
    //   borderColor: "border-green-200"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="font-bold text-2xl text-indigo-600">Relatable Resonations</a>
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="/partners" className="text-gray-700 hover:text-indigo-600 transition font-semibold text-indigo-600">Partners</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Affiliate Partners</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Shop through our trusted partner links and support our mission. We earn a small commission when you shop, at no extra cost to you.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliateLinks.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 bg-gradient-to-br ${partner.color} border-2 ${partner.borderColor} rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{partner.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-6">{partner.description}</p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                Visit Store
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h3>
            <p className="text-gray-700">
              As an affiliate partner with the retailers listed above, we earn a small commission from qualifying purchases made through our links. This comes at no additional cost to you and helps support our mission to provide quality content and resources. We only recommend products and services we genuinely believe in.
            </p>
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
