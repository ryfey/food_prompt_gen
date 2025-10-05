// app.js
// Logika utama aplikasi prompt generator
// Mengharapkan adanya window.wordBanks dan window.slotGuide dari wordbank.js

const slots = [
  "mainSubject", "actionState", "servingSurface", "dynamicEffect",
  "cameraAngle", "propElements", "lightingType", "backdropType",
  "moodAtmosphere", "colorPalette", "compositionStyle", "emotionKeywords"
];

function fillDatalists() {
  if (!window.wordBanks) return;
  slots.forEach(slot => {
    const listId = slot + "List";
    const datalist = document.getElementById(listId);
    if (!datalist) return;
    datalist.innerHTML = "";
    const arr = window.wordBanks[slot] || [];
    arr.forEach(opt => {
      const el = document.createElement("option");
      // If opt is empty string, skip showing it in the datalist but allow blank input
      if (opt) el.value = opt;
      datalist.appendChild(el);
    });
  });
}

function renderSlotGuide() {
  const container = document.getElementById("slotGuide");
  if (!container || !window.slotGuide) return;
  let html = '<table class="guide-table"><thead><tr><th>Slot</th><th>Guide</th><th>Example</th></tr></thead><tbody>';
  window.slotGuide.forEach(s => {
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
  if (!container || !window.wordBanks) return;
  let html = "";
  slots.forEach(slot => {
    const pretty = slot.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
    html += `<div class="wb-slot"><h4>${escapeHtml(pretty)}</h4><ul>`;
    (window.wordBanks[slot] || []).forEach(item => {
      html += `<li>${escapeHtml(item || "(kosong)")}</li>`;
    });
    html += `</ul></div>`;
  });
  container.innerHTML = html;
}

function generatePrompt(values) {
  // Clean & fallback
  const vs = {};
  slots.forEach(s => {
    vs[s] = (values[s] || "").trim();
  });

  const dynamicPart = vs.dynamicEffect ? ` dengan ${vs.dynamicEffect}` : "";
  const prompt =
    `${vs.mainSubject} ${vs.actionState} di atas ${vs.servingSurface}${dynamicPart},\n` +
    `diambil dari sudut ${vs.cameraAngle},\n` +
    `dihias dengan ${vs.propElements} di sekelilingnya,\n` +
    `menggunakan ${vs.lightingType} dan ${vs.backdropType},\n` +
    `dengan suasana ${vs.moodAtmosphere},\n` +
    `bertekstur sangat detail, hiper-realistis, 8K UHD, fokus tajam,\n` +
    `palet warna ${vs.colorPalette},\n` +
    `gaya komposisi ${vs.compositionStyle}, kesan ${vs.emotionKeywords}`;

  return prompt;
}

function randomPrompt() {
  if (!window.wordBanks) return;
  const vals = {};
  slots.forEach(slot => {
    const arr = window.wordBanks[slot] && window.wordBanks[slot].length ? window.wordBanks[slot] : [""];
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
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", function () {
  // Populate datalists & side panels
  fillDatalists();
  renderSlotGuide();
  renderWordBanks();

  // Form submit -> generate prompt (reads from inputs)
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

  // Random prompt button
  const randBtn = document.getElementById("randomPromptBtn");
  if (randBtn) randBtn.addEventListener("click", randomPrompt);

  // Make prompt output editable and auto-select on focus
  const out = document.getElementById("promptOutput");
  if (out) {
    out.readOnly = false;
    out.addEventListener("focus", function () { out.select(); });
  }

  // Optional: update the datalists and wordBanks panels if wordbank.js changed later
  // (useful for dynamic editing of window.wordBanks)
  if (window.__wordbank_observe !== true) {
    window.__wordbank_observe = true;
    try {
      // If wordBanks is later assigned, attempt to re-fill once
      const original = window.wordBanks;
      Object.defineProperty(window, "wordBanks", {
        configurable: true,
        enumerable: true,
        get() { return original; },
        set(v) {
          // assign and re-render
          Object.defineProperty(window, "wordBanks", {
            value: v,
            writable: true,
            configurable: true,
            enumerable: true
          });
          setTimeout(() => {
            fillDatalists();
            renderWordBanks();
          }, 0);
          return v;
        }
      });
    } catch (e) {
      // ignore if defineProperty fails
    }
  }
});
