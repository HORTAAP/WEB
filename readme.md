# HortApp - Web Estàtica

## 📂 Estructura de fitxers

```
web/
├── index.html          ← Pàgina principal
├── styles.css          ← Estils
├── script.js           ← Funcionalitat (modals, etc.)
├── translations.js     ← Traduccions CA/ES/EN
└── assets/             ← CARPETA PER LES IMATGES
    ├── screenshot-horts.png
    ├── screenshot-plantes.png
    └── screenshot-stats.png
```

## 📱 Com afegir les captures de pantalla

### 1. Crea la carpeta `assets`

A la mateixa carpeta on tens l'`index.html`, crea una carpeta nova anomenada **`assets`**.

### 2. Afegeix les imatges

Posa les captures de pantalla de l'app amb aquests noms exactes:

- **screenshot-horts.png** - Captura de la pantalla dels horts
- **screenshot-plantes.png** - Captura de la pantalla de plantes
- **screenshot-stats.png** - Captura de les estadístiques

**IMPORTANT:** Si les imatges tenen extensió `.jpg` en comptes de `.png`, canvia-ho a l'HTML:

```html
<!-- Canvia .png per .jpg si cal -->
<img src="assets/screenshot-horts.jpg" alt="Horts" class="screenshot-img">
```

### 3. Mides recomanades

- **Amplada:** 1080px (resolució de mòbil)
- **Alçada:** 2160px o similar (pantalla completa)
- **Format:** PNG o JPG
- **Pes:** Optimitza les imatges a menys de 500KB cadascuna

## 🌍 Multiidioma

La web té 3 idiomes:
- 🇦🇩 **Català** (per defecte)
- 🇪🇸 **Castellà**
- 🇬🇧 **Anglès**

El selector d'idioma està a dalt a la dreta. L'idioma es guarda automàticament al navegador.

## ✏️ Personalitzar

### Canviar email de contacte:

A `index.html`, cerca:
```html
<a href="mailto:hortapp@example.com"
```

Canvia `hortapp@example.com` pel teu email.

### Canviar enllaços de descàrrega:

A `index.html`, cerca:
```html
<a href="#" class="btn">📱 Descarregar iOS</a>
<a href="#" class="btn">🤖 Descarregar Android</a>
```

Canvia `href="#"` pels teus enllaços de l'App Store i Google Play.

### Modificar traduccions:

Edita el fitxer `translations.js` i canvia els textos que vulguis.

## 🚀 Publicar la web

### Opcions gratuïtes:

1. **GitHub Pages** - https://pages.github.com
2. **Netlify** - https://netlify.com
3. **Vercel** - https://vercel.com
4. **Cloudflare Pages** - https://pages.cloudflare.com

Només has de pujar tots els fitxers (HTML, CSS, JS i carpeta assets).

## ✅ Checklist abans de publicar

- [ ] Imatges afegides a la carpeta `assets/`
- [ ] Email de contacte actualitzat
- [ ] Enllaços de descàrrega App Store/Play Store afegits
- [ ] Traduccions revisades (si cal)
- [ ] Provat en diferents idiomes
- [ ] Provat en mòbil i ordinador

---

**Fet amb ❤️ per HortApp**