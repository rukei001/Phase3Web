/* PHASE3 / CHARACTER DIRECTORY: visible card metadata comes from HTML data-* attributes. */
(() => {
  'use strict';
  const grid = document.getElementById('character-grid');
  if (!grid) return;
  const ids = ['query', 'faction', 'department', 'agent-type', 'gender', 'sort'];
  const fields = Object.fromEntries(ids.map(key => [key, document.getElementById(`character-${key}`)]));
  const count = document.getElementById('character-count');
  const reset = document.getElementById('character-reset');
  if (ids.some(id => !fields[id])) return;
  const cards = Array.from(grid.querySelectorAll('.character-entry'));
  const collator = new Intl.Collator('ja', { numeric: true, sensitivity: 'base' });
  const tokens = value => (value || '').toLowerCase().trim().split(/\s+/).filter(Boolean);
  const hasToken = (value, token) => tokens(value).includes(token);
  const clean = value => (value || '').normalize('NFKC').toLocaleLowerCase('ja');
  const sortName = card => card.dataset.sortName || card.querySelector('.character-entry-name')?.textContent || '';
  // Production-order IDs are permanent. Missing IDs sort last; gaps are deliberately preserved.
  const productionOrder = card => {
    const id = Number.parseInt(card.dataset.characterId || '', 10);
    return Number.isFinite(id) ? id : Number.MAX_SAFE_INTEGER;
  };
  const compareProductionOrder = (a, b) =>
    productionOrder(a) - productionOrder(b) ||
    Number(a.dataset.originalPosition) - Number(b.dataset.originalPosition);
  const getTag = (selectId, value) => {
    const option = Array.from(fields[selectId].options).find(option => option.value === value);
    return option?.dataset.tag || '';
  };
  // Display tags without keeping a duplicate manual list in each card.
  cards.forEach((card, index) => {
    card.dataset.originalPosition = String(index);
    const holder = card.querySelector('.character-entry-tags');
    if (!holder) return;
    const factions = tokens(card.dataset.factions);
    const displayed = [
      ...factions.filter(value => value === 'un').map(value => getTag('faction', value)),
      ...tokens(card.dataset.departments).map(value => getTag('department', value)),
      getTag('agent-type', (card.dataset.agentType || '').trim()),
      ...factions.filter(value => value !== 'un').map(value => getTag('faction', value))
    ].filter(Boolean);
    const unique = [...new Set(displayed)];
    holder.replaceChildren(...unique.map(label => {
      const span = document.createElement('span');
      span.className = 'character-entry-tag';
      span.textContent = label;
      return span;
    }));
  });

  function update() {
    const query = clean(fields.query.value.trim());
    const chosen = {
      faction: fields.faction.value,
      department: fields.department.value,
      agentType: fields['agent-type'].value,
      gender: fields.gender.value
    };
    const sorted = [...cards];
    if (fields.sort.value === 'default') {
      sorted.sort(compareProductionOrder);
    } else {
      const descending = fields.sort.value === 'name-desc' ? -1 : 1;
      sorted.sort((a,b) =>
        descending * collator.compare(sortName(a), sortName(b)) ||
        compareProductionOrder(a, b));
    }
    let visible = 0;
    sorted.forEach(card => {
      grid.appendChild(card);
      const searchText = clean([
        card.querySelector('.character-entry-name')?.textContent,
        card.dataset.sortName,
        card.dataset.search
      ].join(' '));
      const matches = (!query || searchText.includes(query)) &&
        (chosen.faction === 'all' || hasToken(card.dataset.factions, chosen.faction)) &&
        (chosen.department === 'all' || hasToken(card.dataset.departments, chosen.department)) &&
        (chosen.agentType === 'all' || hasToken(card.dataset.agentType, chosen.agentType)) &&
        (chosen.gender === 'all' || card.dataset.gender === chosen.gender);
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (count) count.textContent = `${visible} / ${cards.length} CHARACTERS`;
  }
  fields.query.addEventListener('input', update);
  ['faction','department','agent-type','gender','sort'].forEach(key => fields[key].addEventListener('change', update));
  if (reset) reset.addEventListener('click', () => {
    fields.query.value = '';
    ['faction','department','agent-type','gender','sort'].forEach(key => { fields[key].value = key === 'sort' ? 'default' : 'all'; });
    update();
  });
  update();
})();
