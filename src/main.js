// Theme init
(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

// Handlers
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const themeBtn = document.getElementById('themeBtn');
  themeBtn?.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));

  // skill chips
  document.querySelectorAll('.chip')?.forEach(el => {
    el.classList.add('px-2','py-1','rounded-full','bg-white/60','dark:bg-white/5','border','border-slate-200','dark:border-slate-800');
  });

  // contact form
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    console.log('Form data:', data);
    const st = document.getElementById('formStatus');
    st?.classList.remove('hidden');
    form.reset();
  });
});
