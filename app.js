// DOM references
const slots = [
  "mainSubject", "actionState", "servingSurface", "dynamicEffect",
  "cameraAngle", "propElements", "lightingType", "backdropType",
  "moodAtmosphere", "colorPalette", "compositionStyle", "emotionKeywords"
];
function fillSelects() {
  slots.forEach(slot => {
    const select = document.getElementById(slot);
    select.innerHTML = "";
    window.wordBanks[slot].forEach(opt => {
      const el = document.createElement("option");
      el.value = opt;
      el.textContent = opt || "(none)";
      select.appendChild(el);
    });
  });
}

// Slot Guide & Word Banks
function renderSlotGuide() {
  let html = "<table><thead><tr><th>Slot</th><th>Guide</th><th>Example</th></tr></thead><tbody>";
  window.slotGuide.forEach(s => {
    html += `<tr>
      <td>${s.slot}</td>
      <td>${s.desc}</td>
      <td>${s.ex}</td>
    </tr>`;
  });
  html += "</tbody></table>";
  document.getElementById("slotGuide").innerHTML = html;
}
function renderWordBanks() {
  let html = "";
  slots.forEach(slot => {
    html += `<strong>${slot.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase())}:</strong> <ul>`;
    window.wordBanks[slot].forEach(w => {
      html += `<li>${w||"(none)"}</li>`;
    });
    html += "</ul>";
  });
  document.getElementById("wordBanks").innerHTML = html;
}

// Prompt Generator
function generatePrompt(values) {
  return (
    `${values.mainSubject} ${values.actionState} di atas ${values.servingSurface}` +
    (values.dynamicEffect ? ` dengan ${values.dynamicEffect}` : "") + ",\n" +
    `diambil dari sudut ${values.cameraAngle},\n` +
    `dihias dengan ${values.propElements} di sekelilingnya,\n` +
    `menggunakan ${values.lightingType} dan ${values.backdropType},\n` +
    `dengan suasana ${values.moodAtmosphere},\n` +
    `bertekstur sangat detail, hiper-realistis, 8K UHD, fokus tajam,\n` +
    `palet warna ${values.colorPalette},\n` +
    `gaya komposisi ${values.compositionStyle}, kesan ${values.emotionKeywords}`
  );
}

// Form events
document.addEventListener("DOMContentLoaded", function() {
  fillSelects();
  renderSlotGuide();
  renderWordBanks();

  document.getElementById("promptForm").addEventListener("submit", function(e){
    e.preventDefault();
    const vals = {};
    slots.forEach(slot => {
      vals[slot] = document.getElementById(slot).value;
    });
    document.getElementById("promptOutput").value = generatePrompt(vals);
  });
});
