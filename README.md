# AnikethPortfolio

Personal website: https://anikethchu.vercel.app

Plain JavaScript, HTML, and CSS. No packages or build step required.

## Editing
- `index.html`: name, introduction, photo gallery, work experience, interests.
- `app.js`: project descriptions, GitHub links, theme toggle, and section deep links.
- `style.css`: layout, responsive styles, and light/dark colors.
- `theme.js`: loads saved theme before the page is displayed.
- Image files: original supplied photos. Avatar cropping is handled by CSS.

Open index.html in your browser, or run `python3 -m http.server 8000` and visit http://localhost:8000.

## Deployment
The existing Vercel project is `aniketh-portfolio`. To deploy changes with the Vercel CLI, log in, run `vercel link`, select the existing project, then run `vercel --prod`. Uploading to GitHub alone only deploys automatically if the repository is connected in Vercel project settings.
