/* PHASE3 / SHARED ICONS — no fetch; also works when opening HTML files directly. */
(() => {
  'use strict';
  const script = document.currentScript;
  const registry = window.PHASE3_CHARACTER_ICONS;
  if (!script || !registry) return;
  const siteRoot = new URL('../../', script.src);
  document.querySelectorAll('[data-character-icon]').forEach(slot => {
    const key = slot.dataset.characterIcon;
    const path = Object.prototype.hasOwnProperty.call(registry, key) ? registry[key] : '';
    if (!path || typeof path !== 'string') return;
    const original = Array.from(slot.childNodes).map(n => n.cloneNode(true));
    const img = document.createElement('img');
    img.alt = ''; // Names are already shown next to each icon
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => slot.replaceChildren(...original), { once: true });
    img.src = new URL(path, siteRoot).href;
    slot.replaceChildren(img);
  });
})();
