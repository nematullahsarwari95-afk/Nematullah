# [FULL NAME] - Portfolio Website

A modern, premium, professional, responsive, multilingual personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## Features

- **Multilingual**: Pashto, Dari, and English support with RTL/LTR layout
- **Theme System**: Dark and Light mode with localStorage persistence
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Animations**: Smooth scroll reveal, typing effect, hover effects
- **Project Showcase**: 12+ projects with filtering and detail pages
- **Contact Form**: JavaScript validation with success/error messages
- **Resume Page**: Online resume with print and PDF download support
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML
- **Accessibility**: Keyboard navigation, focus states, alt text
- **GitHub Pages Ready**: No backend required

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Project Structure

```
portfolio/
├── index.html
├── about.html
├── projects.html
├── project-details.html
├── resume.html
├── contact.html
├── 404.html
├── style.css
├── script.js
├── README.md
├── favicon.ico
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── logo.png
│   │   ├── project-1.jpg
│   │   └── ...
│   ├── icons/
│   │   └── favicon.svg
│   └── cv/
│       └── my-cv.pdf
└── translations/
    ├── pashto.js
    ├── dari.js
    └── english.js
```

## Customization

### Personal Information

Edit the `CONFIG` object in `script.js` to update:

- Name, title, bio
- Email, phone, location
- University, faculty
- Social media links
- CV file path
- Google Maps link
- Profile image path

### Projects

Edit the `PROJECTS` array in `script.js` to add, remove, or modify projects:

```javascript
{
  id: 1,
  name: "Project Name",
  image: "assets/images/projects/project-1.jpg",
  category: "web-apps",
  description: "Short description",
  fullDescription: "Full description",
  problem: "Problem statement",
  solution: "Solution",
  features: ["Feature 1", "Feature 2"],
  technologies: ["HTML5", "CSS3", "JavaScript"],
  github: "#",
  liveDemo: "#",
  screenshots: ["img1.jpg", "img2.jpg"]
}
```

### Translations

Edit translation files in `translations/` to customize text for each language.

### Colors and Theme

Edit CSS variables in `style.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #06b6d4;
  --bg: #0f172a;
  --bg-secondary: #1e293b;
  --text: #f8fafc;
  --text-secondary: #94a3b8;
}
```

## Local Testing

Opening `index.html` directly via `file://` may show browser console warnings about "unsafe attempt to load URL" or same-origin policy. These are Chrome/Firefox security restrictions for local files, not code errors.

### Recommended: use the included local server

```bash
node server.js
# Then open http://localhost:8000
```

### Alternatives

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to **Settings > Pages**
4. Select branch: `main` (or `master`)
5. Select folder: `/ (root)`
6. Save and wait a few minutes
7. Your site will be live at `https://yourusername.github.io/repo-name/`

### Netlify / Vercel

1. Drag and drop the `portfolio` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

**[FULL NAME]**
- GitHub: [GITHUB LINK]
- LinkedIn: [LINKEDIN LINK]
- Email: [EMAIL]

---

© 2026 [FULL NAME]. All Rights Reserved.
