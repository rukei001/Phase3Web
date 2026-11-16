/* EPISODE INDEX / 全登録人物の検索 + 各話の開閉フィルター。 */
(() => {
  'use strict';
  const list = document.getElementById('episode-list');
  const mainInput = document.getElementById('episode-main-filter');
  const castInput = document.getElementById('episode-character-filter');
  const factionSelect = document.getElementById('episode-faction-filter');
  const arcSelect = document.getElementById('episode-arc-filter');
  const clearButton = document.getElementById('episode-filter-clear');
  const count = document.getElementById('episode-result-count');
  const empty = document.getElementById('episode-empty');
  const mainOptions = document.getElementById('episode-main-options');
  const castOptions = document.getElementById('episode-character-options');
  const catalog = window.PHASE3_EPISODE_CATALOG;

  if (!list || !mainInput || !castInput || !factionSelect || !arcSelect ||
      !clearButton || !count || !empty || !mainOptions || !castOptions || !catalog) return;

  const entries = [...list.querySelectorAll('.episode-entry')];
  const byId = new Map(catalog.characters.map(character => [character.id, character]));
  const splitValues = value => (value || '').split('|').map(item => item.trim()).filter(Boolean);
  const normalize = value => (value || '').normalize('NFKC').toLocaleLowerCase('ja').trim();
  const mainIds = entry => splitValues(entry.dataset.episodeMain);
  const castIds = entry => splitValues(entry.dataset.episodeCharacters);
  const factions = entry => splitValues(entry.dataset.episodeFactions);
  const searchable = character => normalize([character.name, character.search, character.id].join(' '));

  // 候補はエピソード登場人物ではなく、サイトに登録されている全キャラクター。
  // 「エリザベス」などの同名キャラは両方検索対象に含まれる。
  // 同名の別所属ページは検索候補を統合。実際のリンク先は各話の人物IDで区別する。
  const names = [...new Set(catalog.characters.map(character => character.name))]
    .sort((a, b) => a.localeCompare(b, 'en'))
    .map(name => ({ label: name, value: name }));
  for (const option of names) {
    mainOptions.append(new Option(option.label, option.value));
    castOptions.append(new Option(option.label, option.value));
  }
  for (const faction of catalog.factions) {
    factionSelect.append(new Option(faction.name, faction.id));
  }

  const matchesPerson = (ids, query) => !query || ids.some(id => {
    const character = byId.get(id);
    return character && searchable(character).includes(query);
  });

  function update() {
    const main = normalize(mainInput.value);
    const cast = normalize(castInput.value);
    const faction = factionSelect.value;
    const arc = arcSelect.value;
    let shown = 0;

    for (const entry of entries) {
      const visible = matchesPerson(mainIds(entry), main) &&
        matchesPerson(castIds(entry), cast) &&
        (!faction || factions(entry).includes(faction)) &&
        (!arc || entry.dataset.episodeArc === arc);
      entry.hidden = !visible;
      if (visible) shown++;
    }

    count.textContent = `${shown} / ${entries.length} EPISODES`;
    empty.hidden = shown !== 0;
  }

  [mainInput, castInput].forEach(input => input.addEventListener('input', update));
  [factionSelect, arcSelect].forEach(select => select.addEventListener('change', update));
  clearButton.addEventListener('click', () => {
    mainInput.value = '';
    castInput.value = '';
    factionSelect.value = '';
    arcSelect.value = '';
    update();
  });

  // SUMMARY のタイトルと人物名は遷移専用。余白・三角アイコン側は開閉に使う。
  list.querySelectorAll('.episode-entry-summary a').forEach(link => {
    link.addEventListener('click', event => event.stopPropagation());
  });

  update();
})();
