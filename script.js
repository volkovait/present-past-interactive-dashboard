/**
 * Subject pronouns for conjugation (value = grammatical form in sentences).
 * "you_all" = вы (множественное/вежливое)
 */
const PRONOUNS = [
  { value: "I", label: "I" },
  { value: "you", label: "you" },
  { value: "he", label: "he" },
  { value: "she", label: "she" },
  { value: "it", label: "it" },
  { value: "we", label: "we" },
  { value: "you_all", label: "you (вы)" },
  { value: "they", label: "they" },
];

function isThirdPersonSingular(p) {
  return p === "he" || p === "she" || p === "it";
}

function subjectDisplay(p) {
  if (p === "you_all") {
    return "You";
  }
  if (p === "I") {
    return "I";
  }
  return p.charAt(0).toUpperCase() + p.slice(1);
}

/** Present: Do / Does for questions at start */
function presentAuxQuestion(p) {
  return isThirdPersonSingular(p) ? "Does" : "Do";
}

/** Present: do / does in negative */
function presentAuxNegative(p) {
  return isThirdPersonSingular(p) ? "does" : "do";
}

/** Past: always Did / did */
function pastAuxQuestion() {
  return "Did";
}

function pastAuxNegative() {
  return "did";
}

function buildSubjectSelect(selectedValue, rowId) {
  const opts = PRONOUNS.map(
    (pr) =>
      `<option value="${pr.value}" ${pr.value === selectedValue ? "selected" : ""}>${pr.label}</option>`
  ).join("");
  return `<select class="subject-select" data-row="${rowId}" aria-label="Подлежащее">${opts}</select>`;
}

/**
 * Russian translation snippets per pronoun (rough agreement for learning page).
 */
