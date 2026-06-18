# The Timelines of Kavya — Portfolio Website

A cinematic, timeline-themed portfolio for Goli Kavya Sree · B.Tech CSE · Hyderabad.

## 🚀 Quick Deploy to GitHub Pages

### Step 1 — Push to GitHub
1. Create a new repository on GitHub (e.g. `kavya-portfolio`)
2. Push this project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kavya-portfolio.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will auto-deploy on every push to `main`

Your site will be live at: `https://YOUR_USERNAME.github.io/kavya-portfolio`

---

## 💻 Local Development

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

The output goes to `dist/` — this is what gets deployed.

---

## 📁 Project Structure

```
kavya-portfolio/
├── .github/workflows/deploy.yml   ← Auto-deploy on push
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Cursor.jsx
│   │   ├── Particles.jsx
│   │   ├── VerticalNav.jsx
│   │   ├── Hero.jsx
│   │   ├── Origin.jsx
│   │   ├── Nexus.jsx
│   │   ├── Realities.jsx
│   │   ├── Events.jsx
│   │   ├── Artifacts.jsx
│   │   └── Future.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📝 Customization

- **GitHub/LinkedIn links** → edit `src/components/Future.jsx`
- **Resume** → add your `resume.pdf` to the `public/` folder
- **Content updates** → each section is its own component file
