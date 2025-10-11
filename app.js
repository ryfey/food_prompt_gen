// app.js - Multi Language + Theme + Slot relevance per category

const LANGS = ["ID", "EN"];
let currentLang = "ID";
const slots = [
  "mainSubject", "actionState", "servingSurface", "dynamicEffect",
  "cameraAngle", "propElements", "lightingType", "backdropType",
  "moodAtmosphere", "colorPalette", "compositionStyle", "emotionKeywords"
];
const mainSubjectCats = {
  EN: ["All", "Cake", "Vegetable", "Side Dish", "Rice/Protein", "Drink"],
  ID: ["All", "Kue", "Sayur", "Lauk", "Nasi/Protein", "Minuman"]
};

function updateUIText() {
  const txt = window.uiText && window.uiText[currentLang] ? window.uiText[currentLang] : {};
  [
    ["appTitle", "title"], ["labelMainSubject", "mainSubject"], ["labelActionState", "actionState"],
    ["labelServingSurface", "servingSurface"], ["labelDynamicEffect", "dynamicEffect"], ["labelCameraAngle", "cameraAngle"],
    ["labelPropElements", "propElements"], ["labelLightingType", "lightingType"], ["labelBackdropType", "backdropType"],
    ["labelMoodAtmosphere", "moodAtmosphere"], ["labelColorPalette", "colorPalette"],
    ["labelCompositionStyle", "compositionStyle"], ["labelEmotionKeywords", "emotionKeywords"],
    ["btnGenerate", "generate"], ["randomPromptBtn", "random"], ["outputTitle", "output"], ["outputNote", "note"]
  ].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && txt[key]) el.textContent = txt[key];
  });
  document.querySelectorAll(".foodcat-btn").forEach((btn, i) => {
    const cat = btn.getAttribute("data-cat");
    btn.textContent = txt.categories && txt.categories[cat] ? txt.categories[cat] : cat;
  });
}

function fillDatalists() {
  if (!window.wordBanks || !window.wordBanks[currentLang]) return;
  slots.forEach(slot => {
    if (["actionState", "servingSurface", "dynamicEffect", "propElements"].includes(slot) || slot === "mainSubject") return;
    const datalist = document.getElementById(slot + "List");
    if (!datalist) return;
    const arr = window.wordBanks[currentLang][slot] || [];
    datalist.innerHTML = "";
    arr.forEach(opt => {
      const el = document.createElement("option");
      if (opt) el.value = opt;
      datalist.appendChild(el);
    });
  });
}

function fillSlotDatalist(slot, category) {
  const datalist = document.getElementById(slot + "List");
  let arr = [];
  if (window.wordBanks && window.wordBanks[currentLang] && window.wordBanks[currentLang][slot]) {
    arr = window.wordBanks[currentLang][slot][category] || window.wordBanks[currentLang][slot].default || [];
  }
  datalist.innerHTML = "";
  arr.forEach(opt => {
    const el = document.createElement("option");
    el.value = opt;
    datalist.appendChild(el);
  });
}

function fillMainSubjectDatalist(category) {
  let arr = [];
  if (window.wordBanks && window.wordBanks[currentLang]) {
    if (category === "All") {
      arr = window.wordBanks[currentLang].mainSubject || [];
    } else if (window.foodCategories && window.foodCategories[currentLang]) {
      arr = window.foodCategories[currentLang][category] || [];
    }
  }
  const datalist = document.getElementById("mainSubjectList");
  if (!datalist) return;
  datalist.innerHTML = "";
  arr.forEach(opt => {
    const el = document.createElement("option");
    el.value = opt;
    datalist.appendChild(el);
  });
}

function updateCategorySlots(cat) {
  ["actionState", "servingSurface", "dynamicEffect", "propElements"].forEach(slot => fillSlotDatalist(slot, cat));
}

function renderSlotGuide() {
  const container = document.getElementById("slotGuide");
  if (!container || !window.slotGuide || !window.slotGuide[currentLang]) return;
  let html = '<table class="guide-table"><thead><tr><th>Slot</th><th>Guide</th><th>Example</th></tr></thead><tbody>';
  window.slotGuide[currentLang].forEach(s => {
    html += `<tr>
      <td class="mono">${escapeHtml(s.slot)}</td>
      <td>${escapeHtml(s.desc)}</td>
      <td class="examples">${escapeHtml(s.ex)}</td>
    </tr>`;
  });
  html += "</tbody></table>";
  container.innerHTML = html;
}

function renderWordBanks() {
  const container = document.getElementById("wordBanks");
  if (!container || !window.wordBanks || !window.wordBanks[currentLang]) return;
  let html = "";
  slots.forEach(slot => {
    const pretty = window.uiText && window.uiText[currentLang] && window.uiText[currentLang][slot] ? window.uiText[currentLang][slot] : slot.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
    html += `<div class="wb-slot"><h4>${escapeHtml(pretty)}</h4><ul>`;
    if (["actionState", "servingSurface", "dynamicEffect", "propElements"].includes(slot)) {
      if (window.wordBanks[currentLang][slot]) {
        Object.keys(window.wordBanks[currentLang][slot]).forEach(cat => {
          html += `<li style="font-weight:bold;color:#2e7d32;">[${cat}]</li>`;
          (window.wordBanks[currentLang][slot][cat] || []).forEach(item => {
            html += `<li>${escapeHtml(item || "(empty)")}</li>`;
          });
        });
      }
    } else {
      (window.wordBanks[currentLang][slot] || []).forEach(item => {
        html += `<li>${escapeHtml(item || "(empty)")}</li>`;
      });
    }
    html += `</ul></div>`;
  });
  container.innerHTML = html;
}

