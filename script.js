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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
    beAff: "Это актёр.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
    start: "Фильм начнётся в 10.",
    startQ: "Фильм начнётся в 10?",
    startN: "Фильм не начнётся в 10.",
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
  const auxPastQ = pastAuxQuestion();
  tr.querySelector("[data-col='aff']").innerHTML = `He ${pastAffirmEdSuffix("view", "viewed")} my profile on LinkedIn.<br><span class="translation">${getRu(p, "viewed")}</span>`;
  tr.querySelector("[data-col='q']").innerHTML = `<span class="aux">${auxPastQ}</span> ${subj} ${pastQuestionMainVerbHtml("view", auxPastQ)} my profile on LinkedIn?<br><span class="translation">${getRu(p, "viewedQ")}</span>`;
  tr.querySelector("[data-col='neg']").innerHTML = `He <span class="aux">${pastAuxNegative()}</span> not view my profile on LinkedIn.<br><span class="translation">${getRu(p, "viewedN")}</span>`;
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

/** Сколько вопросов добавлять по кнопке «Ещё!» */
const QUIZ_MORE_COUNT = 4;

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
  { stem: "He ___ (-) work in a bank.", translation: "Он не работает в банке.", correct: "c", labels: { a: "don't", b: "is", c: "doesn't" } },
  { stem: "You and I ___ good friends.", translation: "Ты и я — хорошие друзья.", correct: "c", labels: { a: "is", b: "am", c: "are" } },
  { stem: "My uncle ___ a taxi driver.", translation: "Мой дядя — таксист.", correct: "b", labels: { a: "are", b: "is", c: "am" } },
  { stem: "___ she speak English?", translation: "Она говорит по-английски?", correct: "b", labels: { a: "Do", b: "Does", c: "Is" } },
  { stem: "The bus ___ at this stop every hour.", translation: "Автобус останавливается на этой остановке каждый час.", correct: "c", labels: { a: "stop", b: "stopping", c: "stops" } },
  { stem: "My daughter ___ a student.", translation: "Моя дочь — студентка.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "They ___ Canadian.", translation: "Они канадцы.", correct: "b", labels: { a: "is", b: "are", c: "am" } },
  { stem: "___ there an airport in your city?", translation: "В твоём городе есть аэропорт?", correct: "a", labels: { a: "Is", b: "Are", c: "Do" } },
  { stem: "My wife ___ (-) like coffee.", translation: "Моя жена не любит кофе.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "I always ___ an umbrella in my bag.", translation: "Я всегда ношу в сумке зонт.", correct: "a", labels: { a: "have", b: "has", c: "having" } },
  { stem: "She ___ her passport with her.", translation: "Она носит с собой паспорт.", correct: "b", labels: { a: "carry", b: "carries", c: "carrying" } },
  { stem: "___ we need tickets for the train?", translation: "Нам нужны билеты на поезд?", correct: "a", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "My aunt ___ in a hospital.", translation: "Моя тётя работает в больнице.", correct: "c", labels: { a: "work", b: "working", c: "works" } },
  { stem: "___ your father from Japan?", translation: "Твой отец из Японии?", correct: "b", labels: { a: "Are", b: "Is", c: "Do" } },
  { stem: "The children ___ tired after school.", translation: "Дети устали после школы.", correct: "c", labels: { a: "is", b: "am", c: "are" } },
  { stem: "How much ___ this computer cost?", translation: "Сколько стоит этот компьютер?", correct: "b", labels: { a: "do", b: "does", c: "is" } },
  { stem: "My brother ___ (-) have a car.", translation: "У моего брата нет машины.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "We ___ the bus to school.", translation: "Мы ездим в школу на автобусе.", correct: "a", labels: { a: "take", b: "takes", c: "taking" } },
  { stem: "___ you both students?", translation: "Вы оба студенты?", correct: "b", labels: { a: "Is", b: "Are", c: "Do" } },
  { stem: "My boyfriend ___ from Mexico.", translation: "Мой парень из Мексики.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "It ___ (-) cost much.", translation: "Это недорого стоит.", correct: "b", labels: { a: "don't", b: "doesn't", c: "isn't" } },
  { stem: "My grandparents ___ very kind.", translation: "Мои бабушка и дедушка очень добрые.", correct: "b", labels: { a: "is", b: "are", c: "am" } },
  { stem: "She ___ a photo of her family in her wallet.", translation: "В кошельке у неё фото семьи.", correct: "c", labels: { a: "have", b: "having", c: "has" } },
  { stem: "___ he have your phone number?", translation: "У него есть твой номер телефона?", correct: "c", labels: { a: "Do", b: "Is", c: "Does" } },
  { stem: "I ___ a teacher, and my sister ___ a doctor.", translation: "Я учитель, а моя сестра — врач.", correct: "a", labels: { a: "am / is", b: "is / am", c: "are / is" } },
  { stem: "The office ___ at 6 p.m.", translation: "Офис закрывается в 18:00.", correct: "c", labels: { a: "close", b: "closing", c: "closes" } },
  { stem: "___ they at home now?", translation: "Они сейчас дома?", correct: "c", labels: { a: "Do", b: "Does", c: "Are" } },
  { stem: "My son ___ the piano at school.", translation: "Мой сын играет на пианино в школе.", correct: "b", labels: { a: "play", b: "plays", c: "playing" } },
  { stem: "My cousin ___ in Berlin.", translation: "Мой двоюродный брат / сестра живёт в Берлине.", correct: "a", labels: { a: "lives", b: "live", c: "living" } },
  { stem: "We ___ (-) watch TV every day.", translation: "Мы не смотрим телевизор каждый день.", correct: "a", labels: { a: "don't", b: "doesn't", c: "aren't" } },
  { stem: "___ your mother work in a bank?", translation: "Твоя мама работает в банке?", correct: "b", labels: { a: "Do", b: "Does", c: "Is" } },
  { stem: "He ___ a key in his pocket.", translation: "У него в кармане ключ.", correct: "b", labels: { a: "have", b: "has", c: "having" } },
  { stem: "The hotel ___ near the station.", translation: "Отель рядом с вокзалом.", correct: "a", labels: { a: "is", b: "are", c: "am" } },
  { stem: "My sister ___ (-) drive a taxi.", translation: "Моя сестра не водит такси.", correct: "c", labels: { a: "don't", b: "isn't", c: "doesn't" } },
  { stem: "My husband ___ his ticket in his jacket.", translation: "Муж кладёт билет в пиджак.", correct: "b", labels: { a: "keep", b: "keeps", c: "keeping" } },
  { stem: "___ your sister and brother at school?", translation: "Твоя сестра и брат в школе?", correct: "a", labels: { a: "Are", b: "Is", c: "Do" } },
  { stem: "The film ___ at 9 p.m. at the cinema.", translation: "Фильм начинается в 21:00 в кино.", correct: "c", labels: { a: "start", b: "starting", c: "starts" } },
]);

/** Past Simple (без неправильных глаголов, кроме was/were и wasn't/weren't). */
const QUIZ_POOL_PAST = /** @type {QuizPoolItem[]} */ ([
  { stem: "Last year we ___ in Paris.", translation: "В прошлом году мы были в Париже.", correct: "b", labels: { a: "was", b: "were", c: "are" } },
  { stem: "___ your father call you last night?", translation: "Позвонил ли тебе отец вчера вечером?", correct: "c", labels: { a: "Was", b: "Does", c: "Did" } },
  { stem: "She ___ (-) come to the cafe.", translation: "Она не пришла в кафе.", correct: "b", labels: { a: "wasn't", b: "didn't", c: "doesn't" } },
  { stem: "In 2020 my cousin ___ a student.", translation: "В 2020 году мой двоюродный брат / сестра был / была студентом / студенткой.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "I ___ my wallet on the table.", translation: "Я положил(а) кошелёк на стол.", correct: "b", labels: { a: "place", b: "placed", c: "places" } },
  { stem: "They ___ pizza at a restaurant.", translation: "Они заказали пиццу в ресторане.", correct: "a", labels: { a: "ordered", b: "order", c: "orders" } },
  { stem: "Last night the children ___ very tired.", translation: "Вчера вечером дети очень устали.", correct: "c", labels: { a: "was", b: "is", c: "were" } },
  { stem: "___ you have your ticket yesterday?", translation: "У тебя вчера был билет?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "He ___ (-) buy the computer.", translation: "Он не купил компьютер.", correct: "c", labels: { a: "don't", b: "wasn't", c: "didn't" } },
  { stem: "Last summer he ___ a tourist in Spain.", translation: "Прошлым летом он был туристом в Испании.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "They ___ (-) visit the museum.", translation: "Они не посетили музей.", correct: "a", labels: { a: "didn't", b: "don't", c: "weren't" } },
  { stem: "In 2018 I ___ a nurse.", translation: "В 2018 году я была медсестрой / я был медбратом.", correct: "b", labels: { a: "were", b: "was", c: "am" } },
  { stem: "My grandfather ___ a driver.", translation: "Дедушка был водителем.", correct: "c", labels: { a: "were", b: "are", c: "was" } },
  { stem: "___ she live in London last year?", translation: "Она жила в Лондоне в прошлом году?", correct: "b", labels: { a: "Does", b: "Did", c: "Was" } },
  { stem: "The train ___ late yesterday.", translation: "Вчера поезд опоздал.", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "I ___ (-) see your pen.", translation: "Я не видел(а) твою ручку.", correct: "c", labels: { a: "don't", b: "doesn't", c: "didn't" } },
  { stem: "We ___ (-) go to the bank.", translation: "Мы не пошли в банк.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "Yesterday you ___ at home.", translation: "Вчера ты был(а) / вы были дома.", correct: "b", labels: { a: "was", b: "were", c: "are" } },
  { stem: "___ they work in Berlin in 2015?", translation: "Они работали в Берлине в 2015?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "She ___ (-) answer my call.", translation: "Она не ответила на мой звонок.", correct: "b", labels: { a: "don't", b: "didn't", c: "wasn't" } },
  { stem: "Ten years ago my parents ___ teachers.", translation: "Десять лет назад родители были учителями.", correct: "c", labels: { a: "was", b: "is", c: "were" } },
  { stem: "I ___ (-) know his name.", translation: "Я не знал(а) его имя.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "My sister ___ a nurse in 2010.", translation: "В 2010 сестра была медсестрой.", correct: "b", labels: { a: "were", b: "was", c: "are" } },
  { stem: "___ he feel tired yesterday?", translation: "Вчера он чувствовал усталость?", correct: "c", labels: { a: "Was", b: "Does", c: "Did" } },
  { stem: "Yesterday the traffic ___ terrible.", translation: "Вчера на дороге было ужасно (пробки).", correct: "a", labels: { a: "was", b: "were", c: "is" } },
  { stem: "They ___ (-) find their keys.", translation: "Они не нашли свои ключи.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "Last year I ___ a student.", translation: "В прошлом году я был(а) студентом / студенткой.", correct: "b", labels: { a: "were", b: "was", c: "am" } },
  { stem: "___ your parents live in Rome two years ago?", translation: "Жили ли родители в Риме два года назад?", correct: "b", labels: { a: "Do", b: "Did", c: "Were" } },
  { stem: "Yesterday I ___ five kilometres in the park.", translation: "Вчера я прошёл / прошла пять километров в парке.", correct: "c", labels: { a: "walk", b: "walks", c: "walked" } },
  { stem: "She ___ dinner for her family last night.", translation: "Вчера вечером она приготовила ужин для семьи.", correct: "a", labels: { a: "cooked", b: "cook", c: "cooks" } },
  { stem: "Last month my aunt ___ in a small cafe.", translation: "В прошлом месяце тётя работала в маленьком кафе.", correct: "b", labels: { a: "work", b: "worked", c: "works" } },
  { stem: "My grandmother ___ a warm scarf last winter.", translation: "Прошлой зимой бабушка сшила тёплый шарф.", correct: "c", labels: { a: "sew", b: "sews", c: "sewed" } },
  { stem: "On Saturday they ___ in the hills.", translation: "В субботу они ходили в поход в холмах.", correct: "a", labels: { a: "hiked", b: "hike", c: "hikes" } },
  { stem: "She ___ a small star on her bag.", translation: "Она вышила маленькую звёздочку на сумке.", correct: "b", labels: { a: "embroider", b: "embroidered", c: "embroiders" } },
  { stem: "___ you watch the cartoon yesterday?", translation: "Ты вчера смотрел мультфильм?", correct: "c", labels: { a: "Was", b: "Do", c: "Did" } },
  { stem: "We ___ the kitchen on Sunday morning.", translation: "В воскресенье утром мы убрали кухню.", correct: "a", labels: { a: "cleaned", b: "clean", c: "cleans" } },
  { stem: "He ___ English for an hour after school.", translation: "После школы он занимался английским час.", correct: "c", labels: { a: "study", b: "studies", c: "studied" } },
  { stem: "They ___ a simple song in class.", translation: "На уроке они выучили простую песню.", correct: "b", labels: { a: "learn", b: "learned", c: "learns" } },
  { stem: "I ___ my homework before dinner.", translation: "Я закончил(а) домашнее задание до ужина.", correct: "a", labels: { a: "finished", b: "finish", c: "finishes" } },
  { stem: "The shop ___ at 8 a.m. yesterday.", translation: "Вчера магазин открылся в 8 утра.", correct: "b", labels: { a: "open", b: "opened", c: "opens" } },
  { stem: "She ___ her room green last year.", translation: "В прошлом году она покрасила комнату в зелёный.", correct: "c", labels: { a: "paint", b: "paints", c: "painted" } },
  { stem: "My brother ___ football with his friends.", translation: "Брат поиграл в футбол с друзьями.", correct: "a", labels: { a: "played", b: "play", c: "plays" } },
  { stem: "We ___ a short film at home.", translation: "Мы посмотрели дома короткий фильм.", correct: "c", labels: { a: "watch", b: "watches", c: "watched" } },
  { stem: "I ___ fifteen minutes for the bus.", translation: "Я ждал(а) автобус пятнадцать минут.", correct: "b", labels: { a: "wait", b: "waited", c: "waits" } },
  { stem: "They ___ the sentences from the board.", translation: "Они переписали предложения с доски.", correct: "a", labels: { a: "copied", b: "copy", c: "copies" } },
  { stem: "My cousin ___ to the coast by train.", translation: "Двоюродный брат / сестра ездил(а) на побережье на поезде.", correct: "c", labels: { a: "travel", b: "travels", c: "traveled" } },
  { stem: "It ___ all afternoon last Saturday.", translation: "В прошлую субботу дождь шёл весь день.", correct: "b", labels: { a: "rain", b: "rained", c: "rains" } },
  { stem: "I ___ my hands before lunch.", translation: "Я вымыл(а) руки перед обедом.", correct: "a", labels: { a: "washed", b: "wash", c: "washes" } },
  { stem: "We ___ a table for four people.", translation: "Мы забронировали столик на четверых.", correct: "c", labels: { a: "book", b: "books", c: "booked" } },
  { stem: "He ___ the door and went to bed.", translation: "Он закрыл дверь и пошёл спать.", correct: "b", labels: { a: "close", b: "closed", c: "closes" } },
  { stem: "She ___ the chairs into the garden.", translation: "Она вынесла стулья в сад.", correct: "a", labels: { a: "carried", b: "carry", c: "carries" } },
  { stem: "___ your sister help you yesterday?", translation: "Сестра вчера тебе помогла?", correct: "c", labels: { a: "Does", b: "Was", c: "Did" } },
  { stem: "I ___ (-) finish the letter.", translation: "Я не закончил(а) письмо.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "They ___ at school after the lesson.", translation: "После урока они остались в школе.", correct: "c", labels: { a: "stay", b: "stays", c: "stayed" } },
  { stem: "My uncle ___ the fence white.", translation: "Дядя покрасил забор в белый.", correct: "a", labels: { a: "painted", b: "paint", c: "paints" } },
  { stem: "She ___ her aunt in Warsaw.", translation: "Она навестила тётю в Варшаве.", correct: "b", labels: { a: "visit", b: "visited", c: "visits" } },
  { stem: "The dog ___ over the low wall.", translation: "Собака перепрыгнула через низкую стенку.", correct: "c", labels: { a: "jump", b: "jumps", c: "jumped" } },
  { stem: "I ___ (-) want juice.", translation: "Я не хотел(а) сок.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "___ it snow here yesterday?", translation: "Вчера здесь шёл снег?", correct: "b", labels: { a: "Was", b: "Did", c: "Does" } },
  { stem: "We ___ for the English test.", translation: "Мы готовились к тесту по английскому.", correct: "a", labels: { a: "studied", b: "study", c: "studies" } },
  { stem: "They ___ pasta and salad.", translation: "Они приготовили пасту и салат.", correct: "c", labels: { a: "cook", b: "cooks", c: "cooked" } },
  { stem: "I ___ the floor in my room.", translation: "Я вымыл(а) пол в своей комнате.", correct: "b", labels: { a: "clean", b: "cleaned", c: "cleans" } },
  { stem: "My sister ___ a dress for the party.", translation: "Сестра сшила платье для вечеринки.", correct: "a", labels: { a: "sewed", b: "sew", c: "sews" } },
  { stem: "I ___ to a podcast on the bus.", translation: "В автобусе я слушал(а) подкаст.", correct: "c", labels: { a: "listen", b: "listens", c: "listened" } },
  { stem: "She ___ a cat in her notebook.", translation: "Она нарисовала кошку в тетради (красками).", correct: "b", labels: { a: "paint", b: "painted", c: "paints" } },
  { stem: "___ you enjoy the picnic?", translation: "Тебе понравился пикник?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "He ___ the guitar for twenty minutes.", translation: "Он двадцать минут играл на гитаре (упражнялся).", correct: "c", labels: { a: "practice", b: "practices", c: "practiced" } },
  { stem: "We ___ (-) ask the guide.", translation: "Мы не спросили экскурсовода.", correct: "c", labels: { a: "don't", b: "doesn't", c: "didn't" } },
  { stem: "The lesson ___ at nine o'clock.", translation: "Урок начался в девять.", correct: "a", labels: { a: "started", b: "start", c: "starts" } },
  { stem: "I ___ home before the rain.", translation: "Я пришёл(пришла) домой до дождя.", correct: "b", labels: { a: "arrive", b: "arrived", c: "arrives" } },
  { stem: "They ___ train tickets online.", translation: "Они купили билеты на поезд онлайн (забронировали).", correct: "a", labels: { a: "booked", b: "book", c: "books" } },
  { stem: "She ___ bread for breakfast.", translation: "Она поджарила хлеб на завтрак.", correct: "c", labels: { a: "toast", b: "toasts", c: "toasted" } },
  { stem: "My father ___ until eight yesterday.", translation: "Вчера отец работал до восьми.", correct: "b", labels: { a: "work", b: "worked", c: "works" } },
  { stem: "___ she clean her room on Saturday?", translation: "Она убрала комнату в субботу?", correct: "c", labels: { a: "Is", b: "Does", c: "Did" } },
  { stem: "We ___ to the lake with our cousins.", translation: "Мы дошли до озера с двоюродными братьями / сёстрами.", correct: "a", labels: { a: "walked", b: "walk", c: "walks" } },
  { stem: "The children ___ in the garden.", translation: "Дети поиграли в саду.", correct: "c", labels: { a: "play", b: "plays", c: "played" } },
  { stem: "I ___ (-) wash the car.", translation: "Я не помыл(а) машину.", correct: "b", labels: { a: "don't", b: "didn't", c: "doesn't" } },
  { stem: "He ___ his tent by the lake.", translation: "Он поставил палатку у озера.", correct: "a", labels: { a: "pitched", b: "pitch", c: "pitches" } },
  { stem: "She ___ warm boots for the trip.", translation: "Ей понадобились тёплые ботинки в поездку.", correct: "c", labels: { a: "need", b: "needs", c: "needed" } },
  { stem: "They ___ to the neighbours.", translation: "Они помахали соседям.", correct: "b", labels: { a: "wave", b: "waved", c: "waves" } },
  { stem: "I ___ a long email to my teacher.", translation: "Я написал(а) длинное письмо учителю (на клавиатуре).", correct: "a", labels: { a: "typed", b: "type", c: "types" } },
  { stem: "We ___ the science museum in April.", translation: "В апреле мы посетили музей науки.", correct: "c", labels: { a: "visit", b: "visits", c: "visited" } },
  { stem: "He ___ (-) enjoy the long walk.", translation: "Ему не понравилась долгая прогулка.", correct: "a", labels: { a: "didn't", b: "don't", c: "doesn't" } },
  { stem: "She ___ her friends about the film.", translation: "Она написала друзьям про фильм (в мессенджере).", correct: "b", labels: { a: "text", b: "texted", c: "texts" } },
  { stem: "They ___ at the wrong bus stop.", translation: "Они ждали на неправильной остановке.", correct: "c", labels: { a: "wait", b: "waits", c: "waited" } },
  { stem: "My mother ___ chicken soup for us.", translation: "Мама сварила нам куриный суп.", correct: "a", labels: { a: "cooked", b: "cook", c: "cooks" } },
  { stem: "We ___ the new words in our notebooks.", translation: "Мы переписали новые слова в тетрадях.", correct: "b", labels: { a: "copy", b: "copied", c: "copies" } },
  { stem: "Last Sunday he ___ in the forest for three hours.", translation: "В прошлое воскресенье он три часа гулял / ходил в лесу.", correct: "c", labels: { a: "hike", b: "hikes", c: "hiked" } },
  { stem: "___ you work in a shop last summer?", translation: "Ты работал в магазине прошлым летом?", correct: "a", labels: { a: "Did", b: "Do", c: "Were" } },
  { stem: "The baby ___ all night.", translation: "Малыш всю ночь плакал.", correct: "b", labels: { a: "cry", b: "cried", c: "cries" } },
  { stem: "I ___ (-) listen to the teacher.", translation: "Я не слушал(а) учителя.", correct: "c", labels: { a: "don't", b: "doesn't", c: "didn't" } },
  { stem: "She ___ a picture of her cat online.", translation: "Она выложила фото своей кошки в интернет.", correct: "a", labels: { a: "posted", b: "post", c: "posts" } },
  { stem: "We ___ the windows because it was cold.", translation: "Мы закрыли окна, потому что было холодно.", correct: "c", labels: { a: "close", b: "closes", c: "closed" } },
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

/**
 * @param {QuizPoolItem[]} pool
 * @param {Set<number>} usedIndices
 * @param {number} count
 * @returns {QuizPoolItem[]}
 */
function pickUnusedQuizItems(pool, usedIndices, count) {
  const available = pool
    .map((_, i) => i)
    .filter((i) => !usedIndices.has(i));
  const shuffled = shuffleArray(available);
  const take = shuffled.slice(0, Math.min(count, shuffled.length));
  take.forEach((i) => usedIndices.add(i));
  return take.map((i) => pool[i]);
}

/**
 * @typedef {{ pool: QuizPoolItem[], used: Set<number>, namePrefix: string, nextIndex: number }} QuizBlockState
 */

/** @type {WeakMap<HTMLElement, QuizBlockState>} */
const quizBlockState = new WeakMap();

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {QuizPoolItem[]} items
 * @param {string} namePrefix уникальный префикс для name у radio (одна сессия страницы)
 * @param {number} numberingStart индекс первого вопроса для нумерации (0 → «1.»)
 */
function buildQuizQuestionsHtml(items, namePrefix, numberingStart) {
  return items
    .map((q, i) => {
      const suffix = numberingStart + i;
      const name = `${namePrefix}-${suffix}`;
      const displayNum = suffix + 1;
      const opts = (["a", "b", "c"]).map(
        (key) =>
          `<label class="quiz-option"><input type="radio" name="${escapeHtml(name)}" value="${key}">${escapeHtml(q.labels[key])}</label>`
      );
      return `<div class="quiz-question" data-correct="${q.correct}">
        <p class="quiz-stem">${displayNum}. ${escapeHtml(q.stem)}</p>
        <p class="translation">${escapeHtml(q.translation)}</p>
        <div class="quiz-options">${opts.join("")}</div>
        <p class="quiz-feedback" hidden></p>
      </div>`;
    })
    .join("");
}

function initQuizBlocks() {
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
    const used = new Set();
    const namePrefix = `quiz-${key}-${sessionId}`;
    const picked = pickUnusedQuizItems(pool, used, QUIZ_RANDOM_COUNT);
    el.innerHTML = buildQuizQuestionsHtml(picked, namePrefix, 0);
    quizBlockState.set(el, { pool, used, namePrefix, nextIndex: picked.length });
    const collapse = el.closest(".quiz-collapse");
    const moreBtn = collapse?.querySelector(`.quiz-more-btn[data-quiz-more="${key}"]`);
    if (moreBtn instanceof HTMLButtonElement) {
      moreBtn.disabled = used.size >= pool.length;
    }
  });
}

/**
 * @param {HTMLElement} container
 * @param {HTMLButtonElement} moreBtn
 */
function appendMoreQuizQuestions(container, moreBtn) {
  const state = quizBlockState.get(container);
  if (!state) {
    return;
  }
  const { pool, used, namePrefix } = state;
  const batch = pickUnusedQuizItems(pool, used, QUIZ_MORE_COUNT);
  if (batch.length === 0) {
    moreBtn.disabled = true;
    return;
  }
  const prevCount = container.querySelectorAll(".quiz-question").length;
  container.insertAdjacentHTML("beforeend", buildQuizQuestionsHtml(batch, namePrefix, state.nextIndex));
  container.querySelectorAll(".quiz-question").forEach((node, i) => {
    if (i >= prevCount) {
      bindQuizQuestion(node);
    }
  });
  state.nextIndex += batch.length;
  moreBtn.disabled = used.size >= pool.length;
}

function initQuizMoreButtons() {
  document.querySelectorAll(".quiz-more-btn[data-quiz-more]").forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) {
      return;
    }
    btn.addEventListener("click", () => {
      const collapse = btn.closest(".quiz-collapse");
      const key = btn.dataset.quizMore;
      if (!key) {
        return;
      }
      const block = collapse?.querySelector(`.quiz-block[data-quiz="${key}"]`);
      if (block instanceof HTMLElement) {
        appendMoreQuizQuestions(block, btn);
      }
    });
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
  initQuizBlocks();
  document.querySelectorAll(".quiz-question").forEach(bindQuizQuestion);
  initQuizMoreButtons();
}

/**
 * @typedef {{ words: string[], translation: string }} WordOrderConfig
 */

const WORD_ORDER_POOLS = /** @type {Record<string, WordOrderConfig[]>} */ ({
  present: [
    { words: ["I", "am", "a", "student"], translation: "Я — студент / студентка." },
    { words: ["She", "plays", "tennis", "on", "Sundays"], translation: "Она играет в теннис по воскресеньям." },
    { words: ["We", "do", "not", "like", "rain"], translation: "Нам не нравится дождь." },
    { words: ["They", "are", "at", "home", "now"], translation: "Они сейчас дома." },
    { words: ["My", "brother", "works", "in", "a", "bank"], translation: "Мой брат работает в банке." },
    { words: ["Does", "your", "sister", "speak", "English"], translation: "Твоя сестра говорит по-английски?" },
    { words: ["Do", "you", "walk", "to", "school"], translation: "Ты ходишь в школу пешком?" },
    { words: ["Are", "they", "ready", "for", "the", "test"], translation: "Они готовы к контрольной?" },
  ],
  past: [
    { words: ["I", "was", "a", "student"], translation: "Я был(а) студентом / студенткой." },
    { words: ["They", "were", "very", "tired"], translation: "Они очень устали." },
    { words: ["She", "walked", "to", "school", "yesterday"], translation: "Вчера она пошла в школу пешком." },
    { words: ["We", "watched", "a", "film", "last", "night"], translation: "Вчера вечером мы посмотрели фильм." },
    { words: ["Yesterday", "I", "was", "late"], translation: "Вчера я опоздал(а)." },
    { words: ["He", "did", "not", "answer", "my", "call"], translation: "Он не ответил на мой звонок." },
    { words: ["Did", "you", "enjoy", "the", "concert"], translation: "Тебе понравился концерт?" },
    { words: ["Were", "you", "at", "home", "yesterday"], translation: "Ты был(а) / Вы были дома вчера?" },
  ],
});

/**
 * @typedef {{ pool: WordOrderConfig[], used: Set<number>, stack: HTMLElement }} WordOrderBlockState
 */

/** @type {WeakMap<HTMLElement, WordOrderBlockState>} */
const wordOrderBlockState = new WeakMap();

/**
 * @param {HTMLElement} bank
 */
function shuffleWordTokensInBank(bank) {
  const nodes = Array.from(bank.querySelectorAll(".word-token"));
  shuffleArray(nodes).forEach((node) => {
    bank.appendChild(node);
  });
}

/**
 * @param {HTMLElement} root
 * @param {string[]} correct
 */
function getFilledSequence(root) {
  const slots = root.querySelectorAll(".word-order-slot");
  return Array.from(slots).map((slot) => {
    const tok = slot.querySelector(".word-token");
    return tok ? tok.textContent.trim() : "";
  });
}

/**
 * @param {HTMLElement} slot
 * @param {HTMLElement} token
 * @param {HTMLElement} bank
 */
function placeTokenInSlot(slot, token, bank) {
  const existing = slot.querySelector(".word-token");
  if (existing && existing !== token) {
    bank.appendChild(existing);
  }
  slot.appendChild(token);
}

/**
 * @param {HTMLElement} el
 * @param {WordOrderConfig} cfg
 */
function mountWordOrderExercise(el, cfg) {
  const shuffled = shuffleArray(cfg.words.slice());
  const slotsHtml = cfg.words
    .map(
      (_, i) =>
        `<div class="word-order-slot" data-slot-index="${i}" role="listitem" aria-label="Позиция ${i + 1}"></div>`
    )
    .join("");
  const tokensHtml = shuffled
    .map((w) => `<span class="word-token" draggable="true" tabindex="0">${escapeHtml(w)}</span>`)
    .join("");

  el.innerHTML = `
    <p class="translation word-order-translation">${escapeHtml(cfg.translation)}</p>
    <div class="word-order-row" aria-label="Позиции в предложении">
      <div class="word-order-slots" role="list">${slotsHtml}</div>
    </div>
    <p class="word-order-bank-label">Слова (перетащите на позиции выше):</p>
    <div class="word-bank" role="group" aria-label="Банк слов">${tokensHtml}</div>
    <div class="word-order-actions">
      <button type="button" class="word-order-check">Проверить</button>
      <button type="button" class="word-order-reset">Сбросить</button>
    </div>
    <p class="word-order-feedback quiz-feedback" hidden></p>
  `;

  const bank = el.querySelector(".word-bank");
  const feedback = el.querySelector(".word-order-feedback");
  if (!(bank instanceof HTMLElement)) {
    return;
  }

  /** @type {HTMLElement | null} */
  let dragged = null;

  el.addEventListener("dragstart", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement) || !t.classList.contains("word-token")) {
      return;
    }
    dragged = t;
    t.classList.add("word-token--dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", t.textContent.trim());
  });

  el.addEventListener("dragend", (e) => {
    const t = e.target;
    if (t instanceof HTMLElement) {
      t.classList.remove("word-token--dragging");
    }
    dragged = null;
  });

  el.addEventListener("dragover", (e) => {
    const raw = e.target;
    const hit = raw instanceof Element ? raw.closest(".word-order-slot, .word-bank") : null;
    if (!hit || !(hit instanceof HTMLElement) || !el.contains(hit)) {
      return;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  });

  el.addEventListener("drop", (e) => {
    const raw = e.target;
    const hit = raw instanceof Element ? raw.closest(".word-order-slot, .word-bank") : null;
    if (!hit || !(hit instanceof HTMLElement) || !el.contains(hit) || !dragged) {
      return;
    }
    e.preventDefault();
    if (hit.classList.contains("word-bank")) {
      hit.appendChild(dragged);
    } else if (hit.classList.contains("word-order-slot")) {
      placeTokenInSlot(hit, dragged, bank);
    }
    dragged = null;
  });

  el.querySelector(".word-order-check")?.addEventListener("click", () => {
    const seq = getFilledSequence(el);
    const ok =
      seq.length === cfg.words.length && seq.every((w, i) => w === cfg.words[i]);
    el.classList.remove("word-order-ok", "word-order-bad");
    el.classList.add(ok ? "word-order-ok" : "word-order-bad");
    if (feedback) {
      feedback.textContent = ok
        ? QUIZ_OK
        : "Пока не так — попробуйте ещё раз или нажмите «Сбросить».";
      feedback.hidden = false;
    }
  });

  el.querySelector(".word-order-reset")?.addEventListener("click", () => {
    el.classList.remove("word-order-ok", "word-order-bad");
    if (feedback) {
      feedback.hidden = true;
      feedback.textContent = "";
    }
    el.querySelectorAll(".word-order-slot .word-token").forEach((t) => {
      if (t instanceof HTMLElement) {
        bank.appendChild(t);
      }
    });
    shuffleWordTokensInBank(bank);
  });
}

/**
 * @param {HTMLElement} stack
 * @param {WordOrderConfig} cfg
 */
function mountWordOrderIntoStack(stack, cfg) {
  const el = document.createElement("div");
  el.className = "word-order-exercise";
  stack.appendChild(el);
  mountWordOrderExercise(el, cfg);
}

/**
 * @param {HTMLElement} block
 * @param {HTMLButtonElement} moreBtn
 */
function appendWordOrderExercise(block, moreBtn) {
  const state = wordOrderBlockState.get(block);
  if (!state) {
    return;
  }
  const { pool, used, stack } = state;
  const avail = pool.map((_, i) => i).filter((i) => !used.has(i));
  if (avail.length === 0) {
    moreBtn.disabled = true;
    return;
  }
  const idx = avail[Math.floor(Math.random() * avail.length)];
  used.add(idx);
  mountWordOrderIntoStack(stack, pool[idx]);
  moreBtn.disabled = used.size >= pool.length;
}

/**
 * @param {HTMLElement} block
 */
function initWordOrderBlock(block) {
  const tense = block.dataset.tense;
  if (!tense) {
    return;
  }
  const pool = WORD_ORDER_POOLS[tense];
  if (!pool || pool.length === 0) {
    return;
  }
  const stack = block.querySelector(".word-order-stack");
  if (!(stack instanceof HTMLElement)) {
    return;
  }
  const used = new Set();
  const firstIdx = 0;
  used.add(firstIdx);
  mountWordOrderIntoStack(stack, pool[firstIdx]);
  wordOrderBlockState.set(block, { pool, used, stack });
  const moreBtn = block.querySelector(".quiz-more-btn[data-word-order-more]");
  if (moreBtn instanceof HTMLButtonElement) {
    moreBtn.disabled = used.size >= pool.length;
    moreBtn.addEventListener("click", () => {
      appendWordOrderExercise(block, moreBtn);
    });
  }
}

function initWordOrderExercises() {
  document.querySelectorAll(".word-order-block[data-tense]").forEach((node) => {
    if (node instanceof HTMLElement) {
      initWordOrderBlock(node);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initInteractiveTables();
  initQuizzes();
  initWordOrderExercises();
});
