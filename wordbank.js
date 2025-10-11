// wordbank.js - Multi Language (EN/ID) - Slot relevance per category & Pizza/Burger added

window.foodCategories = {
  EN: {
    Cake: [
      "chocolate lava cake", "fruit tart", "brownies", "cheesecake", "carrot cake", "apple pie", "cupcake", "red velvet cake", "lemon meringue pie", "banana bread",
      "tiramisu", "pavlova", "eclair", "profiteroles", "baked donuts", "cream puff", "coconut cake", "pumpkin pie", "macarons", "layered sponge cake", "shortbread"
    ],
    Vegetable: [
      "grilled vegetable platter", "vegetable stir fry", "ratatouille", "salad bowl", "roasted carrots", "sauteed spinach", "stuffed bell peppers", "veggie soup", "pickled vegetables", "cucumber salad",
      "coleslaw", "steamed broccoli", "vegetable curry", "mushroom stew", "baked eggplant", "corn fritters", "herb salad", "avocado salad", "vegetable tempura", "zucchini noodles"
    ],
    "Side Dish": [
      "fried chicken", "beef steak", "roast duck", "grilled fish", "crispy tofu", "shrimp skewers", "lamb chops", "meatballs", "chicken wings", "fish fillet",
      "egg rolls", "pork belly", "spicy ribs", "roast lamb", "turkey breast", "smoked salmon", "barbecue ribs", "garlic prawns", "chicken satay", "fried tempeh"
    ],
    "Rice/Protein": [
      "sushi platter", "fried rice", "bibimbap", "rice bowl", "steamed rice", "chicken rice", "paella", "jambalaya", "pilaf", "nasi goreng",
      "risotto", "biryani", "curry rice", "rice porridge", "rice salad", "rice noodles", "quinoa bowl", "poke bowl", "donburi", "chicken and rice",
      "pizza", "burger", "cheeseburger", "chicken burger", "pizza pepperoni", "pizza margherita", "pizza supreme", "double cheese burger", "beef burger", "chicken sandwich"
    ],
    Drink: [
      "iced coffee", "bubble tea", "smoothie bowl", "fruit juice", "lemonade", "cold brew", "milkshake", "hot chocolate", "matcha latte", "herbal tea",
      "espresso", "mojito", "sangria", "iced tea", "ginger ale", "detox water", "coconut water", "milk tea", "soda float", "orange juice"
    ]
  },
  ID: {
    Kue: [
      "martabak manis", "kue lapis", "kue cubit", "kue putu", "klepon", "kue semprit", "lumpia", "nastar", "kue bolu", "kue sagu",
      "bika ambon", "brownies", "kue talam", "kue cucur", "dadar gulung", "kue bugis", "kue lapis legit", "onde-onde", "kue soes", "kue sus", "kue terang bulan"
    ],
    Sayur: [
      "gado-gado", "sayur asem", "capcay", "pecel", "urap", "lodeh", "sop sayur", "oseng kangkung", "sambal goreng kentang", "sayur bayam",
      "sayur bening", "tumis buncis", "sayur nangka", "sambal terong", "tumis tauge", "sayur labu siam", "tumis kacang panjang", "sayur rebung", "sop kacang merah", "sop brokoli"
    ],
    Lauk: [
      "sate ayam", "ayam geprek", "rendang", "ikan bakar", "ayam goreng", "tempe mendoan", "tahu isi", "empal", "ayam bakar", "ayam rica-rica",
      "ikan goreng", "perkedel", "ayam penyet", "dendeng balado", "tahu goreng", "tempe goreng", "ayam panggang", "ayam saus mentega", "ayam lada hitam", "ayam asam manis"
    ],
    "Nasi/Protein": [
      "nasi goreng", "mie ayam", "rawon", "bubur ayam", "pempek", "bakso", "nasi uduk", "nasi kuning", "nasi campur", "nasi padang",
      "nasi liwet", "nasi pecel", "nasi gudeg", "nasi timbel", "nasi kebuli", "nasi bakar", "nasi jinggo", "nasi kucing", "nasi tutug oncom", "nasi ayam hainan",
      "pizza", "burger", "cheeseburger", "burger ayam", "pizza pepperoni", "pizza margherita", "pizza supreme", "double cheese burger", "burger daging sapi", "roti lapis ayam"
    ],
    Minuman: [
      "es cendol", "jus alpukat", "es kelapa muda", "teh manis", "kopi susu", "es teler", "es buah", "es campur", "es jeruk", "soda gembira",
      "es dawet", "es cincau", "teh tarik", "kopi tubruk", "bandrek", "wedang jahe", "es doger", "es milo", "es teh tarik", "air mineral"
    ]
  }
};

