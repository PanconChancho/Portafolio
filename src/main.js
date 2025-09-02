import emailjs from "emailjs-com";

import './style.css';
(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

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


  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    console.log('Form data:', Object.fromEntries(fd.entries()));
    document.getElementById('formStatus')?.classList.remove('hidden');
    form.reset();
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_wr0x4m7",  
    "template_ygzvhvp",   
    this,
    "afne6iCmh5iG9wbVM"  
  ).then(() => {
    document.getElementById("formStatus").textContent = "¡Mensaje enviado con éxito!";
    document.getElementById("formStatus").classList.remove("hidden");
  }).catch((err) => {
    console.error("Error:", err);
    document.getElementById("formStatus").textContent = "Error al enviar. Intenta otra vez.";
    document.getElementById("formStatus").classList.remove("hidden");
  });
});