const RU = {
  I: {
    visit: "Я посещаю театр.",
    visitQ: "Я посещаю театр?",
    visitN: "Я не посещаю театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Я актёр.",
    beQ: "Я актёр?",
    beN: "Я не актёр.",
    visited: "Я посетил(а) театр.",
    visitedQ: "Я посетил(а) театр?",
    visitedN: "Я не посетил(а) театр.",
    walked: "Каждый день я ходил на работу пешком.",
    walkedQ: "Я ходил на работу пешком каждый день?",
    walkedN: "Я не ходил на работу пешком каждый день.",
    viewed: "Он просмотрел мой профиль в LinkedIn.",
    viewedQ: "Он просмотрел мой профиль в LinkedIn?",
    viewedN: "Он не просмотрел мой профиль в LinkedIn.",
    was: "Я был актёром.",
    wasQ: "Я был актёром?",
    wasN: "Я не был актёром.",
  },
  you: {
    visit: "Ты посещаешь театр.",
    visitQ: "Ты посещаешь театр?",
    visitN: "Ты не посещаешь театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Ты актёр.",
    beQ: "Ты актёр?",
    beN: "Ты не актёр.",
    visited: "Ты посетил(а) театр.",
    visitedQ: "Ты посетил(а) театр?",
    visitedN: "Ты не посетил(а) театр.",
    walked: "Каждый день ты ходил на работу пешком.",
    walkedQ: "Ты ходил на работу пешком каждый день?",
    walkedN: "Ты не ходил на работу пешком каждый день.",
    viewed: "Он просмотрел мой профиль в LinkedIn.",
    viewedQ: "Он просмотрел мой профиль в LinkedIn?",
    viewedN: "Он не просмотрел мой профиль в LinkedIn.",
    was: "Ты был актёром.",
    wasQ: "Ты был актёром?",
    wasN: "Ты не был актёром.",
  },
  he: {
    visit: "Он посещает театр.",
    visitQ: "Он посещает театр?",
    visitN: "Он не посещает театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Он актёр.",
    beQ: "Он актёр?",
    beN: "Он не актёр.",
    visited: "Он посетил театр.",
    visitedQ: "Он посетил театр?",
    visitedN: "Он не посетил театр.",
    walked: "Каждый день он ходил на работу пешком.",
    walkedQ: "Он ходил на работу пешком каждый день?",
    walkedN: "Он не ходил на работу пешком каждый день.",
    viewed: "Он просмотрел мой профиль в LinkedIn.",
    viewedQ: "Он просмотрел мой профиль в LinkedIn?",
    viewedN: "Он не просмотрел мой профиль в LinkedIn.",
    was: "Он был актёром.",
    wasQ: "Он был актёром?",
    wasN: "Он не был актёром.",
  },
  she: {
    visit: "Она посещает театр.",
    visitQ: "Она посещает театр?",
    visitN: "Она не посещает театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Она актриса.",
    beQ: "Она актриса?",
    beN: "Она не актриса.",
    visited: "Она посетила театр.",
    visitedQ: "Она посетила театр?",
    visitedN: "Она не посетила театр.",
    walked: "Каждый день она ходила на работу пешком.",
    walkedQ: "Она ходила на работу пешком каждый день?",
    walkedN: "Она не ходила на работу пешком каждый день.",
    viewed: "Она просмотрела мой профиль в LinkedIn.",
    viewedQ: "Она просмотрела мой профиль в LinkedIn?",
    viewedN: "Она не просмотрела мой профиль в LinkedIn.",
    was: "Она была актрисой.",
    wasQ: "Она была актрисой?",
    wasN: "Она не была актрисой.",
  },
  it: {
    visit: "Оно посещает театр.",
    visitQ: "Оно посещает театр?",
    visitN: "Оно не посещает театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Это актёр (редко для it).",
    beQ: "Это актёр?",
    beN: "Это не актёр.",
    visited: "Оно посетило театр.",
    visitedQ: "Оно посетило театр?",
    visitedN: "Оно не посетило театр.",
    walked: "Каждый день оно ходило на работу пешком.",
    walkedQ: "Оно ходило на работу пешком каждый день?",
    walkedN: "Оно не ходило на работу пешком каждый день.",
    viewed: "Оно просмотрело мой профиль в LinkedIn.",
    viewedQ: "Оно просмотрело мой профиль в LinkedIn?",
    viewedN: "Оно не просмотрело мой профиль в LinkedIn.",
    was: "Оно было актёром.",
    wasQ: "Оно было актёром?",
    wasN: "Оно не было актёром.",
  },
  we: {
    visit: "Мы посещаем театр.",
    visitQ: "Мы посещаем театр?",
    visitN: "Мы не посещаем театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Мы актёры.",
    beQ: "Мы актёры?",
    beN: "Мы не актёры.",
    visited: "Мы посетили театр.",
    visitedQ: "Мы посетили театр?",
    visitedN: "Мы не посетили театр.",
    walked: "Каждый день мы ходили на работу пешком.",
    walkedQ: "Мы ходили на работу пешком каждый день?",
    walkedN: "Мы не ходили на работу пешком каждый день.",
    viewed: "Мы просмотрели профиль в LinkedIn. (сложнее; учебный пример)",
    viewedQ: "Мы просмотрели профиль в LinkedIn?",
    viewedN: "Мы не просмотрели профиль в LinkedIn.",
    were: "Мы были актёрами.",
    wereQ: "Мы были актёрами?",
    wereN: "Мы не были актёрами.",
  },
  you_all: {
    visit: "Вы посещаете театр.",
    visitQ: "Вы посещаете театр?",
    visitN: "Вы не посещаете театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Вы актёры.",
    beQ: "Вы актёры?",
    beN: "Вы не актёры.",
    visited: "Вы посетили театр.",
    visitedQ: "Вы посетили театр?",
    visitedN: "Вы не посетили театр.",
    walked: "Каждый день вы ходили на работу пешком.",
    walkedQ: "Вы ходили на работу пешком каждый день?",
    walkedN: "Вы не ходили на работу пешком каждый день.",
    viewed: "Вы просмотрели профиль в LinkedIn.",
    viewedQ: "Вы просмотрели профиль в LinkedIn?",
    viewedN: "Вы не просмотрели профиль в LinkedIn.",
    were: "Вы были актёрами.",
    wereQ: "Вы были актёрами?",
    wereN: "Вы не были актёрами.",
  },
  they: {
    visit: "Они посещают театр.",
    visitQ: "Они посещают театр?",
    visitN: "Они не посещают театр.",
    boil: "Вода закипает при 100 градусах Цельсия.",
    boilQ: "Вода закипает при 100 градусах Цельсия?",
    boilN: "Вода не закипает при 100 градусах Цельсия.",
    start: "Он (напр, фильм) начнётся в 10.",
    startQ: "Он (напр, фильм) начнётся в 10?",
    startN: "Он (напр, фильм) не начнётся в 10.",
    beAff: "Они актёры.",
    beQ: "Они актёры?",
    beN: "Они не актёры.",
    visited: "Они посетили театр.",
    visitedQ: "Они посетили театр?",
    visitedN: "Они не посетили театр.",
    walked: "Каждый день они ходили на работу пешком.",
    walkedQ: "Они ходили на работу пешком каждый день?",
    walkedN: "Они не ходили на работу пешком каждый день.",
    viewed: "Они просмотрели мой профиль в LinkedIn.",
    viewedQ: "Они просмотрели мой профиль в LinkedIn?",
    viewedN: "Они не просмотрели мой профиль в LinkedIn.",
    were: "Они были актёрами.",
    wereQ: "Они были актёрами?",
    wereN: "Они не были актёрами.",
  },
};

/** Fix we/you_all was/were keys */
function ruBePast(p, kind) {
  const row = RU[p];
  if (!row) {
    return "";
  }
  if (p === "we" || p === "you_all" || p === "they") {
    if (kind === "aff") {
      return row.were ?? row.was;
    }
    if (kind === "q") {
      return row.wereQ ?? row.wasQ;
    }
    return row.wereN ?? row.wasN;
  }
  return kind === "aff" ? row.was : kind === "q" ? row.wasQ : row.wasN;
}