// Slot relevansi per kategori
window.wordBanks = {
  EN: {
    mainSubject: [].concat(
      window.foodCategories.EN.Cake,
      window.foodCategories.EN.Vegetable,
      window.foodCategories.EN["Side Dish"],
      window.foodCategories.EN["Rice/Protein"],
      window.foodCategories.EN.Drink
    ),
    actionState: {
      Cake: [ "elegantly plated", "frosted", "sprinkled with nuts", "just baked", "sliced", "layered", "drizzled with syrup", "dusting powdered sugar", "decorated with fruits", "cut open" ],
      Vegetable: [ "freshly chopped", "lightly sautéed", "tossed", "mixed", "steamed", "roasted", "seasoned", "garnished", "blanched", "served chilled" ],
      "Side Dish": [ "crispy", "juicy", "golden brown", "marinated", "grilled", "spicy", "glazed", "stacked high", "breaded", "smoked" ],
      "Rice/Protein": [ "sliced", "overflowing", "melting cheese", "dripping sauce", "crispy crust", "layered with toppings", "charred", "served piping hot", "juicy", "topped with herbs", "freshly baked", "double stacked" ],
      Drink: [ "iced", "steaming hot", "shaken", "layered", "frothed", "whipped", "garnished", "swirling", "with bubbles", "overflowing" ],
      default: [ "freshly served", "plated", "garnished", "decorated" ]
    },
    servingSurface: {
      Cake: [ "cake stand", "ceramic plate", "vintage platter", "marble board", "golden tray", "glass plate" ],
      Vegetable: [ "bowl", "wooden platter", "ceramic plate", "salad bowl", "glass bowl" ],
      "Side Dish": [ "serving basket", "ceramic dish", "wooden board", "metal tray", "paper wrap" ],
      "Rice/Protein": [ "pizza pan", "burger basket", "wooden platter", "ceramic plate", "cardboard box", "glass plate", "metal tray" ],
      Drink: [ "glass", "mug", "tumbler", "jar", "cup", "bottle" ],
      default: [ "plate", "bowl", "tray", "platter" ]
    },
    dynamicEffect: {
      Cake: [ "falling crumbs", "dripping chocolate", "swirling cream", "powdered sugar falling", "fruit slices tumbling" ],
      Vegetable: [ "dripping dressing", "sprinkled seeds", "fresh herbs falling", "steam rising", "splash of vinaigrette" ],
      "Side Dish": [ "sizzling", "steam rising", "falling spices", "dripping sauce", "crunchy flakes flying" ],
      "Rice/Protein": [ "melting cheese", "dripping sauce", "steaming", "crumbs falling", "splashing ketchup", "swirling herbs", "rising steam" ],
      Drink: [ "swirling ice", "splashing liquid", "bubbles rising", "steam curling", "fruit slices floating" ],
      default: [ "steam rising", "splashing", "crumbs falling" ]
    },
    propElements: {
      Cake: [ "fresh berries", "mint leaves", "fork and knife", "cake server", "flower petals", "lace napkin" ],
      Vegetable: [ "fresh herbs", "lemon wedge", "wooden spoon", "linen napkin", "olive oil", "whole spices" ],
      "Side Dish": [ "dipping sauce", "salad greens", "cutlery", "pickles", "potato chips", "parsley" ],
      "Rice/Protein": [ "tomato slices", "lettuce", "cheese slice", "jalapeno", "sauce cup", "wooden fork", "onion rings", "fries", "pickle", "herbs" ],
      Drink: [ "straw", "citrus slice", "mint sprig", "ice cubes", "umbrella", "coaster" ],
      default: [ "herbs", "cutlery", "napkin", "lemon wedge" ]
    },
    cameraAngle: [
      "top-down", "45° angle", "extreme close-up", "eye-level", "side profile", "low angle", "overhead", "macro", "diagonal", "dynamic tilt",
      "bird-eye", "worm-eye", "three-quarters", "skewed angle", "symmetric angle", "off-center", "vertical", "high angle", "low angle", "frontal"
    ],
    lightingType: [
      "natural light", "dramatic backlight", "moody low-key", "bright studio", "warm candlelight", "cool ambient", "soft sidelight", "spotlight", "shadow play", "color filter",
      "morning light", "evening light", "dimmed light", "window light", "hanging lamp", "softbox light", "neon light", "kitchen lamp", "silhouette light", "reflective light"
    ],
    backdropType: [
      "dark textured backdrop", "bright pastel surface", "wooden table", "vintage fabric", "marble backdrop", "plain white background", "neutral gradient", "patterned tiles", "outdoor scene", "kraft paper",
      "rustic backdrop", "stone surface", "batik cloth", "granite surface", "tropical leaves", "woven bamboo", "linen cloth", "glass surface", "ceramic backdrop", "blurred photo background"
    ],
    moodAtmosphere: [
      "cozy and warm", "vibrant and energetic", "luxurious and elegant", "fresh and lively", "traditional", "romantic", "minimalist clean", "urban modern", "festive", "mysterious",
      "relaxed", "casual", "nostalgic", "exclusive", "party crowd", "slow living", "picnic", "family reunion", "tropical vibe", "countryside atmosphere"
    ],
    colorPalette: [
      "earth tones", "bright colors", "pastel hues", "monochrome", "gold accents", "cool blues", "warm reds", "natural greens", "neutral greys", "tropical colors",
      "traditional palette", "brown palette", "yellow palette", "leafy green palette", "orange palette", "purple palette", "sea blue palette", "pink palette", "black & white palette", "natural palette"
    ],
    compositionStyle: [
      "minimalist centered", "editorial flatlay", "commercial advertising", "balanced asymmetry", "dynamic diagonal", "rule of thirds", "close crop", "layered depth", "negative space", "pattern repetition",
      "zigzag composition", "frame-in-frame", "spiral composition", "grid composition", "overlay composition", "layered composition", "circular composition", "pyramid composition", "symmetric composition", "diagonal composition"
    ],
    emotionKeywords: [
      "mouth-watering", "inviting", "indulgent", "refreshing", "comforting", "festive", "bold", "delicate", "tempting", "serene",
      "nostalgic", "calming", "pampering", "exciting", "soothing", "cooling", "thrilling", "entertaining", "joyful", "captivating"
    ]
  },
  ID: {
    mainSubject: [].concat(
      window.foodCategories.ID.Kue,
      window.foodCategories.ID.Sayur,
      window.foodCategories.ID.Lauk,
      window.foodCategories.ID["Nasi/Protein"],
      window.foodCategories.ID.Minuman
    ),
    actionState: {
      Kue: [ "tersaji rapi", "berlapis-lapis", "bertabur kacang", "baru dipanggang", "dipotong", "digulung", "ditaburi gula halus", "dihias buah", "dipotong terbuka" ],
      Sayur: [ "baru dicincang", "ditumis ringan", "diaduk", "dicampur", "dikukus", "dipanggang", "dibumbui", "dihias", "direbus", "disajikan dingin" ],
      Lauk: [ "renyah", "berair", "cokelat keemasan", "dimarinasi", "dipanggang", "pedas", "berlapis saus", "ditumpuk tinggi", "berbalut tepung", "diasap" ],
      "Nasi/Protein": [ "dipotong", "berlimpah", "keju meleleh", "saus menetes", "kulit renyah", "berlapis topping", "terpanggang", "disajikan panas", "berair", "ditaburi daun", "baru dipanggang", "double stack", "dengan topping keju", "dengan saus tomat" ],
      Minuman: [ "ber-es", "panas", "diaduk", "berlapis", "berbusa", "dikocok", "dihias", "berputar", "bergelembung", "melimpah" ],
      default: [ "baru disajikan", "ditata", "dihias", "dekoratif" ]
    },
    servingSurface: {
      Kue: [ "tatakan kue", "piring keramik", "nampan vintage", "papan marmer", "dulang emas", "piring kaca" ],
      Sayur: [ "mangkuk", "papan kayu", "piring keramik", "mangkuk salad", "mangkuk kaca" ],
      Lauk: [ "keranjang saji", "wadah keramik", "papan kayu", "nampan logam", "bungkus kertas" ],
      "Nasi/Protein": [ "pan pizza", "keranjang burger", "papan kayu", "piring keramik", "kotak kardus", "piring kaca", "nampan logam" ],
      Minuman: [ "gelas", "mug", "tumbler", "toples", "cangkir", "botol" ],
      default: [ "piring", "mangkuk", "nampan", "dulang" ]
    },
    dynamicEffect: {
      Kue: [ "remah jatuh", "cokelat meleleh", "krim berputar", "gula halus beterbangan", "potongan buah jatuh" ],
      Sayur: [ "dressing menetes", "biji bertabur", "daun segar jatuh", "asap naik", "percikan vinaigrette" ],
      Lauk: [ "mendesis", "asap naik", "bumbu berjatuhan", "saus menetes", "serpihan renyah beterbangan" ],
      "Nasi/Protein": [ "keju meleleh", "saus menetes", "asap mengepul", "remah jatuh", "saus tomat memercik", "herbal berputar", "asap naik" ],
      Minuman: [ "es berputar", "cairan memercik", "gelembung naik", "asap melingkar", "potongan buah terapung" ],
      default: [ "asap naik", "percikan", "remah jatuh" ]
    },
    propElements: {
      Kue: [ "buah segar", "daun mint", "garpu dan pisau", "alat kue", "kelopak bunga", "serbet renda" ],
      Sayur: [ "daun segar", "irisan lemon", "sendok kayu", "serbet linen", "minyak zaitun", "rempah utuh" ],
      Lauk: [ "saus celup", "salad", "alat makan", "acar", "keripik kentang", "peterseli" ],
      "Nasi/Protein": [ "irisan tomat", "selada", "lembaran keju", "irisan jalapeno", "cup saus", "garpu kayu", "onion ring", "kentang goreng", "acar", "herbal" ],
      Minuman: [ "sedotan", "irisan jeruk", "daun mint", "es batu", "payung kecil", "tatakan gelas" ],
      default: [ "herbal", "alat makan", "serbet", "irisan lemon" ]
    },
    cameraAngle: [
      "top-down", "45° angle", "extreme close-up", "eye-level", "side profile", "low angle", "overhead", "macro", "diagonal", "dynamic tilt",
      "bird-eye", "worm-eye", "three-quarters", "skewed angle", "symmetric angle", "off-center", "vertical", "high angle", "low angle", "frontal"
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
  }
};

// window.uiText & window.slotGuide: tetap seperti implementasi multi-lang sebelumnya
