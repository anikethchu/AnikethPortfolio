// Apply the saved preference before the page paints to avoid a theme flash.
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (_) {}
let themeIsManual = savedTheme === 'light' || savedTheme === 'dark';
document.documentElement.dataset.theme = themeIsManual
  ? savedTheme : (systemTheme.matches ? 'dark' : 'light');
