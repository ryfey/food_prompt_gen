const slots = [
  "mainSubject", "actionState", "servingSurface", "dynamicEffect",
  "cameraAngle", "propElements", "lightingType", "backdropType",
  "moodAtmosphere", "colorPalette", "compositionStyle", "emotionKeywords"
];

function fillSelects() {
  slots.forEach(slot => {
    const datalist = document.getElementById(slot + "List");
    datalist.innerHTML = "";
    window.wordBanks[slot].forEach(opt => {
      const el = document.createElement("option");
      el.value = opt;
      datalist.appendChild(el);
    });
  });
}

function renderSlotGuide() { /* ... same as before ... */ }
function renderWordBanks() { /* ... same as before ... */ }

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

function randomPrompt() {
  const vals = {};
  slots.forEach(slot => {
    const arr = window.wordBanks[slot];
    let idx = Math.floor(Math.random() * arr.length);
    vals[slot] = arr[idx];
    document.getElementById(slot).value = arr[idx];
  });
  document.getElementById("promptOutput").value = generatePrompt(vals);
}

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

  document.getElementById("randomPromptBtn").addEventListener("click", function(){
    randomPrompt();
  });

  document.getElementById("promptOutput").readOnly = false;
});
