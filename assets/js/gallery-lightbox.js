/* PHASE3 / GALLERY LIGHTBOX
 * ギャラリー内の <img> だけに拡大表示を追加する。HTML側の編集は画像追加のみ。
 * オプション: img の data-lightbox-src="拡大用画像パス"、data-lightbox-caption="説明"。
 * 基本プロフィールの画像、人物関係の画像などは対象外。
 */
(() => {
  'use strict';

  const thumbs = document.querySelectorAll('.character-gallery img');
  if (!thumbs.length || typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-lightbox';
  dialog.setAttribute('aria-label', 'ギャラリー画像の拡大表示');
  dialog.innerHTML = `
    <div class="gallery-lightbox-panel">
      <button type="button" class="gallery-lightbox-close" aria-label="拡大表示を閉じる">×</button>
      <img class="gallery-lightbox-image" alt="">
      <p class="gallery-lightbox-caption"></p>
    </div>`;
  document.body.append(dialog);

  const enlarged = dialog.querySelector('.gallery-lightbox-image');
  const caption = dialog.querySelector('.gallery-lightbox-caption');
  const closeButton = dialog.querySelector('.gallery-lightbox-close');
  let triggerToRestore = null;

  function open(image, trigger, anchor) {
    const source = image.dataset.lightboxSrc || (anchor && anchor.getAttribute('href')) || image.currentSrc || image.src;
    if (!source) return;
    triggerToRestore = trigger;
    enlarged.src = source;
    enlarged.alt = image.alt || '';
    caption.textContent = image.dataset.lightboxCaption || image.closest('figure')?.querySelector('figcaption')?.textContent?.trim() || image.alt || '';
    dialog.showModal();
    closeButton.focus();
  }

  thumbs.forEach(image => {
    // 既存の <a href="拡大画像"> で包んである場合は、そのまま利用。
    const anchor = image.parentElement?.closest('a');
    if (anchor && anchor.closest('.character-gallery')) {
      anchor.classList.add('gallery-lightbox-trigger');
      if (!anchor.getAttribute('aria-label')) {
        anchor.setAttribute('aria-label', `${image.alt || '画像'}を拡大表示`);
      }
      anchor.addEventListener('click', event => {
        event.preventDefault();
        open(image, anchor, anchor);
      });
      return;
    }

    // 通常の <img> はJS側でボタンに包む。作者側のHTML変更は不要。
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-lightbox-trigger';
    button.setAttribute('aria-label', `${image.alt || '画像'}を拡大表示`);
    image.before(button);
    button.append(image);
    button.addEventListener('click', () => open(image, button, null));
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    // 画像パネルの外（暗い部分）をクリックした場合だけ閉じる。
    if (event.target === dialog) dialog.close();
  });
  // Escapeは<dialog>の標準操作で閉じる。
  dialog.addEventListener('close', () => {
    enlarged.removeAttribute('src');
    enlarged.alt = '';
    caption.textContent = '';
    if (triggerToRestore?.isConnected) triggerToRestore.focus();
    triggerToRestore = null;
  });
})();
