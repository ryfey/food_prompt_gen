// Word banks Bahasa Indonesia untuk setiap slot

window.wordBanks = {
  mainSubject: [
    "nasi goreng", "sate ayam", "bakso", "es cendol", "rendang", "gado-gado", "soto ayam", "mie ayam", "pempek", "lumpia",
    "martabak manis", "rawon", "ayam geprek", "tahu isi", "tempe mendoan", "bubur ayam", "kerupuk", "kue lapis", "kolak pisang", "jus alpukat"
  ],
  actionState: [
    "tersaji rapi", "berlumur saus", "sedang diangkat", "baru dimasak", "mengeluarkan asap", "setengah terbuka", "menggoda selera", "terpotong rapi", "mengalirkan kuah", "tumpah sedikit",
    "bertabur bawang goreng", "disiram kecap", "ditusuk sate", "meleleh", "berlapis-lapis", "digulung", "dipanggang sempurna", "mengkilap", "dihias cabai", "mengambang di kuah"
  ],
  servingSurface: [
    "piring keramik", "mangkuk kayu", "daun pisang", "wadah anyaman", "nampan bambu", "gelas kaca", "piring melamin", "tempat stainless", "piring rotan", "mangkuk porselen",
    "piring putih polos", "mangkuk tanah liat", "wadah tradisional", "wadah kaca", "piring batik", "dulang kayu", "piring kuningan", "wadah plastik", "piring ukiran", "dulang logam"
  ],
  dynamicEffect: [
    "asap mengepul", "kuah menetes", "saus terpercik", "serpihan kerupuk jatuh", "bumbu bertebaran", "es batu berkilau", "gula cair mengalir", "butiran kelapa jatuh", "cokelat meleleh", "ramuan herbal melayang",
    "taburan wijen turun", "potongan buah meluncur", "kecap menetes", "lada berhamburan", "udara hangat naik", "embun di gelas", "tepung beterbangan", "minyak berkilau", "serutan keju jatuh", "buih soda naik"
  ],
  cameraAngle: [
    "atas langsung", "sudut 45°", "close-up ekstrem", "sejajar mata", "profil samping", "angle rendah", "overhead", "makro", "diagonal", "tilt dinamis",
    "bird-eye", "worm-eye", "sudut tiga perempat", "sudut miring", "angle simetris", "off-center", "sudut vertikal", "high angle", "low angle", "frontal"
  ],
  propElements: [
    "daun seledri", "sendok perak", "serbet kain", "es batu", "bunga melati", "rempah utuh", "sumpit kayu", "irisan jeruk nipis", "bendera mini", "menu tulisan tangan",
    "potongan cabai", "kerupuk kecil", "daun pandan", "garpu kayu", "serpihan bawang goreng", "potongan tomat", "irisan telur", "potongan timun", "piring kecil sambal", "potongan bawang merah"
  ],
  lightingType: [
    "pencahayaan alami", "backlight dramatis", "low-key gelap", "cahaya studio terang", "cahaya lilin hangat", "ambien sejuk", "pencahayaan samping lembut", "spotlight", "bayangan bermain", "filter warna",
    "pencahayaan pagi", "cahaya senja", "cahaya redup", "cahaya jendela", "cahaya lampu gantung", "pencahayaan softbox", "cahaya neon", "cahaya lampu dapur", "cahaya siluet", "cahaya reflektif"
  ],
  backdropType: [
    "latar gelap tekstur", "permukaan pastel cerah", "meja kayu", "kain vintage", "latar marmer", "latar polos putih", "gradient netral", "ubin bermotif", "latar luar ruangan", "kertas coklat kraft",
    "latar rustic", "permukaan batu", "taplak batik", "permukaan granit", "latar daun tropis", "latar anyaman bambu", "latar kain linen", "permukaan kaca", "latar keramik", "latar foto blur"
  ],
  moodAtmosphere: [
    "hangat dan nyaman", "ceria dan bersemangat", "mewah dan elegan", "segar dan hidup", "nuansa tradisional", "romantis", "minimalis bersih", "urban modern", "meriah", "misterius",
    "santai", "kasual", "nostalgik", "eksklusif", "ramai pesta", "slow living", "piknik", "reuni keluarga", "nuansa tropis", "nuansa pedesaan"
  ],
  colorPalette: [
    "warna bumi", "warna cerah", "nuansa pastel", "monokrom", "aksen emas", "biru sejuk", "merah hangat", "hijau alami", "abu netral", "warna tropis",
    "warna tradisional", "palet coklat", "palet kuning", "palet hijau daun", "palet oranye", "palet ungu", "palet biru laut", "palet merah muda", "palet hitam putih", "palet natural"
  ],
  compositionStyle: [
    "minimalis terpusat", "flatlay editorial", "iklan komersial", "asimetri seimbang", "diagonal dinamis", "rule of thirds", "crop dekat", "depth bertingkat", "ruang negatif", "pola berulang",
    "komposisi zigzag", "frame dalam frame", "komposisi spiral", "komposisi grid", "komposisi overlay", "komposisi berlapis", "komposisi melingkar", "komposisi piramida", "komposisi simetris", "komposisi diagonal"
  ],
  emotionKeywords: [
    "menggugah selera", "mengundang", "lezat maksimal", "menyegarkan", "menghangatkan hati", "meriah", "berani", "lembut", "menggiurkan", "tenang",
    "nostalgis", "menenangkan", "memanjakan", "mengasyikkan", "menenangkan jiwa", "menyejukkan", "menggetarkan", "menghibur", "membahagiakan", "memikat"
  ]
};

window.slotGuide = [
  {slot: "[Main Subject]", desc: "Makanan/minuman utama yang ingin ditampilkan", ex: "nasi goreng, sate ayam, es cendol"},
  {slot: "[Action/State]", desc: "Apa yang terjadi pada makanan", ex: "tersaji rapi, berlumur saus, sedang diangkat"},
  {slot: "[Serving Surface]", desc: "Wadah atau permukaan tempat makanan diletakkan", ex: "piring keramik, daun pisang, mangkuk kayu"},
  {slot: "[Dynamic Effect]", desc: "Efek gerak atau visual opsional", ex: "asap mengepul, kuah menetes, butiran kelapa jatuh"},
  {slot: "[Camera Angle]", desc: "Sudut pandang kamera terhadap makanan", ex: "atas langsung, sudut 45°, close-up ekstrem"},
  {slot: "[Prop Elements]", desc: "Properti dekoratif di sekitar makanan", ex: "daun seledri, sendok perak, bunga melati"},
  {slot: "[Lighting Type]", desc: "Gaya dan arah pencahayaan", ex: "pencahayaan alami, backlight dramatis, low-key gelap"},
  {slot: "[Backdrop Type]", desc: "Karakter latar belakang", ex: "latar gelap tekstur, permukaan pastel cerah, meja kayu"},
  {slot: "[Mood/Atmosphere Style]", desc: "Nuansa atau mood foto", ex: "hangat dan nyaman, ceria dan bersemangat, mewah dan elegan"},
  {slot: "[Color Palette]", desc: "Nuansa warna", ex: "warna bumi, nuansa pastel, aksen emas"},
  {slot: "[Composition Style]", desc: "Gaya komposisi dan framing", ex: "minimalis terpusat, flatlay editorial, iklan komersial"},
  {slot: "[Emotion/Mood Keywords]", desc: "Kesan emosi akhir", ex: "menggugah selera, menyegarkan, memanjakan"}
];
