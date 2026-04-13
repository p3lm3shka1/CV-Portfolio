# Vitalijus Lazarevas — Portfolio

## Live Demo

https://cv-portfolio-xi-gold.vercel.app/

## Features

- **Spotlight Effect** — Interactive cursor-following glow on the hero section
- **Multi-Language Support** — EN/LT toggle with auto-translation via DeepL API (for now uses offline translation)
- **Responsive Design** — Fully adaptive for desktop, tablet, and mobile
- **Project Cards** — Image previews with hover overlay showing description, tech stack, and links
- **CV Download** — Dropdown picker with English and Lithuanian versions
- **Contact Section** — LinkedIn, GitHub, and Email integrated into the About section
- **Smooth Navigation** — Fixed navbar with scroll-based styling and mobile hamburger menu

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components & state management |
| Vite | Fast build tool & dev server |
| SCSS | Modular styling with variables & mixins |
| React Icons | SVG icon library |
| DeepL API | Auto-translation for multi-language support |  (in progress..)
| dotenv | Secure API key management |

## Project Structure

```
CV-Portfolio/
├── public/
│   └── cv/
│       ├── vitalij-lazarev-ENG.pdf
│       └── vitalij-lazarev-LT.pdf
├── scripts/
│   └── translate.js            # DeepL auto-translation script (in progress)
├── src/
│   ├── assets/images/
│   │   ├── logos/              
│   │   └── photo/             
│   ├── components/
│   │   ├── About/              
│   │   ├── Footer/            
│   │   ├── Hero/               
│   │   ├── Navbar/             
│   │   ├── Projects/           
│   │   └── Skills/            
│   ├── contexts/
│   │   └── LanguageContext.jsx  # offline language change
│   ├── data/
│   │   └── translations.json   # EN/LT translations (in progress)
│   ├── styles/
│   │   ├── _globals.scss       
│   │   ├── _media.scss         
│   │   ├── _reset.scss         
│   │   └── _variables.scss     
│   ├── App.jsx
│   ├── App.scss
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

Built by [Vitalijus Lazarevas](https://github.com/p3lm3shka1)
