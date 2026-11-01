/* PHASE3 v17 / GALLERY
 * The GALLERY_IMAGES registration list lives in each character HTML.
 * thumbnail: lightweight image for the grid; full: large image fetched only on click.
 * No portrait or relationship image will be enlarged.
 */
(() => {
  'use strict';
  const gallery = document.querySelector('.character-gallery');
  if (!gallery) return;
  const entries = Array.isArray(window.PHASE3_GALLERY_IMAGES) ? window.PHASE3_GALLERY_IMAGES : [];
  gallery.replaceChildren();
  entries.forEach((item,index) => {
    const thumb = String(item.thumbnail || '').trim();
    const full = String(item.full || '').trim();
    if (!thumb || !full) {
      const empty = document.createElement('div');
      empty.className = 'gallery-placeholder';
      empty.textContent = 'ILLUSTRATION / ' + String(index + 1).padStart(2, '0');
      gallery.append(empty);
      return;
    }
    const a = document.createElement('a');
    a.className = 'gallery-lightbox-trigger';
    a.href = full;
    a.dataset.galleryCaption = item.caption || '';
    const img = document.createElement('img');
    img.src = thumb;
    img.alt = item.caption || ('イラスト ' + String(index + 1).padStart(2, '0'));
    img.loading = 'lazy';
    img.decoding = 'async';
    a.setAttribute('aria-label', img.alt + 'を拡大表示');
    a.append(img); gallery.append(a);
  });

  // Lightbox: the only loaded full-size source is the selected thumbnail's link.
  if (typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-lightbox';
  dialog.setAttribute('aria-label', 'ギャラリー画像の拡大表示');
  dialog.innerHTML = '<div class="gallery-lightbox-panel"><button type="button" class="gallery-lightbox-close" aria-label="拡大表示を閉じる">×</button><img class="gallery-lightbox-image" alt=""><p class="gallery-lightbox-caption"></p></div>';
  document.body.append(dialog);
  const image = dialog.querySelector('.gallery-lightbox-image');
  const caption = dialog.querySelector('.gallery-lightbox-caption');
  const close = dialog.querySelector('.gallery-lightbox-close');
  let focusTarget = null;
  gallery.addEventListener('click', event => {
    const a = event.target.closest('a.gallery-lightbox-trigger');
    if (!a || !gallery.contains(a)) return;
    event.preventDefault();
    focusTarget = a;
    image.src = a.getAttribute('href');
    image.alt = a.querySelector('img')?.alt || '';
    caption.textContent = a.dataset.galleryCaption || '';
    dialog.showModal(); close.focus();
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {if (event.target === dialog) dialog.close();});
  dialog.addEventListener('close', () => {
    image.removeAttribute('src'); image.alt = ''; caption.textContent = '';
    if (focusTarget?.isConnected) focusTarget.focus();
    focusTarget = null;
  });
})();
