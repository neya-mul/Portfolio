# 🚀 Neyamul Islam - Portfolio

A dark mode portfolio website built with **Next.js** and **Tailwind CSS**.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css     ← All global styles + animations
│   │   ├── layout.js       ← Root layout (fonts, metadata)
│   │   └── page.js         ← Main page (puts all components together)
│   └── components/
│       ├── AnimatedBackground.js  ← Orbs, grid, particles
│       ├── Navbar.js              ← Navigation bar
│       ├── Hero.js                ← Hero section with typewriter
│       ├── About.js               ← About me section
│       ├── Skills.js              ← Skill bars + tools
│       ├── Projects.js            ← GitHub projects grid
│       ├── Contact.js             ← Contact form
│       └── Footer.js              ← Footer
├── public/
│   └── profile.png         ← Your profile photo
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## ⚙️ How to Run

### Step 1 - Install Node.js
Download from: https://nodejs.org (get the LTS version)

### Step 2 - Install dependencies
```bash
cd portfolio
npm install
```

### Step 3 - Start development server
```bash
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

---

## 🎨 How to Customize

### Change your info:
- **Hero.js** → Change your name, description, roles in typewriter
- **About.js** → Update your bio text and stat cards
- **Skills.js** → Update skill levels (0-100) and add/remove skills
- **Projects.js** → Update project titles, descriptions, GitHub links
- **Contact.js** → Update your contact info and email

### Change colors:
- Open `tailwind.config.js`
- The main purple color is `#7c3aed` — change it to any color you like!

### Add your photo:
- Replace `public/profile.png` with your own photo
- Keep the filename the same OR update `Hero.js` line: `src="/profile.png"`

---

## 🚀 Deploy to Vercel (Free!)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project" → Import your GitHub repo
4. Click Deploy!

Your portfolio will be live at a free URL like `neyamul.vercel.app`

---

Built with ❤️ by Neyamul Islam
