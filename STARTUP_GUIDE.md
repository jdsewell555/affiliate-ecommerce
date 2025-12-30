# 🚀 RELATABLE RESOLUTIONS - STARTUP GUIDE

## Quick Start (5 Steps to Get Your Site Running)

### STEP 0: Run Your Website Right Now
```bash
npm run dev
```
Then open: **http://localhost:3000**

---

## STEP 1: Set Up Your Affiliate Links 💰

**File to edit:** `src/app/partners/page.tsx`

### What to do:
1. Sign up for affiliate programs at:
   - Amazon Associates (associates.amazon.com)
   - Walmart (affiliate.walmart.com)
   - Best Buy (bestbuy.com/affiliate)
   - Target (target.com/affiliate)
   - eBay (ebayaffiliatenetwork.com)
   - Costco (costco.com/affiliate)

2. Get your unique affiliate link from each site

3. In the code, find this part:
```tsx
url: "https://amazon.com", // 👈 STEP 1a: Replace with your Amazon affiliate link
```

4. Replace it with your actual affiliate link:
```tsx
url: "https://amazon.com?tag=YOUR-AFFILIATE-CODE", 
```

**Example:** If Amazon gives you: `https://amazon.com?tag=relatableres-20`
That's what you paste in the `url` field.

---

## STEP 2: Add Your Canva Designs 🎨

**File to edit:** `src/app/about/page.tsx`

### What to do:
1. Open your Canva design
2. Click "Download" or "Share" to get a link
3. Copy the image URL
4. Find this in the code:
```tsx
src="https://via.placeholder.com/400x300?text=Your+Canva+Design"
```

5. Replace it with your image URL:
```tsx
src="https://your-canva-image-url-here.jpg"
```

**How to get a Canva image URL:**
- Right-click your design → "Copy image link"
- OR download it and upload to a free image hosting site

---

## STEP 3: Personalize Your Story 📖

**File to edit:** `src/app/about/page.tsx`

### What to do:
Find this section:
```tsx
<p className="text-gray-600 text-lg mb-4">
  Founded with a passion for helping people...
</p>
```

Replace with YOUR story:
- Who are you?
- Why did you start this?
- What's your mission?
- How do you help people?

---

## STEP 4: Customize Your Homepage ✨

**File to edit:** `src/app/page.tsx`

### What to do:
Find these sections and personalize:

**Headline (around line 20):**
```tsx
Turn Your Resolutions Into <span className="text-indigo-600">Real Results</span>
```

**Description (around line 26):**
```tsx
Discover practical tools, proven strategies, and actionable resources...
```

**Feature Cards (around line 42-57):**
- Change the emojis (📚 🏃 💡)
- Change the titles
- Change the descriptions

---

## STEP 5: Connect Your Domain 🌐

When you're ready to go live:

1. **Get a domain** at:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. **Deploy to Vercel** (free & easy):
   - Go to vercel.com
   - Click "Import Project"
   - Connect your GitHub
   - Your site will be live instantly!

---

## 📋 Complete Checklist

- [ ] Run `npm run dev` and test your site
- [ ] Sign up for all affiliate programs
- [ ] Add your affiliate links to `/partners`
- [ ] Prepare your Canva images
- [ ] Add Canva image to `/about`
- [ ] Update your story on `/about`
- [ ] Customize homepage text
- [ ] Test all links work correctly
- [ ] Deploy to Vercel (optional but recommended)
- [ ] Point your domain to Vercel

---

## 🆘 Common Questions

**Q: Where do I find the code to edit?**
A: Open the file listed at the top of each step in VS Code

**Q: How do I add more retailers?**
A: In `src/app/partners/page.tsx`, find the `affiliateLinks` array and copy one of the objects, then add yours

**Q: Can I change the colors?**
A: Yes! Change Tailwind color classes like `from-blue-50` to other colors

**Q: How do I add a Blog page?**
A: Create a folder `src/app/blog` and create `page.tsx` inside

---

## 📞 File Reference

| File | Purpose | What to Customize |
|------|---------|-------------------|
| `src/app/page.tsx` | Home page | Headline, subtitle, features |
| `src/app/about/page.tsx` | Your story | Image, text, mission statement |
| `src/app/partners/page.tsx` | Affiliate links | Your affiliate URLs |
| `src/app/layout.tsx` | Site settings | Page title, description |

---

**You're all set! Start with STEP 0 and work your way through. Good luck! 🎉**
