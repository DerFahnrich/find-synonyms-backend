import { WordNodesObject } from "../types";

export const words: WordNodesObject = {
  happy: { word: "happy", synonyms: new Set(["joyful", "pleased", "delighted"]) },
  sad: { word: "sad", synonyms: new Set(["unhappy", "miserable", "depressed"]) },
  angry: { word: "angry", synonyms: new Set(["mad", "irate", "furious"]) },
  scared: { word: "scared", synonyms: new Set(["frightened", "afraid", "terrified"]) },
  tired: { word: "tired", synonyms: new Set(["exhausted", "fatigued", "weary"]) },
  hungry: { word: "hungry", synonyms: new Set(["starving", "ravenous", "famished"]) },
  thirsty: { word: "thirsty", synonyms: new Set(["dehydrated", "parched", "dry"]) },
  cold: { word: "cold", synonyms: new Set(["chilly", "frigid", "freezing"]) },
  hot: { word: "hot", synonyms: new Set(["warm", "boiling", "scorching"]) },
  love: { word: "love", synonyms: new Set(["adore", "cherish", "worship"]) },
  hate: { word: "hate", synonyms: new Set(["loathe", "detest", "despise"]) },
  afraid: { word: "afraid", synonyms: new Set(["scared", "fearful", "terrified"]) },
  brave: { word: "brave", synonyms: new Set(["courageous", "fearless", "valiant"]) },
  calm: { word: "calm", synonyms: new Set(["serene", "peaceful", "relaxed"]) },
  anxious: { word: "anxious", synonyms: new Set(["worried", "nervous", "uneasy"]) },
  curious: { word: "curious", synonyms: new Set(["inquisitive", "interested", "intrigued"]) },
  bored: { word: "bored", synonyms: new Set(["uninterested", "apathetic", "indifferent"]) },
  Lonely: { word: "Lonely", synonyms: new Set(["Isolated", "Alone", "Desolate", "Abandoned"]) },
  Anxious: { word: "Anxious", synonyms: new Set(["Nervous", "Uneasy", "Worried", "Concerned"]) },
  Angry: { word: "Angry", synonyms: new Set(["Furious", "Rageful", "Irate", "Enraged"]) },
  Brave: { word: "Brave", synonyms: new Set(["Courageous", "Fearless", "Valiant", "Heroic"]) },
  Calm: { word: "Calm", synonyms: new Set(["Peaceful", "Serene", "Tranquil", "Relaxed"]) },
  Confused: {
    word: "Confused",
    synonyms: new Set(["Baffled", "Perplexed", "Muddled", "Mixed up"]),
  },
  Content: { word: "Content", synonyms: new Set(["Happy", "Satisfied", "Pleased", "Fulfilled"]) },
  Curious: {
    word: "Curious",
    synonyms: new Set(["Inquisitive", "Interested", "Eager", "Questioning"]),
  },
  Depressed: {
    word: "Depressed",
    synonyms: new Set(["Sad", "Miserable", "Downhearted", "Hopeless"]),
  },
  Determined: {
    word: "Determined",
    synonyms: new Set(["Resolute", "Persistent", "Tenacious", "Committed"]),
  },
  Disappointed: {
    word: "Disappointed",
    synonyms: new Set(["Let down", "Dissatisfied", "Unsatisfied", "Regretful"]),
  },
  Distracted: {
    word: "Distracted",
    synonyms: new Set(["Absent-minded", "Preoccupied", "Inattentive", "Unfocused"]),
  },
  Embarrassed: {
    word: "Embarrassed",
    synonyms: new Set(["Ashamed", "Humiliated", "Mortified", "Red-faced"]),
  },
  Empathetic: {
    word: "Empathetic",
    synonyms: new Set(["Compassionate", "Understanding", "Sympathetic", "Kind-hearted"]),
  },
  Enthusiastic: {
    word: "Enthusiastic",
    synonyms: new Set(["Passionate", "Excited", "Eager", "Zealous"]),
  },
  Excited: { word: "Excited", synonyms: new Set(["Thrilled", "Eager", "Animated", "Aroused"]) },
  Frustrated: {
    word: "Frustrated",
    synonyms: new Set(["Baffled", "Disappointed", "Discouraged", "Displeased"]),
  },
  Grateful: {
    word: "Grateful",
    synonyms: new Set(["Thankful", "Appreciative", "Indebted", "Obliged"]),
  },
  Grief: { word: "Grief", synonyms: new Set(["Sorrow", "Sadness", "Heartache", "Misery"]) },
  Guilty: {
    word: "Guilty",
    synonyms: new Set(["Ashamed", "Remorseful", "Culpable", "Blameworthy"]),
  },

  delighted: {
    word: "delighted",
    synonyms: new Set(["thrilled", "pleased", "joyful", "happy", "content", "satisfied"]),
  },
  displeased: {
    word: "displeased",
    synonyms: new Set(["dissatisfied", "unhappy", "annoyed", "irritated", "frustrated", "upset"]),
  },
  furious: {
    word: "furious",
    synonyms: new Set(["angry", "enraged", "livid", "incensed", "irritated", "fuming"]),
  },
  lonely: {
    word: "lonely",
    synonyms: new Set(["isolated", "abandoned", "deserted", "alone", "forlorn", "solitary"]),
  },
  relieved: {
    word: "relieved",
    synonyms: new Set(["calm", "untroubled", "pleased", "glad", "grateful", "happy"]),
  },
  embarrassed: {
    word: "embarrassed",
    synonyms: new Set([
      "ashamed",
      "humiliated",
      "mortified",
      "awkward",
      "self-conscious",
      "flustered",
    ]),
  },
  nostalgic: {
    word: "nostalgic",
    synonyms: new Set([
      "sentimental",
      "wistful",
      "rememorative",
      "yearning",
      "longing",
      "melancholy",
    ]),
  },
  energetic: {
    word: "energetic",
    synonyms: new Set(["vital", "vigorous", "dynamic", "spirited", "active", "lively"]),
  },
  inquisitive: {
    word: "inquisitive",
    synonyms: new Set(["curious", "interested", "nosy", "prying", "probing", "investigative"]),
  },
  disgusted: {
    word: "disgusted",
    synonyms: new Set(["revolted", "nauseated", "sickened", "repelled", "appalled", "horrified"]),
  },
  apprehensive: {
    word: "apprehensive",
    synonyms: new Set(["anxious", "uneasy", "worried", "nervous", "concerned", "hesitant"]),
  },
  optimistic: {
    word: "optimistic",
    synonyms: new Set(["positive", "hopeful", "confident", "upbeat", "encouraged", "bullish"]),
  },
  frustrated: {
    word: "frustrated",
    synonyms: new Set(["disappointed", "annoyed", "irritated", "angry", "upset", "exasperated"]),
  },
  excited: { word: "excited", synonyms: new Set(["enthusiastic", "thrilled", "eager"]) },
  nervous: { word: "nervous", synonyms: new Set(["anxious", "worried", "uneasy"]) },
  shy: { word: "shy", synonyms: new Set(["bashful", "timid", "reserved"]) },
  proud: { word: "proud", synonyms: new Set(["self-confident", "conceited", "arrogant"]) },
  ashamed: { word: "ashamed", synonyms: new Set(["embarrassed", "guilty", "regretful"]) },
  forgive: { word: "forgive", synonyms: new Set(["pardon", "excuse", "absolve"]) },
  apologize: { word: "apologize", synonyms: new Set(["say sorry", "regret", "make amends"]) },
  relax: { word: "relax", synonyms: new Set(["unwind", "chill out", "rest"]) },
  exercise: { word: "exercise", synonyms: new Set(["work out", "train", "do sports"]) },
  study: { word: "study", synonyms: new Set(["learn", "read", "research"]) },
  sing: { word: "sing", synonyms: new Set(["vocalize", "croon", "warble"]) },
  dance: { word: "dance", synonyms: new Set(["move", "groove", "shuffle"]) },
  cook: { word: "cook", synonyms: new Set(["prepare food", "bake", "grill"]) },
  clean: { word: "clean", synonyms: new Set(["tidy up", "scrub", "wash"]) },
  work: { word: "work", synonyms: new Set(["labor", "toil", "execute"]) },
  play: { word: "play", synonyms: new Set(["have fun", "enjoy", "entertain"]) },
  read: { word: "read", synonyms: new Set(["peruse", "scan", "study"]) },
  write: { word: "write", synonyms: new Set(["scribble", "jot", "compose"]) },
  dream: { word: "dream", synonyms: new Set(["imagine", "fantasize", "daydream"]) },
  think: { word: "think", synonyms: new Set(["ponder", "consider", "contemplate"]) },
  circle: {
    word: "circle",
    synonyms: new Set(["ring", "round", "loop", "cycle"]),
  },
  square: {
    word: "square",
    synonyms: new Set(["box", "cube", "block", "quadrate"]),
  },
  triangle: {
    word: "triangle",
    synonyms: new Set(["trine", "trinity", "triptych", "triad"]),
  },
  rectangle: {
    word: "rectangle",
    synonyms: new Set(["oblong", "quad", "quadrate", "parallelogram"]),
  },
  pentagon: {
    word: "pentagon",
    synonyms: new Set(["five-sided", "quintagon", "quintile", "quincunx"]),
  },
  hexagon: {
    word: "hexagon",
    synonyms: new Set(["six-sided", "hexahedron", "hexangle", "sexangle"]),
  },
  octagon: {
    word: "octagon",
    synonyms: new Set(["eight-sided", "octangle", "octahedron", "octameter"]),
  },
  rhombus: {
    word: "rhombus",
    synonyms: new Set(["diamond", "lozenge", "parallelogram", "quadrilateral"]),
  },
  sphere: {
    word: "sphere",
    synonyms: new Set(["ball", "globe", "orb", "planet"]),
  },
  cylinder: {
    word: "cylinder",
    synonyms: new Set(["barrel", "pipe", "tube", "canister"]),
  },
  cone: {
    word: "cone",
    synonyms: new Set(["pyramid", "taper", "funnel", "wedge"]),
  },
  oval: {
    word: "oval",
    synonyms: new Set(["ellipse", "oblong", "racetrack", "egg-shaped"]),
  },
  diamond: {
    word: "diamond",
    synonyms: new Set(["rhombus", "gem", "jewel", "precious stone"]),
  },
  pear: {
    word: "pear",
    synonyms: new Set(["teardrop", "fruit", "oblong", "bulbous"]),
  },
  cube: {
    word: "cube",
    synonyms: new Set(["box", "block", "square", "hexahedron"]),
  },

  crescent: {
    word: "crescent",
    synonyms: new Set(["moon", "arc", "lune", "horns"]),
  },
  red: {
    word: "red",
    synonyms: new Set(["crimson", "scarlet", "maroon", "ruby", "cherry"]),
  },
  blue: {
    word: "blue",
    synonyms: new Set(["navy", "sapphire", "azure", "cerulean", "cobalt"]),
  },
  green: {
    word: "green",
    synonyms: new Set(["lime", "olive", "emerald", "mint", "chartreuse"]),
  },
  yellow: {
    word: "yellow",
    synonyms: new Set(["gold", "lemon", "amber", "canary", "mustard"]),
  },
  orange: {
    word: "orange",
    synonyms: new Set(["tangerine", "peach", "coral", "rust", "apricot"]),
  },
  purple: {
    word: "purple",
    synonyms: new Set(["violet", "lavender", "mauve", "plum", "lilac"]),
  },
  pink: {
    word: "pink",
    synonyms: new Set(["fuchsia", "magenta", "rose", "blush", "salmon"]),
  },
  brown: {
    word: "brown",
    synonyms: new Set(["beige", "cocoa", "coffee", "sepia", "tan"]),
  },
  gray: {
    word: "gray",
    synonyms: new Set(["silver", "charcoal", "ash", "pewter", "slate"]),
  },
  white: {
    word: "white",
    synonyms: new Set(["ivory", "cream", "snow", "pearl", "vanilla"]),
  },
  black: {
    word: "black",
    synonyms: new Set(["ebony", "charcoal", "coal", "jet", "onyx"]),
  },
  turquoise: {
    word: "turquoise",
    synonyms: new Set(["teal", "aquamarine", "blue-green", "mint", "cyan"]),
  },
  indigo: {
    word: "indigo",
    synonyms: new Set(["navy-blue", "blue-violet", "deep-blue", "sapphire", "midnight"]),
  },
  magenta: {
    word: "magenta",
    synonyms: new Set(["hot-pink", "fuchsia", "purple-pink", "rose", "violet-red"]),
  },
  khaki: {
    word: "khaki",
    synonyms: new Set(["olive", "brownish-yellow", "beige", "tan", "sand"]),
  },
  maroon: {
    word: "maroon",
    synonyms: new Set(["burgundy", "dark-red", "cranberry", "rust", "aubergine"]),
  },
  navy: {
    word: "navy",
    synonyms: new Set(["dark-blue", "indigo", "midnight-blue", "sapphire", "blue-black"]),
  },
  ochre: {
    word: "ochre",
    synonyms: new Set(["yellow-brown", "tan", "amber", "buff", "beige"]),
  },
  olive: {
    word: "olive",
    synonyms: new Set(["green-brown", "khaki", "moss", "sage", "chartreuse"]),
  },
  beige: {
    word: "beige",
    synonyms: new Set(["cream", "taupe", "sand", "fawn", "buff"]),
  },
};
