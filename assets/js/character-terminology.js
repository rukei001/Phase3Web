/*
 * PHASE3 / GENDER & ORIENTATION — 共通用語辞書
 */
(() => {
  'use strict';
  const GLOSSARY = {
    "MALE": "自分自身の性別を男性として認識。",
    "FEMALE": "自分自身の性別を女性として認識。",
    "MALE-LEANING": "男性という性別への帰属意識が比較的見られる者。あるいは意図的に社会規範上の男性的振る舞いをする傾向がある者。男性形態で過ごすことが多い。",
    "FEMALE-LEANING": "女性という性別への帰属意識が比較的見られる者。あるいは意図的に社会規範上の女性的振る舞いをする傾向がある者。女性形態で過ごすことが多い。",
    "NONBINARY": "男性・女性という二元的な性別分類に当てはまらない性自認の総称。両方の性別を持つ、どちらでもない、中間に位置するなど、一般的にはさまざまな自己認識を含むが、リミナにおいては「二元論に当てはめんなよ」という超個人主義的思想と強く紐づいた性自認として用いられる。",
    "NON-BINARY": "男性・女性という二元的な性別分類に当てはまらない性自認の総称。両方の性別を持つ、どちらでもない、中間に位置するなど、一般的にはさまざまな自己認識を含むが、リミナにおいては「二元論に当てはめんなよ」という超個人主義的思想と強く紐づいた性自認として用いられる。",
    "IN-BETWEEN": "男性と女性の中間に位置するという認識。不死者の場合、「どっちにもなれるから中間って感じ～」みたいなふわっとした認識。",
    "INTERMEDIATE": "男性と女性の中間に位置するという認識。不死者の場合、「どっちにもなれるから中間って感じ～」みたいなふわっとした認識。",
    "BOTH": "両性を自身の性別として認識する。不死者の場合、その時々の身体性に応じて自認する性別が切り替わり、振る舞いにもはっきりとした影響が出やすい。",
    "NONE": "身体の性別を自身のアイデンティティの構成要素として認識しない者。しかし、快適な身体性が存在しあまり性別を切り替えない者や、性別に応じた規範には一応乗っておくという者もいる。人による。",
    "AGENDER": "身体の性別を自身のアイデンティティの構成要素として認識しない者。しかし、快適な身体性が存在しあまり性別を切り替えない者や、性別に応じた規範には一応乗っておくという者もいる。人による。",
    "FORM-REFERENTIAL": "リミナの不死者によく見られる性自認。身体形態に応じて社会的な性別表現や振る舞いを変えることがあっても、精神的な自己認識は連続しているとする思想。特定の性別にアイデンティティを置かない。",
    "UNKNOWN": "ほかの人は彼らの指向を知らない。",
    "CUTE ME ☆彡": "「可愛いボク」。独自の表現。理解不能。",
    "AROMANTIC": "他者に対して恋愛的な惹かれを感じない、あるいは非常に少ない者。",
    "DEMIROMANTIC": "相手との間に深い感情的な結びつきが形成された場合に限り、恋愛的な惹かれが生じるかもしれない。",
    "GRAYROMANTIC": "恋愛的な惹かれを感じる頻度が非常に少ない、あるいは特殊な条件下でのみ発生するかもしれない。",
    "MAROMANTIC": "男性の身体を持つ人物に対し恋愛的に惹かれる。",
    "WOMAROMANTIC": "女性の身体を持つ人物に対し恋愛的に惹かれる。",
    "ANDROROMANTIC": "男性、男性性、男性的なジェンダー表現などに恋愛的に惹かれる。",
    "GYNEROMANTIC": "女性、女性性、女性的なジェンダー表現などに恋愛的に惹かれる。",
    "FINROMANTIC": "性自認にかかわらず、女性的な性質やジェンダー表現を持つ人物に恋愛的に惹かれる。つまり、美少女みたいなら男でも構わんってこと？！ FINは Feminine in Nature の略。",
    "BIROMANTIC": "2つ以上の性別に恋愛的に惹かれうる指向。ここでは、男性・女性のどちらにも惹かれる者を指す。どちらの性に惹かれやすいかは個人によって差がある。",
    "PANROMANTIC": "相手の性別にかかわらず恋愛的に惹かれうる。性別そのものが恋愛を左右する条件にならない。",
    "OMNIROMANTIC": "あらゆる性別に恋愛的に惹かれうる。リミナでは、相手の性別ありきの魅力も踏まえたうえで惹かれる者という意味で使用する。",
    "ASEXUAL": "他者に対して性的な惹かれを感じない、あるいは非常に少ない。",
    "DEMISEXUAL": "相手との間に深い感情的な結びつきが形成された場合に限り、性的な惹かれが生じうるかもしれない。",
    "GRAYSEXUAL": "性的な惹かれを感じる頻度が非常に少ない。あるいは特定の条件下でのみ生じるかもしれない。",
    "WOMASEXUAL": "女性、または女性に近いジェンダーの人物に性的に惹かれる指向。",
    "ANDROSEXUAL": "男性、男性性、男性的なジェンダー表現などに性的に惹かれる。ここでは主に男性性に惹かれる場合に使用。",
    "GYNESEXUAL": "女性、女性性、女性的なジェンダー表現などに性的に惹かれる。ここでは主に女性性に惹かれる場合に使用。",
    "FINSEXUAL": "女性的な性質やジェンダー表現を持つ人物に性的に惹かれる。FINは Feminine in Nature の略。",
    "BISEXUAL": "2つ以上の性別に性的に惹かれうる指向。ここでは、男性・女性のどちらにも惹かれる者を指す。どちらの性に惹かれやすいかは個人によって差がある。",
    "PANSEXUAL": "相手の性別にかかわらず性的に惹かれうる。",
    "OMNISEXUAL": "あらゆる性別に性的に惹かれうる。リミナでは、相手の性別ありきの魅力も踏まえたうえで惹かれる者という意味で使用する。",
    "STRAIGHT": "自分とは異なる性別の人物に惹かれる。",
    "STRAIGHT (AS A MAN)": "男性として、自分とは異なる性別の人物に惹かれる。",
    "HETEROROMANTIC": "自分とは異なる性別の人物に恋愛的に惹かれる。",
    "HETEROSEXUAL": "自分とは異なる性別の人物に性的に惹かれる。",
    "KALORINA": "本人がそう言ってる",
    "WOMAROMANTIC-LEANING STRAIGHT (AS A MAN)": "男性として女性が好きなストレート……みたいな感じ。",
    "TWO-DIMENSIONAL CHARACTERS EXCEPTION": "二次元キャラクターはこの限りではないとする。",
    "2D CHARACTERS EXCEPTION": "二次元キャラクターはこの限りではないとする。",
    "UNDISCLOSED": "指向に関する情報は非公開だ。",
    "MYSTERY": "ほかの人は彼らの指向を知らない。",
  };

  // 同じ表示語でも「性自認」と「恋愛的／性的指向」で意味が異なる場合の説明
  const CONTEXT_GLOSSARY = {
    "gender": {
      "UNKNOWN": "性自認に関する言及がない。",
    },
    "gender-non-archon": {
      "NONE": "とくになし",
    },
    "romantic": {
      "NONE": "とくになし",
      "STRAIGHT": "自分とは異なる性別の人物に恋愛的に惹かれる。男性として女性に惹かれる、女性として男性に惹かれる場合に使用。",
      "STRAIGHT (AS A MAN)": "自分とは異なる性別の人物に恋愛的に惹かれる。男性として女性に惹かれる場合の表現。",
      "HETEROROMANTIC": "自分とは異なる性別の人物に恋愛的に惹かれる。男性として女性に惹かれる、女性として男性に惹かれる場合に使用。",
    },
    "sexual": {
      "NONE": "とくになし",
      "STRAIGHT": "自分とは異なる性別の人物に性的に惹かれる。",
      "STRAIGHT (AS A MAN)": "自分とは異なる性別の人物に性的に惹かれる。男性として女性に惹かれる場合の表現。",
      "HETEROSEXUAL": "自分とは異なる性別の人物に性的に惹かれる。",
    },
  };

  function fieldContext(trigger) {
    const field = trigger.closest('tr')?.querySelector('th')?.textContent?.trim() || '';
    if (/Gender Identity|性自認/i.test(field)) return 'gender';
    if (/Romantic Orientation|恋愛的指向/i.test(field)) return 'romantic';
    if (/Sexual Orientation|性的指向/i.test(field)) return 'sexual';
    return '';
  }

  function lookupDescription(trigger) {
    const key = trigger.dataset.glossary;
    const category = fieldContext(trigger);
    // Only explicitly tagged, non-Archon gender terms use this alternate meaning.
    // Untagged gender NONE retains the established Archon-specific description.
    const contextKey = category === 'gender' && trigger.dataset.glossaryVariant === 'non-archon'
      ? 'gender-non-archon' : category;
    return CONTEXT_GLOSSARY[contextKey]?.[key] || GLOSSARY[key] || '';
  }

  const triggers = [...document.querySelectorAll('button[data-glossary]')];
  if (!triggers.length) return;

  const panel = document.createElement('div');
  panel.id = 'phase3-glossary-popover';
  panel.className = 'glossary-popover';
  panel.setAttribute('role', 'tooltip');
  panel.hidden = true;
  const title = document.createElement('div');
  title.className = 'glossary-popover-title';
  const description = document.createElement('p');
  description.className = 'glossary-popover-description';
  panel.append(title, description);
  document.body.appendChild(panel);

  let active = null;
  let pinned = false;
  let shownAtX = 0;
  let shownAtY = 0;
  function hide() {
    panel.hidden = true;
    if (active) {
      active.removeAttribute('aria-describedby');
      active.setAttribute('aria-expanded', 'false');
    }
    active = null;
    pinned = false;
  }
  function place(trigger) {
    const rect = trigger.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const width = Math.min(340, vw - 24);
    panel.style.width = `${width}px`;
    panel.style.left = `${Math.max(12, Math.min(rect.left, vw - width - 12))}px`;
    const panelHeight = panel.getBoundingClientRect().height;
    let top = rect.bottom + 9;
    if (top + panelHeight > vh - 12) top = rect.top - panelHeight - 9;
    panel.style.top = `${Math.max(12, top)}px`;
  }
  function show(trigger, pin = false) {
    if (active && active !== trigger) {
      active.removeAttribute('aria-describedby');
      active.setAttribute('aria-expanded', 'false');
    }
    active = trigger;
    pinned = pin;
    shownAtX = window.scrollX;
    shownAtY = window.scrollY;
    const key = trigger.dataset.glossary;
    title.textContent = key;
    description.textContent = lookupDescription(trigger);
    panel.hidden = false;
    trigger.setAttribute('aria-describedby', panel.id);
    trigger.setAttribute('aria-expanded', 'true');
    place(trigger);
  }

  triggers.forEach(trigger => {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('mouseenter', () => { if (!pinned) show(trigger); });
    trigger.addEventListener('mouseleave', () => { if (!pinned && active === trigger) hide(); });
    trigger.addEventListener('focus', () => { if (!pinned) show(trigger); });
    trigger.addEventListener('blur', () => { if (!pinned && active === trigger) hide(); });
    trigger.addEventListener('click', event => {
      event.stopPropagation();
      if (active === trigger && pinned) hide();
      else show(trigger, true);
    });
  });
  document.addEventListener('pointerdown', event => {
    if (pinned && !event.target.closest('[data-glossary]') && !panel.contains(event.target)) hide();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && active) { const prior = active; hide(); prior.focus(); } });
  window.addEventListener('scroll', () => {
    if (active && (window.scrollX !== shownAtX || window.scrollY !== shownAtY)) hide();
  }, { passive: true });
  window.addEventListener('resize', hide);
})();
