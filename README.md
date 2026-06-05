# Modern Software Engineering Portfolio

A sleek, modern, and highly responsive single-page portfolio website built for **Ayush Kumar Jha**, Software Engineer. Featuring a dark-theme design with neon electric blue and emerald green accents, fluid animations, and custom visual assets.

## 🚀 Live Demo

Check out the live website deployed on Render:
**👉 [https://portfolio-wpvl.onrender.com](https://portfolio-wpvl.onrender.com)**

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

- **Framework**: React.js 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Scripting**: JavaScript (ES6+, Canvas API, IntersectionObserver API)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Outfit & Fira Code)

---

## 📂 Project Structure

```text
Portfolio/
├── index.html          # HTML entry point with SEO metadata
├── vite.config.js      # Vite and Tailwind compiler configuration
├── package.json        # NPM scripts and dependencies configuration
├── .gitignore          # Git exclusion rules
├── README.md           # Repository documentation
├── public/             # Static public assets
└── src/                # React application source code
    ├── App.jsx         # App assembly component
    ├── index.css       # Tailwind imports, fonts, and base styling
    ├── main.jsx        # React DOM entry point
    ├── assets/         # Image mockups and profile photos
    └── components/     # Modular website components
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── CanvasBackground.jsx
        ├── About.jsx
        ├── Achievements.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 💻 Running Locally

To run this project on your local machine, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayushjha-07/Portfolio.git
   cd Portfolio
   ```

2. **Install local dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev -- --port 3000
   ```

4. **Open in browser**:
   Navigate to **[http://localhost:3000](http://localhost:3000)**.

---

## 👤 Author

**Ayush Kumar Jha**
- **Email**: [jhaayushkumar18@gmail.com](mailto:jhaayushkumar18@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/ayushjha07/](https://www.linkedin.com/in/ayushjha07/)
- **GitHub**: [https://github.com/ayushjha-07](https://github.com/ayushjha-07)
