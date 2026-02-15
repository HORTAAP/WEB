// script.js - Funcionalitat de la web

// Idioma actual
let currentLang = 'ca';

// Canviar idioma
function changeLanguage(lang) {
  currentLang = lang;
  
  // Actualitzar botons
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById('lang-' + lang).classList.add('active');
  
  // Actualitzar atribut lang de l'HTML
  document.documentElement.lang = lang;
  
  // Actualitzar tots els textos
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Guardar preferència
  localStorage.setItem('hortapp-lang', lang);
}

// Carregar idioma guardat
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('hortapp-lang') || 'ca';
  changeLanguage(savedLang);
});

// Gestió de modals
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Tancar modal clicant fora
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });
});