function generatePrompt(values) {
  const vs = {};
  slots.forEach(s => {
    vs[s] = (values[s] || "").trim();
  });
  if (currentLang === "EN") {
    return (
      `${vs.mainSubject} ${vs.actionState} on ${vs.servingSurface}` +
      (vs.dynamicEffect ? ` with ${vs.dynamicEffect}` : "") + ",\n" +
      `shot from ${vs.cameraAngle} angle,\n` +
      `decorated with ${vs.propElements} around,\n` +
      `using ${vs.lightingType} and ${vs.backdropType},\n` +
      `with a ${vs.moodAtmosphere} mood,\n` +
      `super detailed texture, hyper-realistic, 8K UHD, sharp focus,\n` +
      `color palette: ${vs.colorPalette},\n` +
      `composition style: ${vs.compositionStyle}, impression: ${vs.emotionKeywords}`
    );
  } else {
    return (
      `${vs.mainSubject} ${vs.actionState} di atas ${vs.servingSurface}` +
      (vs.dynamicEffect ? ` dengan ${vs.dynamicEffect}` : "") + ",\n" +
      `diambil dari sudut ${vs.cameraAngle},\n` +
      `dihias dengan ${vs.propElements} di sekelilingnya,\n` +
      `menggunakan ${vs.lightingType} dan ${vs.backdropType},\n` +
      `dengan suasana ${vs.moodAtmosphere},\n` +
      `bertekstur sangat detail, hiper-realistis, 8K UHD, fokus tajam,\n` +
      `palet warna ${vs.colorPalette},\n` +
      `gaya komposisi ${vs.compositionStyle}, kesan ${vs.emotionKeywords}`
    );
  }
}

function randomPrompt() {
  if (!window.wordBanks || !window.wordBanks[currentLang]) return;
  const vals = {};
  let cat = document.querySelector(".foodcat-btn.active").getAttribute("data-cat");
  slots.forEach(slot => {
    let arr = [];
    if (slot === "mainSubject") {
      document.querySelectorAll('#mainSubjectList option').forEach(opt => arr.push(opt.value));
    } else if (["actionState", "servingSurface", "dynamicEffect", "propElements"].includes(slot)) {
      if (window.wordBanks[currentLang][slot]) {
        arr = window.wordBanks[currentLang][slot][cat] || window.wordBanks[currentLang][slot].default || [];
      }
    } else {
      arr = window.wordBanks[currentLang][slot] && window.wordBanks[currentLang][slot].length ? window.wordBanks[currentLang][slot] : [""];
    }
    const idx = Math.floor(Math.random() * arr.length);
    const choice = arr[idx] || "";
    vals[slot] = choice;
    const input = document.getElementById(slot);
    if (input) input.value = choice;
  });
  const out = document.getElementById("promptOutput");
  if (out) out.value = generatePrompt(vals);
}

function escapeHtml(s) {
  if (s == null) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function switchLang(lang) {
  currentLang = lang;
  updateUIText();
  fillDatalists();
  renderSlotGuide();
  renderWordBanks();
  fillMainSubjectDatalist(mainSubjectCats[currentLang][0]);
  updateCategorySlots(mainSubjectCats[currentLang][0]);
  document.querySelectorAll(".foodcat-btn").forEach((btn, i) => {
    btn.classList.remove("active");
    if (i === 0) btn.classList.add("active");
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) btn.classList.add("active");
  });
  document.getElementById("mainSubject").value = "";
}

// Theme switcher logic
function switchTheme(theme) {
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-soft');
  if (theme === 'dark') document.body.classList.add('theme-dark');
  else if (theme === 'soft') document.body.classList.add('theme-soft');
  else document.body.classList.add('theme-light');
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-theme') === theme) btn.classList.add('active');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateUIText();
  fillDatalists();
  renderSlotGuide();
  renderWordBanks();
  fillMainSubjectDatalist(mainSubjectCats[currentLang][0]);
  updateCategorySlots(mainSubjectCats[currentLang][0]);

  document.querySelectorAll(".foodcat-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const cat = btn.getAttribute("data-cat");
      fillMainSubjectDatalist(cat);
      document.getElementById("mainSubject").value = "";
      document.querySelectorAll(".foodcat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateCategorySlots(cat);
    });
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const lang = btn.getAttribute("data-lang");
      if (lang !== currentLang) switchLang(lang);
    });
  });

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const theme = btn.getAttribute('data-theme');
      switchTheme(theme);
    });
  });
  switchTheme('light');

  const form = document.getElementById("promptForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const vals = {};
      slots.forEach(slot => {
        const el = document.getElementById(slot);
        vals[slot] = el ? el.value : "";
      });
      const out = document.getElementById("promptOutput");
      if (out) out.value = generatePrompt(vals);
    });
  }

  const randBtn = document.getElementById("randomPromptBtn");
  if (randBtn) randBtn.addEventListener("click", randomPrompt);

  const out = document.getElementById("promptOutput");
  if (out) {
    out.readOnly = false;
    out.addEventListener("focus", function () { out.select(); });
  }
});
