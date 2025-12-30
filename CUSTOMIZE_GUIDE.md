# How to Customize Your Site

## 🎨 Adding Your Canva Designs

### On the Home Page
Edit `src/app/page.tsx` and replace the feature section with your Canva images.

### On the About Page
Edit `src/app/about/page.tsx` - Look for the section with text "Your Canva Design Here" and replace it with:

```tsx
<div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl h-80 overflow-hidden">
  <img 
    src="YOUR_IMAGE_URL_HERE" 
    alt="About us" 
    className="w-full h-full object-cover"
  />
</div>
```

Just paste your Canva image URL where it says `YOUR_IMAGE_URL_HERE`.

## 💰 Adding Your Affiliate Links

### Update Affiliate Partners
In `src/app/partners/page.tsx`, find the `affiliateLinks` array and update each URL:

```tsx
const affiliateLinks = [
  {
    name: "Amazon",
    description: "Shop millions of products and support us through our affiliate link",
    icon: "🛒",
    url: "https://your-amazon-affiliate-link.com", // ← Replace this
    color: "from-orange-50 to-yellow-50",
    borderColor: "border-orange-200"
  },
  // ... do the same for other partners
];
```

### Add More Partners
Want to add more retailers? Add a new object to the `affiliateLinks` array:

```tsx
{
  name: "Your Store Name",
  description: "Description of what you sell",
  icon: "emoji-here", // Use any emoji
  url: "https://your-affiliate-link.com",
  color: "from-color1-50 to-color2-50", // Tailwind color names
  borderColor: "border-color-200"
}
```

## 🌐 Quick Update Checklist

- [ ] Replace all affiliate URLs with your actual links
- [ ] Update company description in `/about` page
- [ ] Add your Canva images to image URLs
- [ ] Update the "About" section text
- [ ] Customize colors if desired (use Tailwind classes)

## 📱 Available Pages

- `/` - Home page
- `/about` - About your company
- `/partners` - Affiliate links (this is where people shop!)
- `/blog` - (Coming soon - create as needed)

## 🚀 To Run Your Site

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

**Need help?** Just ask to update any of these sections!
