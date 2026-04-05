#  Vitalij Lazarev — Portfolio

##  Live Demo

https://cv-portfolio-xi-gold.vercel.app/

##  Features

- **Spotlight Effect** — Interactive cursor-following glow on the hero section
- **Dark Theme** — Sleek dark UI with `#e74c3c` red accents
- **Responsive Design** — Fully adaptive for desktop, tablet, and mobile
- **Project Cards** — Image previews with hover overlay showing description, tech stack, and links
- **CV Download** — Dropdown picker with English and Lithuanian versions
- **Contact Section** — LinkedIn, GitHub, and Email integrated into the About section
- **Smooth Navigation** — Fixed navbar with scroll-based styling and mobile hamburger menu

##  Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components & state management |
| Vite | Fast build tool & dev server |
| SCSS | Modular styling with variables & mixins |
| React Icons | SVG icon library |

##  Project Structure

```
CV-Portfolio/
├── public/
│   └── cv/
│       ├── vitalij-lazarev-ENG.pdf
│       └── vitalij-lazarev-LT.pdf
├── src/
│   ├── assets/images/
│   │   ├── logos/          # Skill icons (SVG)
│   │   └── photo/          # Avatar & project screenshots
│   ├── components/
│   │   ├── About/          # Bio, contacts, CV dropdown
│   │   ├── Footer/         # Copyright & social links
│   │   ├── Hero/           # Spotlight effect, name, CTA
│   │   ├── Navbar/         # Fixed navigation, mobile menu
│   │   ├── Projects/       # Project cards with hover overlay
│   │   └── Skills/         # Tech stack grid with react-icons
│   ├── styles/
│   │   ├── _globals.scss   # Global styles & utility classes
│   │   ├── _media.scss     # Responsive breakpoint mixins
│   │   ├── _reset.scss     # CSS reset
│   │   └── _variables.scss # Theme colors, fonts, sizes
│   ├── App.jsx
│   ├── App.scss
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

Built by [Vitalij Lazarev](https://github.com/p3lm3shka1)
