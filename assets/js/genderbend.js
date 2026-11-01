/* PHASE3 / GENDERBEND
 * HTMLに記入した表示が初期状態。data-alt-text は反対の姿の短文用。
 * data-genderbend を消すとボタンごと無効（固定キャラ）。
 * 任意の長文差分には data-gender-only="male|female" を使用。
 */
(() => {
  'use strict';
  const root = document.querySelector('.character-hero[data-genderbend]');
  if (!root) return;
  const button = root.querySelector('[data-gender-toggle]');
  if (!button) return;
  const initial = root.dataset.defaultGender === 'female' ? 'female' : 'male';
  let current = initial;
  const alternates = Array.from(document.querySelectorAll('[data-alt-text]')).map(el => ({
    el,
    original: el.textContent,
    alternate: el.dataset.altText
  }));
  const genderOnly = Array.from(document.querySelectorAll('[data-gender-only]'));
  const icon = button.querySelector('[data-gender-symbol]');

  function render() {
    const alternate = current !== initial;
    alternates.forEach(({el, original, alternate: other}) => {
      el.textContent = alternate ? other : original;
    });
    genderOnly.forEach(el => { el.hidden = el.dataset.genderOnly !== current; });
    if (icon) icon.textContent = current === 'male' ? '♂' : '♀';
    const displayed = current === 'male' ? '男体' : '女体';
    const next = current === 'male' ? '女体' : '男体';
    button.setAttribute('aria-label', `現在は${displayed}を表示中。${next}に切り替える`);
    button.setAttribute('aria-pressed', String(alternate));
    button.title = `GENDERBEND / ${displayed} → ${next}`;
  }
  render();
  root.classList.add('genderbend-ready');
  button.addEventListener('click', () => {
    current = current === 'male' ? 'female' : 'male';
    render();
  });
})();