function getRu(p, key) {
  const row = RU[p];
  return row ? row[key] ?? "" : "";
}

function presentBeForms(p) {
  if (p === "I") {
    return { aff: "am", q: "Am", neg: "am" };
  }
  if (isThirdPersonSingular(p)) {
    return { aff: "is", q: "Is", neg: "is" };
  }
  return { aff: "are", q: "Are", neg: "are" };
}

function pastBeForms(p) {
  if (p === "we" || p === "you" || p === "you_all" || p === "they") {
    return { aff: "were", q: "Were", neg: "were" };
  }
  return { aff: "was", q: "Was", neg: "was" };
}

/** After to be: we / you (вы) / they → plural noun */
function beActorComplement(p) {
  return p === "we" || p === "you_all" || p === "they" ? "actors" : "an actor";
}

function possessiveForProfile(p) {
  if (p === "I") {
    return "my";
  }
  if (p === "you" || p === "you_all") {
    return "your";
  }
  if (p === "he") {
    return "his";
  }
  if (p === "she") {
    return "her";
  }
  if (p === "it") {
    return "its";
  }
  if (p === "we") {
    return "our";
  }
  if (p === "they") {
    return "their";
  }
  return "my";
}

/** Custom HTML tooltip: main verb after Does stays base (no -s). */
const TIP_VERB_AFTER_DOES = "Без окончания 's/es' потому что does 'украл' его 😏";

let verbQDoesTipIdSeq = 0;

function presentQuestionMainVerbHtml(verbBase, auxQ) {
  if (auxQ !== "Does") {
    return verbBase;
  }
  const tipId = `verb-q-does-tip-${verbQDoesTipIdSeq++}`;
  return `<span class="verb-q-base" tabindex="0" aria-describedby="${tipId}">${escapeHtml(verbBase)}<span class="verb-q-base__tip" id="${tipId}" role="tooltip">${escapeHtml(TIP_VERB_AFTER_DOES)}</span></span>`;
}

/** Custom HTML tooltip: after Did the main verb stays base (no -ed). */
const TIP_VERB_AFTER_DID = "Без окончания -ed, потому что did 'украл' его 😏";

let verbQDidTipIdSeq = 0;

function pastQuestionMainVerbHtml(verbBase, auxQ) {
  if (auxQ !== "Did") {
    return verbBase;
  }
  const tipId = `verb-q-did-tip-${verbQDidTipIdSeq++}`;
  return `<span class="verb-q-base" tabindex="0" aria-describedby="${tipId}">${escapeHtml(verbBase)}<span class="verb-q-base__tip" id="${tipId}" role="tooltip">${escapeHtml(TIP_VERB_AFTER_DID)}</span></span>`;
}

/** Present Simple affirmative: highlight added -s / -es after `base` (e.g. visit→visits). */
function presentAffirmSuffix(base, withEnding) {
  if (!withEnding.startsWith(base)) {
    return withEnding;
  }
  const suffix = withEnding.slice(base.length);
  if (suffix !== "s" && suffix !== "es") {
    return withEnding;
  }
  return `${base}<span class="verb-s">${suffix}</span>`;
}

/** Past Simple affirmative: highlight -ed after base (visit→visited, walk→walked). */
function pastAffirmEdSuffix(base, pastForm) {
  if (!pastForm.startsWith(base) || !pastForm.endsWith("ed")) {
    return pastForm;
  }
  const suffix = pastForm.slice(base.length);
  if (suffix !== "ed") {
    return pastForm;
  }
  return `${base}<span class="verb-ed">${suffix}</span>`;
}

function fixPresentVisitNegativeHtml(p) {
  const auxN = presentAuxNegative(p);
  const subj = subjectDisplay(p);
  return `${subj} <span class="aux">${auxN}</span> not visit the theatre.<br><span class="translation">${getRu(p, "visitN")}</span>`;
}

