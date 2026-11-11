// Change your text and projects here. No framework or build step needed.
const profile = {
  bio: 'Computer engineering student at the University of Maryland. I build software and explore intelligent systems.',
  about: 'I enjoy turning unfamiliar problems into things that work. My interests span backend engineering, embedded systems, and deep learning research at UMD.',
  projects: [
    { name: 'JourneyOS', description: 'A travel planning application combining AI agents with location search.', stack: 'LangGraph · Next.js · PostgreSQL', repo: 'https://github.com/anikethchu/JourneyOS' },
    { name: 'SonicMatch', description: 'Music similarity search using audio embeddings, with instrumental matching and text-to-music exploration.', stack: 'Python · PyTorch · CLAP · SQLite', repo: 'https://github.com/anikethchu/SonicMatch' },
    { name: 'CourseView', description: 'A course information platform with learning materials and AI-powered assistance.', stack: 'Node.js · MongoDB · OpenAI', repo: 'https://github.com/anikethchu/CourseView' }
  ]
};



document.querySelector('#year').textContent = new Date().getFullYear();
const projects = document.querySelector('#projects');
for (const project of profile.projects) {
  const article = document.createElement('article');
  article.className = 'entry';
  const title = document.createElement('h3');
  const link = document.createElement('a');
  link.href = project.repo;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = project.name + ' ↗';
  link.setAttribute('aria-label', project.name + ' on GitHub (opens in a new tab)');
  title.append(link);
  const details = document.createElement('div');
  const description = document.createElement('p');
  description.textContent = project.description;
  const tags = document.createElement('p');
  tags.className = 'tags';
  tags.textContent = project.stack;
  details.append(description, tags);
  article.append(title, details);
  projects.append(article);
}

const toggle = document.querySelector('#theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle.textContent = dark ? 'Light mode ↗' : 'Dark mode ↗';
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
}
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  themeIsManual = true;
  try { localStorage.setItem('theme', next); } catch (_) {}
  updateThemeButton();
});
systemTheme.addEventListener('change', event => {
  if (!themeIsManual) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    updateThemeButton();
  }
});
updateThemeButton();
// Open an accordion when its section is linked directly.
function openLinkedSection() {
  const section = document.getElementById(location.hash.slice(1));
  if (section && section.tagName === "DETAILS") section.open = true;
}
window.addEventListener("hashchange", openLinkedSection);
openLinkedSection();
