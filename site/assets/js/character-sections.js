/* PHASE3 / キャラクターセクション
 * 開閉そのものは <details> の標準動作。JSは目次で閉じた項目を開くだけ。
 */
(() => {
  'use strict';
  const openFromHash = () => {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); }
    catch { return; }
    const target = document.getElementById(id);
    if (target && target.matches('details.character-section')) target.open = true;
  };
  document.querySelectorAll('.character-toc a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target && target.matches('details.character-section')) target.open = true;
    });
  });
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
