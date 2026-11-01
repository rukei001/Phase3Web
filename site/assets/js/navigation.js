/* ナビゲーションはこの1ファイルを編集。各HTMLにメニューを複製しない。 */
(() => {
  'use strict';
  const script = document.currentScript;
  const mount = document.getElementById('site-header');
  if (!script || !mount) return;
  const siteRoot = new URL('../../', script.src);
  const navGroups = [
    { label: '01 / MAIN DIRECTORY', links: [
      ['HOME', 'index.html'],
      ['WORLD/世界観', 'world/index.html'],
      ['DIVISION/陣営', 'factions/index.html'],
      ['CHARACTER', 'characters/index.html']
    ] },
    { label: '02 / WORLD ARCHIVE', links: [
      ['ABOUT LIMINA/リミナとは', 'world/limina.html'],
      ['HISTORY/リミナの歴史', 'world/history.html'],
      ['LOCATIONS/都市・地域', 'world/locations/index.html'],
      ['GOVERNMENT/国家・行政', 'world/government.html'],
      ['CULTURE/社会・文化', 'world/culture.html']
    ] },
    { label: '03 / UN', links: [
      ['UN/異形討伐機構', 'world/organization.html'],
      ['ABERRANTS/異形', 'world/anomalies.html'],
      ['IMMORTALS/不死者', 'world/immortals.html'],
      ['DEPARTMENTS/所属部門', 'departments/index.html']
    ] }
  ];
  const toUrl = file => new URL(file, siteRoot).href;
  const current = window.location.href.replace(/[?#].*$/, '');
  const header = document.createElement('header');
  header.className = 'site-header';
  const inner = document.createElement('div');
  inner.className = 'site-header-inner';
  const brand = document.createElement('a');
  brand.className = 'site-brand';
  brand.href = toUrl('index.html');
  brand.setAttribute('aria-label', 'PHASE3 トップページ');
  brand.innerHTML = '<span class="brand-emblem" aria-hidden="true"></span><span class="brand-name">PHASE3</span><span class="brand-sub">INFORMATION ARCHIVE</span>';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-button';
  button.setAttribute('aria-controls','global-nav');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-label','メニューを開く');
  button.innerHTML = '<span class="menu-action">MENU</span><span class="menu-icon" aria-hidden="true"></span>';
  inner.append(brand,button);
  const nav = document.createElement('nav');
  nav.id = 'global-nav';
  nav.className = 'site-menu';
  nav.hidden = true;
  nav.setAttribute('aria-label','サイト共通メニュー');
  const navInner = document.createElement('div');
  navInner.className = 'site-menu-inner';
  navGroups.forEach(group => {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    title.textContent = group.label;
    section.append(title);
    group.links.forEach(([label,path]) => {
      const link = document.createElement('a');
      link.href = toUrl(path);
      link.textContent = label;
      if (link.href === current) link.setAttribute('aria-current','page');
      section.append(link);
    });
    navInner.append(section);
  });
  nav.append(navInner);
  header.append(inner,nav);
  mount.replaceWith(header);
  function setOpen(open) {
    nav.hidden = !open;
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
    button.querySelector('.menu-action').textContent = open?'CLOSE':'MENU';
  }
  button.addEventListener('click', () => setOpen(nav.hidden));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !nav.hidden) {setOpen(false); button.focus();}
  });
  document.addEventListener('click', e => {
    if (!nav.hidden && !header.contains(e.target)) setOpen(false);
  });
})();
