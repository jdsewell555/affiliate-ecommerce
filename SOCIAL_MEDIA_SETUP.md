# 📱 SOCIAL MEDIA SETUP GUIDE

## Where to Add Your Social Media Links

In your `src/app/page.tsx` file, find the Social Media section (around line 75-110).

## How to Update Each Platform

Replace the placeholder URLs with your actual social media accounts:

### Instagram
Find this line:
```tsx
href="https://instagram.com"
```
Replace with your Instagram profile:
```tsx
href="https://instagram.com/yourprofilename"
```
**Example:** `https://instagram.com/relatable_resonations`

### Facebook
Find this line:
```tsx
href="https://facebook.com"
```
Replace with your Facebook page:
```tsx
href="https://facebook.com/yourpagename"
```
**Example:** `https://facebook.com/relatableresonations`

### TikTok
Find this line:
```tsx
href="https://tiktok.com"
```
Replace with your TikTok profile:
```tsx
href="https://www.tiktok.com/@yourusername"
```
**Example:** `https://www.tiktok.com/@relatableresonations`

### YouTube
Find this line:
```tsx
href="https://youtube.com"
```
Replace with your YouTube channel:
```tsx
href="https://youtube.com/@yourchannel"
```
**Example:** `https://youtube.com/@relatableresonations`

### Twitter/X
Find this line:
```tsx
href="https://twitter.com"
```
Replace with your Twitter handle:
```tsx
href="https://twitter.com/yourhandle"
```
**Example:** `https://twitter.com/RelatableReson`

---

## 💡 Pro Tips

1. **You can remove platforms you don't use** - Just delete the entire `<a>` block for that platform
2. **You can add more platforms** - Copy one of the existing social buttons and change the emoji, URL, and title
3. **Keep the emojis** - They make the buttons look nice and are clickable
4. **Test your links** - After adding them, click each one to make sure they work

---

## ✏️ QUICK CHECKLIST

- [ ] Add Instagram URL
- [ ] Add Facebook URL
- [ ] Add TikTok URL (optional)
- [ ] Add YouTube URL (optional)
- [ ] Add Twitter URL (optional)
- [ ] Test all links work
- [ ] Push changes to GitHub (they auto-deploy to Vercel!)

---

**After you update the links, run:**
```bash
git add .
git commit -m "Add social media links"
git push
```

Your changes will be live on your site within seconds! ✨
