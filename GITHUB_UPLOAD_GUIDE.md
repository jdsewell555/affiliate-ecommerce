# 🚀 UPLOAD TO GITHUB - STEP BY STEP GUIDE

## STEP 1: Install Git (One-time setup)

### Option A: Download Git Installer (Easiest)
1. Go to: **https://git-scm.com/download/windows**
2. Click the download button
3. Run the installer (just click Next → Next → Finish)
4. Close and reopen your terminal/PowerShell

### Option B: Use Chocolatey (If you have it)
```powershell
choco install git
```

---

## STEP 2: Create a GitHub Account (If you don't have one)
1. Go to: **https://github.com/signup**
2. Enter your email and create password
3. Verify your email
4. Done! You now have a GitHub account

---

## STEP 3: Create a New Repository on GitHub
1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name:** `affiliate-ecommerce`
   - **Description:** Relatable Resolutions website
   - **Public** or **Private** (your choice)
3. DO NOT check any boxes (no README, no gitignore)
4. Click **Create repository**
5. Copy the URL that appears (looks like: `https://github.com/YOUR_USERNAME/affiliate-ecommerce.git`)

---

## STEP 4: Initialize Git & Upload Your Code

Open PowerShell in your project folder and run these commands:

```powershell
# Set up Git with your GitHub info
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

# Initialize your local repository
git init

# Add all your files
git add .

# Create first commit
git commit -m "Initial commit - Relatable Resolutions website"

# Add the remote repository (PASTE YOUR GITHUB URL HERE)
git remote add origin https://github.com/YOUR_USERNAME/affiliate-ecommerce.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### ⚠️ IMPORTANT: Replace these with YOUR info:
- `Your Name` → Your actual name
- `your.email@gmail.com` → Your email
- `YOUR_USERNAME` → Your GitHub username
- Keep the repository name as `affiliate-ecommerce`

---

## STEP 5: Verify It's on GitHub

1. Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/affiliate-ecommerce`
2. You should see all your files there!

---

## ✅ You're Done!

Now your code is on GitHub. Next steps:
1. Go to **vercel.com**
2. Sign in with GitHub
3. Click "Import Project"
4. Select `affiliate-ecommerce`
5. Deploy!

---

## 📝 Commands to Remember for Future Updates

Once everything is set up, when you make changes:

```powershell
# See what changed
git status

# Add your changes
git add .

# Save your changes with a message
git commit -m "Updated affiliate links"

# Send to GitHub (auto-deploys to Vercel!)
git push
```

---

**Need help? Let me know when you've installed Git and created your GitHub account!**
