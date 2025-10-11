// wordbank.js - Multi Language (EN/ID) + Slot relevance per category + UI text + slot guide

window.uiText = {
  EN: {
    title: "Analyze Food Photo & Prompt Generator",
    mainSubject: "Main Subject:",
    actionState: "Action/State:",
    servingSurface: "Serving Surface:",
    dynamicEffect: "Dynamic Effect:",
    cameraAngle: "Camera Angle:",
    propElements: "Prop Elements:",
    lightingType: "Lighting Type:",
    backdropType: "Backdrop Type:",
    moodAtmosphere: "Mood/Atmosphere Style:",
    colorPalette: "Color Palette:",
    compositionStyle: "Composition Style:",
    emotionKeywords: "Emotion/Mood Keywords:",
    generate: "Generate Prompt",
    random: "Random Prompt",
    output: "Prompt Output",
    note: "* Prompt can be manually edited, or click Generate/Random to overwrite.",
    categories: {
      All: "All", Kue: "Cake", Sayur: "Vegetable", Lauk: "Side Dish", "Nasi/Protein": "Rice/Protein", Minuman: "Drink"
    }
  },
  ID: {
    title: "Analyze Food Photo & Prompt Generator",
    mainSubject: "Makanan/Minuman Utama:",
    actionState: "Aksi/Kondisi:",
    servingSurface: "Wadah/Sajian:",
    dynamicEffect: "Efek Dinamis:",
    cameraAngle: "Sudut Kamera:",
    propElements: "Elemen Properti:",
    lightingType: "Jenis Pencahayaan:",
    backdropType: "Tipe Latar Belakang:",
    moodAtmosphere: "Gaya Suasana:",
    colorPalette: "Nuansa Warna:",
    compositionStyle: "Gaya Komposisi:",
    emotionKeywords: "Kata Kunci Emosi:",
    generate: "Buat Prompt",
    random: "Acak Prompt",
    output: "Prompt Output",
    note: "* Prompt dapat diedit manual, atau klik Buat/Acak untuk menimpa.",
    categories: {
      All: "Semua", Kue: "Kue", Sayur: "Sayur", Lauk: "Lauk", "Nasi/Protein": "Nasi/Protein", Minuman: "Minuman"
    }
  }
};

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

window.wordBanks = {
  EN: {
    mainSubject: [].concat(
      window.foodCategories.EN.Cake,
      window.foodCategories.EN.Vegetable,
      window.foodCategories.EN["Side Dish"],
      window.foodCategories.EN["Rice/Protein"],
      window.foodCategories.EN.Drink
    ),
    action
