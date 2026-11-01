/* PHASE3 / LOCATION THUMBNAILS — shared image renderer, works on file:// too. */
(() => {
  'use strict';
  const script = document.currentScript;
  const registry = window.PHASE3_REGION_THUMBNAILS;
  if (!script || !registry) return;
  const siteRoot = new URL('../../', script.src);
  document.querySelectorAll('[data-region-thumbnail]').forEach(slot => {
    const key = slot.dataset.regionThumbnail;
    const path = Object.prototype.hasOwnProperty.call(registry, key) ? registry[key] : '';
    if (typeof path !== 'string' || !path.trim()) return;
    const original = Array.from(slot.childNodes).map(n => n.cloneNode(true));
    const img = document.createElement('img');
    img.alt = ''; // Visible adjacent heading supplies the region name
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => slot.replaceChildren(...original), { once: true });
    img.src = new URL(path, siteRoot).href;
    slot.replaceChildren(img);
  });
})();
