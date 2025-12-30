# 📍 EDITABLE SECTIONS REFERENCE GUIDE

This document shows you EXACTLY where to find everything you need to edit.

---

## 🏠 HOME PAGE (`src/app/page.tsx`)

### ✏️ SECTION 1A: Main Headline
**Location:** Around line 26-28
**What to change:** Your main heading text
```tsx
Turn Your Resolutions Into <span className="text-indigo-600">Real Results</span>
```
Change to your headline, like:
```tsx
Achieve Your Goals With <span className="text-indigo-600">Relatable Solutions</span>
```

### ✏️ SECTION 1B: Subtitle/Description
**Location:** Around line 30-32
**What to change:** The description text below your headline
```tsx
Discover practical tools, proven strategies, and actionable resources to help you achieve your goals and build lasting habits.
```

### ✏️ SECTION 2A, 2B, 2C: Feature Cards (3 cards with emoji + title + description)
**Location:** Around line 52-67
**What to change:**
- Emoji (📚 🏃 💡) → Change to different emoji
- Title → "Curated Resources", "Practical Strategies", "Expert Insights"
- Description → The paragraph text below each title

---

## 👤 ABOUT PAGE (`src/app/about/page.tsx`)

### ✏️ SECTION 1: Your Image from Canva
**Location:** Around line 35-45
**What to change:** The image URL
```tsx
src="https://via.placeholder.com/400x300?text=Your+Canva+Design"
```
Replace with your Canva image URL:
```tsx
src="https://your-canva-image-url-here.jpg"
```

### ✏️ SECTION 2: Your Story (3 paragraphs)
**Location:** Around line 47-59
**What to change:** All three paragraphs to tell YOUR story
```tsx
<p className="text-gray-600 text-lg mb-4">
  Founded with a passion for helping people...
</p>
```

### ✏️ SECTION 3: Mission, Values, Vision (3 boxes)
**Location:** Around line 62-75
**What to change:** The text in each box
- Box 1: "Our Mission" → Change the description
- Box 2: "Our Values" → Change the description
- Box 3: "Our Vision" → Change the description

---

## 💰 PARTNERS PAGE (`src/app/partners/page.tsx`)

### ✏️ SECTION 1: Affiliate Links
**Location:** Around line 30-55
**What to change:** The `url` field for each retailer

**FOR EACH RETAILER:**
```tsx
url: "https://amazon.com", // ✏️ EDIT: Replace with YOUR Amazon affiliate link
```

Change to your actual affiliate link:
```tsx
url: "https://amazon.com?tag=yourcode-20", // Your real affiliate link
```

**Retailers included:**
1. Amazon
2. Walmart
3. Best Buy
4. Target
5. eBay
6. Costco

### ✏️ SECTION 2: Add More Retailers
**Location:** Around line 56 (end of affiliateLinks array)
**What to do:** Copy this template and add new retailers:
```tsx
{
  name: "Store Name",
  description: "What they sell",
  icon: "🛍️",
  url: "https://your-affiliate-link.com",
  color: "from-color-50 to-color2-50",
  borderColor: "border-color-200"
}
```

---

## 📄 LAYOUT FILE (`src/app/layout.tsx`)

### ✏️ Site Title and Description
**Location:** Around line 15-18
```tsx
export const metadata: Metadata = {
  title: "Relatable Resolutions - Practical Solutions for Everyday Life",
  description: "Discover actionable tips, tools, and resources for achieving your goals and building better habits.",
};
```

Change `title` to your site name
Change `description` to describe your site

---

## 🚀 QUICK CHECKLIST

- [ ] HOME: Update headline (SECTION 1A)
- [ ] HOME: Update subtitle (SECTION 1B)
- [ ] HOME: Update 3 feature cards (SECTION 2A, 2B, 2C)
- [ ] ABOUT: Add your Canva image (SECTION 1)
- [ ] ABOUT: Write your story (SECTION 2)
- [ ] ABOUT: Update Mission/Values/Vision (SECTION 3)
- [ ] PARTNERS: Add your affiliate links (SECTION 1)
- [ ] PARTNERS: Add more retailers if needed (SECTION 2)
- [ ] LAYOUT: Update site title and description

---

## 💡 TIPS

**How to find line numbers in VS Code:**
- Press `Ctrl+G` to go to a specific line
- Type the line number and press Enter

**How to search for text:**
- Press `Ctrl+F` to search
- Type the text you're looking for
- Click through matches

**Make changes without breaking anything:**
- Only edit the text inside quotes or between tags
- Don't delete the HTML tags or structure
- If something breaks, press `Ctrl+Z` to undo

---

**You're ready to customize! Start with the HOME page and work your way down.** ✨
