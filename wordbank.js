// Word banks for each slot

window.wordBanks = {
  mainSubject: [
    "sushi platter", "chocolate lava cake", "iced coffee", "fruit tart", "roast chicken",
    "bubble tea", "avocado toast", "ramen bowl", "grilled steak", "matcha parfait"
  ],
  actionState: [
    "elegantly plated", "dripping with sauce", "midair falling", "freshly sliced",
    "smoking hot", "melting", "glazed", "overflowing", "frosted", "stacked high"
  ],
  servingSurface: [
    "ceramic plate", "rustic wooden board", "crystal glass bowl", "black slate",
    "woven basket", "marble slab", "porcelain dish", "bamboo tray", "metal pan", "paper wrap"
  ],
  dynamicEffect: [
    "splashing milk", "falling crumbs", "swirling steam", "dripping chocolate",
    "floating herbs", "rising bubbles", "spinning ice", "flying powder sugar", "melting butter", "raining sprinkles", ""
  ],
  cameraAngle: [
    "top-down", "45° angle", "extreme close-up", "eye-level", "side profile",
    "low angle", "overhead", "macro", "diagonal", "dynamic tilt"
  ],
  propElements: [
    "fresh herbs", "silver cutlery", "linen napkin", "ice cubes", "flower petals",
    "whole spices", "wooden chopsticks", "citrus slices", "mini flags", "handwritten menu"
  ],
  lightingType: [
    "soft diffused side lighting", "dramatic backlight", "moody low-key", "natural sunlight",
    "bright studio", "warm candlelight", "cool ambient", "spotlight", "shadow play", "color gels"
  ],
  backdropType: [
    "dark textured backdrop", "bright pastel surface", "marble slab", "wood grain table",
    "concrete texture", "vintage fabric", "neutral gradient", "patterned tile", "canvas", "outdoor scene"
  ],
  moodAtmosphere: [
    "cozy and warm", "vibrant and energetic", "luxurious and elegant", "fresh and lively",
    "rustic charm", "romantic", "minimalist clean", "urban chic", "festive", "mysterious"
  ],
  colorPalette: [
    "earthy tones", "vivid brights", "pastel hues", "monochrome", "golden highlights",
    "cool blues", "warm reds", "natural greens", "neutral greys", "tropical colors"
  ],
  compositionStyle: [
    "minimalist centered", "editorial flatlay", "commercial advertising", "asymmetrical balance",
    "dynamic diagonal", "rule of thirds", "close crop", "layered depth", "negative space", "pattern repetition"
  ],
  emotionKeywords: [
    "mouth-watering", "inviting", "indulgent", "refreshing", "comforting",
    "celebratory", "bold", "delicate", "tempting", "serene"
  ]
};

window.slotGuide = [
  {slot: "[Main Subject]", desc: "Main food/drink you want featured", ex: "sushi platter, chocolate lava cake, iced coffee"},
  {slot: "[Action/State]", desc: "What’s happening with the food", ex: "elegantly plated, dripping with sauce, midair falling"},
  {slot: "[Serving Surface]", desc: "Dish or surface where food is placed", ex: "ceramic plate, rustic wooden board, crystal glass bowl"},
  {slot: "[Dynamic Effect]", desc: "Optional movement or effect", ex: "splashing milk, falling crumbs, swirling steam"},
  {slot: "[Camera Angle]", desc: "How the camera views the food", ex: "top-down, 45° angle, extreme close-up, eye-level"},
  {slot: "[Prop Elements]", desc: "Decorative or contextual items around food", ex: "fresh herbs, silver cutlery, linen napkin, ice cubes"},
  {slot: "[Lighting Type]", desc: "Style and direction of lighting", ex: "soft diffused side lighting, dramatic backlight, moody low-key"},
  {slot: "[Backdrop Type]", desc: "Background look", ex: "dark textured backdrop, bright pastel surface, marble slab"},
  {slot: "[Mood/Atmosphere Style]", desc: "Emotional tone of the shot", ex: "cozy and warm, vibrant and energetic, luxurious and elegant"},
  {slot: "[Color Palette]", desc: "Palette warna", ex: "earthy tones, vivid brights, pastel hues, monochrome"},
  {slot: "[Composition Style]", desc: "Framing and layout style", ex: "minimalist centered, editorial flatlay, commercial advertising"},
  {slot: "[Emotion/Mood Keywords]", desc: "Final touch of emotional language", ex: "mouth-watering, inviting, indulgent, refreshing"}
];
