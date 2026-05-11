# Raymond Sambur — Portfolio

A modern, responsive personal portfolio website built with Next.js 16, Tailwind CSS 4, TypeScript, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVG brand icons
- **Deployment:** Vercel-ready (zero config)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Theme variables & global styles
│   ├── layout.tsx        # Root layout with metadata/SEO
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── Navbar.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with CTA buttons
│   ├── About.tsx         # Philosophy cards section
│   ├── Projects.tsx      # Project portfolio grid
│   ├── Experience.tsx    # Timeline + skills sidebar
│   ├── Contact.tsx       # Contact cards
│   └── Footer.tsx        # Minimalist footer
public/
└── projects/             # Place project screenshots here
```

## Customization Guide

### Adding Project Screenshots
1. Place images in `public/projects/` (e.g., `project-1.png`)
2. In `src/components/Projects.tsx`, update the `image` field:
   ```ts
   image: "/projects/project-1.png",
   ```

### Adding a Profile Photo
1. Place your photo in `public/` (e.g., `profile.jpg`)
2. Use `next/image` in the Hero or About section

### Updating Content
- **Projects:** Edit the `projects` array in `src/components/Projects.tsx`
- **Experience:** Edit the `experiences` array in `src/components/Experience.tsx`
- **Skills:** Edit the `skillCategories` array in `src/components/Experience.tsx`
- **Contact:** Edit the `contactInfo` object in `src/components/Contact.tsx`

### Changing Theme Colors
Edit the `@theme` block in `src/app/globals.css` to adjust the color palette.

## Deployment

### Vercel (Recommended)
Push to GitHub and import the repo on [vercel.com](https://vercel.com). Zero configuration needed.

### Other Platforms
```bash
npm run build
# Deploy the .next/ directory or use `npm start` for Node.js hosting
```

## License

MIT
