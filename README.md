# Modern Software Engineering Portfolio

A sleek, modern, and highly responsive single-page portfolio website built for **Ayush Kumar Jha**, Software Engineer. Featuring a dark-theme design with neon electric blue and emerald green accents, fluid animations, and custom visual assets.

## 🚀 Live Demo

Check out the live website deployed on Render:
**👉 [https://ayush-kumar-jha.onrender.com](https://ayush-kumar-jha.onrender.com)**

---

## ✨ Key Features

- **Interactive Canvas Backdrop**: A lightweight physics-based connecting particle network animating dynamically in the Hero section.
- **Custom Follow Cursor**: A responsive desktop cursor tracker that scales and morphs when hovering over interactive elements.
- **Scroll Reveal Animations**: Smooth fade-in, scale, and translation transitions triggered as sections enter the viewport using `IntersectionObserver`.
- **Numerical Stats Counter**: Interactive achievement cards that count up from zero once they are visible in the user's viewport.
- **Dynamic Project Tag Filtering**: Instant tag-based filtering of portfolio projects with smooth CSS transitions.
- **Client-Side Form Validation**: An interactive contact form that validates inputs, displays custom error messages, simulates network loading delays, and logs form submissions to `localStorage` (mock database).
- **Mobile-First Layout**: Fully fluid and responsive grid/flexbox system optimized for everything from small mobile screens to large desktops.

---

## 🛠️ Tech Stack

- **Structure**: HTML5 (Semantic elements)
- **Styling**: Vanilla CSS3 (Custom properties, keyframes, transitions, glassmorphism)
- **Scripting**: JavaScript (ES6+, Canvas API, IntersectionObserver API)
- **Icons**: FontAwesome 6 CDN
- **Fonts**: Google Fonts (Outfit & Fira Code)

---

## 📂 Project Structure

```text
Portfolio/
├── index.html          # Semantic HTML structure, SEO, and OpenGraph metadata
├── styles.css          # Design system variables, core layouts, animations
├── script.js           # Particle engine, cursor tracks, observers, filters, forms
├── package.json        # Node script configurations and dependencies
├── .gitignore          # Git exclusion rules
├── README.md           # Repository documentation
└── assets/             # Project visual assets
    ├── profile.jpg     # Professional avatar photo
    ├── project-kirana.png   # Kirana store mockup
    ├── project-memory.png   # OS simulator mockup
    └── project-fashion.png  # Guys fashion mockup
```

---

## 💻 Running Locally

To run this project on your local machine, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayushjha-07/Portfolio.git
   cd Portfolio
   ```

2. **Install local dependencies** (installs `http-server`):
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to **[http://localhost:3000](http://localhost:3000)**.

---

## 👤 Author

**Ayush Kumar Jha**
- **Email**: [jhaayushkumar18@gmail.com](mailto:jhaayushkumar18@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/ayushjha07/](https://www.linkedin.com/in/ayushjha07/)
- **GitHub**: [https://github.com/ayushjha-07](https://github.com/ayushjha-07)