function updatePresentVisitRow(tr, p) {
  const v = isThirdPersonSingular(p) ? "visits" : "visit";
  const vAff = isThirdPersonSingular(p) ? presentAffirmSuffix("visit", v) : "visit";
  const auxQ = presentAuxQuestion(p);
  const auxN = presentAuxNegative(p);
  const subj = subjectDisplay(p);
  tr.querySelector("[data-col='aff']").innerHTML = `${buildSubjectSelect(p, "present-visit")} ${vAff} the theatre.<br><span class="translation">${getRu(p, "visit")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxQ}</span> ${subj} ${presentQuestionMainVerbHtml("visit", auxQ)} the theatre?<br><span class="translation">${getRu(p, "visitQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = fixPresentVisitNegativeHtml(p);
}

function updatePresentBeRow(tr, p) {
  const subj = subjectDisplay(p);
  const { aff, q, neg } = presentBeForms(p);
  const actor = beActorComplement(p);
  tr.querySelector("[data-col='aff']").innerHTML = `${buildSubjectSelect(p, "present-be")} <span class="be-form">${aff}</span> ${actor}.<br><span class="translation">${getRu(p, "beAff")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="be-form">${q}</span> ${subj} ${actor}?<br><span class="translation">${getRu(p, "beQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `${subj} <span class="be-form">${neg}</span> not ${actor}.<br><span class="translation">${getRu(p, "beN")}</span>`;
}

function updatePresentWaterRow(tr) {
  const auxQ = presentAuxQuestion("it");
  const auxN = presentAuxNegative("it");
  const ru = "it";
  tr.querySelector("[data-col='aff']").innerHTML = `Water ${presentAffirmSuffix("boil", "boils")} at 100 degrees Celsius.<br><span class="translation">${getRu(ru, "boil")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxQ}</span> water ${presentQuestionMainVerbHtml("boil", auxQ)} at 100 degrees Celsius?<br><span class="translation">${getRu(ru, "boilQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `Water <span class="aux">${auxN}</span> not boil at 100 degrees Celsius.<br><span class="translation">${getRu(ru, "boilN")}</span>`;
}

function updatePresentFilmRow(tr) {
  const auxQ = presentAuxQuestion("it");
  const auxN = presentAuxNegative("it");
  const ru = "it";
  tr.querySelector("[data-col='aff']").innerHTML = `The film ${presentAffirmSuffix("start", "starts")} at 10.<br><span class="translation">${getRu(ru, "start")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxQ}</span> the film ${presentQuestionMainVerbHtml("start", auxQ)} at 10?<br><span class="translation">${getRu(ru, "startQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `The film <span class="aux">${auxN}</span> not start at 10.<br><span class="translation">${getRu(ru, "startN")}</span>`;
}

function updatePastVisitedRow(tr, p) {
  const subj = subjectDisplay(p);
  const auxPastQ = pastAuxQuestion();
  tr.querySelector("[data-col='aff']").innerHTML = `${buildSubjectSelect(p, "past-visited")} ${pastAffirmEdSuffix("visit", "visited")} the theatre.<br><span class="translation">${getRu(p, "visited")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxPastQ}</span> ${subj} ${pastQuestionMainVerbHtml("visit", auxPastQ)} the theatre?<br><span class="translation">${getRu(p, "visitedQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `${subj} <span class="aux">${pastAuxNegative()}</span> not visit the theatre.<br><span class="translation">${getRu(p, "visitedN")}</span>`;
}

function updatePastWalkedRow(tr) {
  const p = "I";
  const subj = subjectDisplay(p);
  const auxPastQ = pastAuxQuestion();
  tr.querySelector("[data-col='aff']").innerHTML = `I ${pastAffirmEdSuffix("walk", "walked")} to work every day.<br><span class="translation">${getRu(p, "walked")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxPastQ}</span> ${subj} ${pastQuestionMainVerbHtml("walk", auxPastQ)} to work every day?<br><span class="translation">${getRu(p, "walkedQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `I <span class="aux">${pastAuxNegative()}</span> not walk to work every day.<br><span class="translation">${getRu(p, "walkedN")}</span>`;
}

function updatePastViewedRow(tr) {
  const p = "he";
  const subj = subjectDisplay(p);
  const pos = possessiveForProfile(p);
  const auxPastQ = pastAuxQuestion();
  tr.querySelector("[data-col='aff']").innerHTML = `He ${pastAffirmEdSuffix("view", "viewed")} ${pos} profile on LinkedIn.<br><span class="translation">${getRu(p, "viewed")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxPastQ}</span> ${subj} ${pastQuestionMainVerbHtml("view", auxPastQ)} ${pos} profile on LinkedIn?<br><span class="translation">${getRu(p, "viewedQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `He <span class="aux">${pastAuxNegative()}</span> not view ${pos} profile on LinkedIn.<br><span class="translation">${getRu(p, "viewedN")}</span>`;
}

function updatePastBeRow(tr, p) {
  const subj = subjectDisplay(p);
  const { aff, q, neg } = pastBeForms(p);
  const trAff = ruBePast(p, "aff");
  const trQ = ruBePast(p, "q");
  const trN = ruBePast(p, "neg");
  const actor = beActorComplement(p);
  tr.querySelector("[data-col='aff']").innerHTML = `${buildSubjectSelect(p, "past-be")} <span class="be-form">${aff}</span> ${actor}.<br><span class="translation">${trAff}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="be-form">${q}</span> ${subj} ${actor}?<br><span class="translation">${trQ}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `${subj} <span class="be-form">${neg}</span> not ${actor}.<br><span class="translation">${trN}</span>`;
}

function applyRow(tr, rowId, p) {
  switch (rowId) {
    case "present-visit":
      updatePresentVisitRow(tr, p);
      break;
    case "present-water":
      updatePresentWaterRow(tr);
      break;
    case "present-film":
      updatePresentFilmRow(tr);
      break;
    case "present-be":
      updatePresentBeRow(tr, p);
      break;
    case "past-visited":
      updatePastVisitedRow(tr, p);
      break;
    case "past-walked":
      updatePastWalkedRow(tr);
      break;
    case "past-viewed":
      updatePastViewedRow(tr);
      break;
    case "past-be":
      updatePastBeRow(tr, p);
      break;
    default:
      break;
  }
}

function initInteractiveTables() {
  document.querySelectorAll("tr[data-row-id]").forEach((tr) => {
    const rowId = tr.dataset.rowId;
    const def = tr.dataset.defaultSubject || "I";
    if (rowId) {
      applyRow(tr, rowId, def);
    }
  });

  document.querySelector(".content")?.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLSelectElement) || !target.classList.contains("subject-select")) {
      return;
    }
    const rowId = target.dataset.row;
    if (!rowId) {
      return;
    }
    const tr = target.closest("tr");
    if (!tr) {
      return;
    }
    applyRow(tr, rowId, target.value);
  });
}

const QUIZ_OK = "Верно!";
const QUIZ_BAD = "Пока неверно — загляните в таблицу выше.";

/** Сколько вопросов показывать из пула при каждой загрузке страницы */
const QUIZ_RANDOM_COUNT = 8;

/**
 * @typedef {{ stem: string, translation: string, correct: "a" | "b" | "c", labels: Record<"a" | "b" | "c", string> }} QuizPoolItem
 */

/** Present Simple: 50 вопросов (простая лексика: семья, национальности, профессии, сумка, интернационализмы). */
const QUIZ_POOL_PRESENT = /** @type {QuizPoolItem[]} */ ([
  { stem: "My sister ___ a student.", translation: "Моя сестра — студентка.", correct: "b", labels: { a: "am", b: "is", c: "are" } },
  { stem: "My parents ___ from Spain.", translation: "Мои родители из Испании.", correct: "c", labels: { a: "is", b: "am", c: "are" } },
  { stem: "___ your brother a doctor?", translation: "Твой брат — врач?", correct: "a", labels: { a: "Is", b: "Are", c: "Do" } },
  { stem: "My mother always ___ her keys in her bag.", translation: "Мама всегда кладёт ключи в сумку.", correct: "b", labels: { a: "put", b: "puts", c: "putting" } },
  { stem: "___ you have a pen in your bag?", translation: "У тебя в сумке есть ручка?", correct: "a", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "Where ___ your phone now?", translation: "Где сейчас твой телефон?", correct: "a", labels: { a: "is", b: "are", c: "do" } },
  { stem: "Water ___ at 100°C.", translation: "Вода закипает при 100 °C.", correct: "c", labels: { a: "boil", b: "boiling", c: "boils" } },
  { stem: "___ it rain here often?", translation: "Здесь часто идёт дождь?", correct: "b", labels: { a: "Do", b: "Does", c: "Is" } },
  { stem: "I ___ like tea, but my husband ___.", translation: "Я не люблю чай, а мой муж любит.", correct: "c", labels: { a: "don't / don't", b: "doesn't / do", c: "don't / does" } },
  { stem: "The cafe ___ at 8 a.m. every day.", translation: "Кафе открывается в 8 утра каждый день.", correct: "b", labels: { a: "open", b: "opens", c: "opened" } },
  { stem: "My cousin ___ Italian.", translation: "Мой двоюродный брат / сестра итальянец / итальянка.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "We ___ not from France.", translation: "Мы не из Франции.", correct: "b", labels: { a: "is", b: "are", c: "am" } },
  { stem: "___ your grandparents live in this city?", translation: "Твои бабушка и дедушка живут в этом городе?", correct: "a", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "He ___ not work in a bank.", translation: "Он не работает в банке.", correct: "c", labels: { a: "don't", b: "is", c: "doesn't" } },
  { stem: "You and I ___ good friends.", translation: "Ты и я — хорошие друзья.", correct: "c", labels: { a: "is", b: "am", c: "are" } },
  { stem: "My uncle ___ a taxi driver.", translation: "Мой дядя — таксист.", correct: "b", labels: { a: "are", b: "is", c: "am" } },
  { stem: "___ she speak English?", translation: "Она говорит по-английски?", correct: "b", labels: { a: "Do", b: "Does", c: "Is" } },
  { stem: "The bus ___ at this stop every hour.", translation: "Автобус останавливается на этой остановке каждый час.", correct: "c", labels: { a: "stop", b: "stopping", c: "stops" } },
  { stem: "My daughter ___ a student.", translation: "Моя дочь — студентка.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "They ___ Canadian.", translation: "Они канадцы.", correct: "b", labels: { a: "is", b: "are", c: "am" } },
  { stem: "___ there an airport in your city?", translation: "В твоём городе есть аэропорт?", correct: "a", labels: { a: "Is", b: "Are", c: "Do" } },
  { stem: "My wife ___ not like coffee.", translation: "Моя жена не любит кофе.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "I always ___ an umbrella in my bag.", translation: "Я всегда ношу в сумке зонт.", correct: "a", labels: { a: "have", b: "has", c: "having" } },
  { stem: "She ___ her passport with her.", translation: "Она носит с собой паспорт.", correct: "b", labels: { a: "carry", b: "carries", c: "carrying" } },
  { stem: "___ we need tickets for the train?", translation: "Нам нужны билеты на поезд?", correct: "a", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "My aunt ___ in a hospital.", translation: "Моя тётя работает в больнице.", correct: "c", labels: { a: "work", b: "working", c: "works" } },
  { stem: "___ your father from Japan?", translation: "Твой отец из Японии?", correct: "b", labels: { a: "Are", b: "Is", c: "Do" } },
  { stem: "The children ___ tired after school.", translation: "Дети устали после школы.", correct: "c", labels: { a: "is", b: "am", c: "are" } },
  { stem: "How much ___ this computer cost?", translation: "Сколько стоит этот компьютер?", correct: "b", labels: { a: "do", b: "does", c: "is" } },
  { stem: "My brother ___ not have a car.", translation: "У моего брата нет машины.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "We ___ the bus to school.", translation: "Мы ездим в школу на автобусе.", correct: "a", labels: { a: "take", b: "takes", c: "taking" } },
  { stem: "___ you both students?", translation: "Вы оба студенты?", correct: "b", labels: { a: "Is", b: "Are", c: "Do" } },
  { stem: "My boyfriend ___ from Mexico.", translation: "Мой парень из Мексики.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "It ___ not cost much.", translation: "Это недорого стоит.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "My grandparents ___ very kind.", translation: "Мои бабушка и дедушка очень добрые.", correct: "b", labels: { a: "is", b: "are", c: "am" } },
  { stem: "She ___ a photo of her family in her wallet.", translation: "В кошельке у неё фото семьи.", correct: "c", labels: { a: "have", b: "having", c: "has" } },
  { stem: "___ he have your phone number?", translation: "У него есть твой номер телефона?", correct: "c", labels: { a: "Do", b: "Is", c: "Does" } },
  { stem: "I ___ a teacher, and my sister ___ a doctor.", translation: "Я учитель, а моя сестра — врач.", correct: "a", labels: { a: "am / is", b: "is / am", c: "are / is" } },
  { stem: "The office ___ at 6 p.m.", translation: "Офис закрывается в 18:00.", correct: "c", labels: { a: "close", b: "closing", c: "closes" } },
  { stem: "___ they at home now?", translation: "Они сейчас дома?", correct: "c", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "My son ___ the piano at school.", translation: "Мой сын играет на пианино в школе.", correct: "b", labels: { a: "play", b: "plays", c: "playing" } },
  { stem: "My cousin ___ in Berlin.", translation: "Мой двоюродный брат / сестра живёт в Берлине.", correct: "a", labels: { a: "lives", b: "live", c: "living" } },
  { stem: "We ___ not watch TV every day.", translation: "Мы не смотрим телевизор каждый день.", correct: "a", labels: { a: "don't", b: "doesn't", c: "aren't" } },
  { stem: "___ your mother work in a bank?", translation: "Твоя мама работает в банке?", correct: "b", labels: { a: "Do", b: "Does", c: "Is" } },
  { stem: "He ___ a key in his pocket.", translation: "У него в кармане ключ.", correct: "b", labels: { a: "have", b: "has", c: "having" } },
  { stem: "The hotel ___ near the station.", translation: "Отель рядом с вокзалом.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "My sister ___ not drive a taxi.", translation: "Моя сестра не водит такси.", correct: "c", labels: { a: "don't", b: "isn't", c: "doesn't" } },
  { stem: "My husband ___ his ticket in his jacket.", translation: "Муж кладёт билет в пиджак.", correct: "b", labels: { a: "keep", b: "keeps", c: "keeping" } },
  { stem: "___ your sister and brother at school?", translation: "Твоя сестра и брат в школе?", correct: "a", labels: { a: "Are", b: "Is", c: "Do" } },
  { stem: "The film ___ at 9 p.m. at the cinema.", translation: "Фильм начинается в 21:00 в кино.", correct: "c", labels: { a: "start", b: "starting", c: "starts" } },
]);

/** Past Simple: 50 вопросов. */
const QUIZ_POOL_PAST = /** @type {QuizPoolItem[]} */ ([
  { stem: "Yesterday my sister ___ a new phone.", translation: "Вчера сестра купила новый телефон.", correct: "c", labels: { a: "buy", b: "buys", c: "bought" } },
  { stem: "Last year we ___ in Paris.", translation: "В прошлом году мы были в Париже.", correct: "b", labels: { a: "was", b: "were", c: "are" } },
  { stem: "He ___ his keys in the taxi.", translation: "Он оставил ключи в такси.", correct: "a", labels: { a: "left", b: "leave", c: "leaves" } },
  { stem: "___ your father call you last night?", translation: "Позвонил ли тебе отец вчера вечером?", correct: "c", labels: { a: "Was", b: "Does", c: "Did" } },
  { stem: "She ___ not come to the cafe.", translation: "Она не пришла в кафе.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "In 2020 my cousin ___ a student.", translation: "В 2020 году мой двоюродный брат / сестра был / была студентом / студенткой.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "We ___ to the station by bus.", translation: "Мы поехали на вокзал на автобусе.", correct: "c", labels: { a: "go", b: "goes", c: "went" } },
  { stem: "I ___ my wallet on the table.", translation: "Я положил(а) кошелёк на стол.", correct: "b", labels: { a: "place", b: "placed", c: "places" } },
  { stem: "They ___ pizza at a restaurant.", translation: "Они заказали пиццу в ресторане.", correct: "a", labels: { a: "ordered", b: "order", c: "orders" } },
  { stem: "Last night the children ___ very tired.", translation: "Вчера вечером дети очень устали.", correct: "c", labels: { a: "was", b: "is", c: "were" } },
  { stem: "___ you have your ticket yesterday?", translation: "У тебя вчера был билет?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "My parents ___ from Italy in 1999.", translation: "Мои родители из Италии (переехали) в 1999.", correct: "b", labels: { a: "was", b: "were", c: "are" } },
  { stem: "He ___ not buy the computer.", translation: "Он не купил компьютер.", correct: "c", labels: { a: "don't", b: "doesn't", c: "didn't" } },
  { stem: "Yesterday I ___ my brother at the station.", translation: "Вчера я встретил(а) брата на вокзале.", correct: "a", labels: { a: "met", b: "meet", c: "meets" } },
  { stem: "She ___ a taxi to the hotel.", translation: "Она взяла такси до отеля.", correct: "b", labels: { a: "take", b: "took", c: "takes" } },
  { stem: "Last summer he ___ a tourist in Spain.", translation: "Прошлым летом он был туристом в Испании.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "We ___ photos in the park.", translation: "Мы сделали фото в парке.", correct: "c", labels: { a: "take", b: "takes", c: "took" } },
  { stem: "He ___ his bag in the cafe.", translation: "Он забыл сумку в кафе.", correct: "a", labels: { a: "forgot", b: "forget", c: "forgets" } },
  { stem: "My aunt ___ us a story.", translation: "Тётя рассказала нам историю.", correct: "b", labels: { a: "tell", b: "told", c: "tells" } },
  { stem: "They ___ not visit the museum.", translation: "Они не посетили музей.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "In 2018 I ___ a nurse.", translation: "В 2018 году я была медсестрой / я был медбратом.", correct: "b", labels: { a: "were", b: "was", c: "am" } },
  { stem: "My grandfather ___ a driver.", translation: "Дедушка был водителем.", correct: "c", labels: { a: "were", b: "are", c: "was" } },
  { stem: "___ she live in London last year?", translation: "Она жила в Лондоне в прошлом году?", correct: "b", labels: { a: "Does", b: "Did", c: "Was" } },
  { stem: "The train ___ late yesterday.", translation: "Вчера поезд опоздал.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "I ___ not see your pen.", translation: "Я не видел(а) твою ручку.", correct: "c", labels: { a: "don't", b: "doesn't", c: "didn't" } },
  { stem: "She ___ water for her family.", translation: "Она купила воду для семьи.", correct: "a", labels: { a: "bought", b: "buy", c: "buys" } },
  { stem: "We ___ not go to the bank.", translation: "Мы не пошли в банк.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "My uncle ___ us to his office.", translation: "Дядя отвёз нас в свой офис.", correct: "c", labels: { a: "take", b: "takes", c: "took" } },
  { stem: "Yesterday you ___ at home.", translation: "Вчера ты был(а) / вы были дома.", correct: "b", labels: { a: "was", b: "were", c: "are" } },
  { stem: "My daughter ___ her homework last night.", translation: "Дочь сделала домашнее задание вчера вечером.", correct: "a", labels: { a: "did", b: "do", c: "does" } },
  { stem: "He ___ a letter to his mother.", translation: "Он написал письмо маме.", correct: "c", labels: { a: "write", b: "writes", c: "wrote" } },
  { stem: "___ they work in Berlin in 2015?", translation: "Они работали в Берлине в 2015?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "I ___ my English book on the bus.", translation: "Я потерял(а) учебник английского в автобусе.", correct: "b", labels: { a: "lose", b: "lost", c: "loses" } },
  { stem: "She ___ not answer my call.", translation: "Она не ответила на мой звонок.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "Ten years ago my parents ___ teachers.", translation: "Десять лет назад родители были учителями.", correct: "c", labels: { a: "was", b: "is", c: "were" } },
  { stem: "Last week my cousin ___ from Canada.", translation: "На прошлой неделе двоюродный брат / сестра приехал(а) из Канады.", correct: "a", labels: { a: "came", b: "come", c: "comes" } },
  { stem: "He ___ me about his family.", translation: "Он рассказал мне о своей семье.", correct: "c", labels: { a: "tell", b: "tells", c: "told" } },
  { stem: "I ___ not know his name.", translation: "Я не знал(а) его имя.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "My sister ___ a nurse in 2010.", translation: "В 2010 сестра была медсестрой.", correct: "b", labels: { a: "were", b: "was", c: "are" } },
  { stem: "___ he feel tired yesterday?", translation: "Вчера он чувствовал усталость?", correct: "c", labels: { a: "Was", b: "Does", c: "Did" } },
  { stem: "We ___ the wrong bus.", translation: "Мы сели не на тот автобус.", correct: "a", labels: { a: "took", b: "take", c: "takes" } },
  { stem: "She ___ her phone in her bag.", translation: "Она положила телефон в сумку.", correct: "b", labels: { a: "putted", b: "put", c: "puts" } },
  { stem: "Yesterday the traffic ___ terrible.", translation: "Вчера на дороге было ужасно (пробки).", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "My boyfriend ___ me a photo.", translation: "Парень прислал мне фото.", correct: "c", labels: { a: "send", b: "sends", c: "sent" } },
  { stem: "I ___ up early last Monday.", translation: "В прошлый понедельник я рано встал(а).", correct: "b", labels: { a: "get", b: "got", c: "gets" } },
  { stem: "They ___ not find their keys.", translation: "Они не нашли свои ключи.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "Last year I ___ a student.", translation: "В прошлом году я был(а) студентом / студенткой.", correct: "b", labels: { a: "were", b: "was", c: "am" } },
  { stem: "My grandmother ___ us at the airport.", translation: "Бабушка встретила нас в аэропорту.", correct: "c", labels: { a: "meet", b: "meets", c: "met" } },
  { stem: "He ___ his charger in the office.", translation: "Он оставил зарядку в офисе.", correct: "a", labels: { a: "left", b: "leave", c: "leaves" } },
  { stem: "___ your parents live in Rome two years ago?", translation: "Жили ли родители в Риме два года назад?", correct: "b", labels: { a: "Do", b: "Did", c: "Were" } },
]);

const QUIZ_POOLS = {
  present: QUIZ_POOL_PRESENT,
  past: QUIZ_POOL_PAST,
};

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandomQuizItems(pool, count) {
  if (pool.length <= count) {
    return shuffleArray(pool);
  }
  return shuffleArray(pool).slice(0, count);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {HTMLElement} container
 * @param {QuizPoolItem[]} items
 * @param {string} namePrefix уникальный префикс для name у radio (одна сессия страницы)
 */
function renderQuizBlock(container, items, namePrefix) {
  const html = items
    .map((q, i) => {
      const name = `${namePrefix}-${i}`;
      const opts = (["a", "b", "c"]).map(
        (key) =>
          `<label class="quiz-option"><input type="radio" name="${escapeHtml(name)}" value="${key}">${escapeHtml(q.labels[key])}</label>`
      );
      return `<div class="quiz-question" data-correct="${q.correct}">
        <p class="quiz-stem">${i + 1}. ${escapeHtml(q.stem)}</p>
        <p class="translation">${escapeHtml(q.translation)}</p>
        <div class="quiz-options">${opts.join("")}</div>
        <p class="quiz-feedback" hidden></p>
      </div>`;
    })
    .join("");
  container.innerHTML = html;
}

function fillRandomQuizBlocks() {
  const sessionId = Math.random().toString(36).slice(2, 10);
  document.querySelectorAll(".quiz-block[data-quiz]").forEach((el) => {
    const key = el.dataset.quiz;
    if (key !== "present" && key !== "past") {
      return;
    }
    const pool = QUIZ_POOLS[key];
    if (!pool || pool.length === 0) {
      return;
    }
    const picked = pickRandomQuizItems(pool, QUIZ_RANDOM_COUNT);
    renderQuizBlock(el, picked, `quiz-${key}-${sessionId}`);
  });
}

function bindQuizQuestion(block) {
  const correct = block.dataset.correct;
  if (!correct) {
    return;
  }
  const feedback = block.querySelector(".quiz-feedback");
  block.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      block.classList.remove("quiz-ok", "quiz-bad");
      const ok = radio.value === correct;
      block.classList.add(ok ? "quiz-ok" : "quiz-bad");
      if (feedback) {
        feedback.textContent = ok ? QUIZ_OK : QUIZ_BAD;
        feedback.hidden = false;
      }
    });
  });
}

function initQuizzes() {
  fillRandomQuizBlocks();
  document.querySelectorAll(".quiz-question").forEach(bindQuizQuestion);
}

document.addEventListener("DOMContentLoaded", () => {
  initInteractiveTables();
  initQuizzes();
});
