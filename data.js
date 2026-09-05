/* OpenNites — mock data layer (original activities) */

const ACTIVITIES = [
  {
    id: "solo-roulette",
    name: "Solo Pleasure Roulette",
    tag: "Solo",
    blurb: "Roll for position, method, duration and finish. Hand control over to chance for a solo session.",
    source: "Original OpenNites activity.",
    photos: [
      "https://picsum.photos/seed/opennite-solo1/900/675",
      "https://picsum.photos/seed/opennite-solo2/900/675",
      "https://picsum.photos/seed/opennite-solo3/900/675",
      "https://picsum.photos/seed/opennite-solo4/900/675",
      "https://picsum.photos/seed/opennite-solo5/900/675"
    ]
  },
  {
    id: "couples-dice",
    name: "Couples Dice Night",
    tag: "Couples",
    blurb: "Partners roll for positions, toys, locations and who takes control. Built for communication and play.",
    source: "Original OpenNites activity.",
    photos: [
      "https://picsum.photos/seed/opennite-couple1/900/675",
      "https://picsum.photos/seed/opennite-couple2/900/675",
      "https://picsum.photos/seed/opennite-couple3/900/675",
      "https://picsum.photos/seed/opennite-couple4/900/675",
      "https://picsum.photos/seed/opennite-couple5/900/675"
    ]
  },
  {
    id: "sensory-overload",
    name: "Sensory Overload Roulette",
    tag: "Sensory",
    blurb: "Blindfold, temperature, light restraint, textures and sound. Decide which senses get heightened or denied.",
    source: "Original OpenNites activity — consent focused.",
    photos: [
      "https://picsum.photos/seed/opennite-sense1/900/675",
      "https://picsum.photos/seed/opennite-sense2/900/675",
      "https://picsum.photos/seed/opennite-sense3/900/675",
      "https://picsum.photos/seed/opennite-sense4/900/675",
      "https://picsum.photos/seed/opennite-sense5/900/675"
    ]
  },
  {
    id: "roleplay-draw",
    name: "Roleplay Draw",
    tag: "Fantasy",
    blurb: "Draw a character, setting, power dynamic and time limit. Step into a scene together or alone.",
    source: "Original OpenNites activity.",
    photos: [
      "https://picsum.photos/seed/opennite-role1/900/675",
      "https://picsum.photos/seed/opennite-role2/900/675",
      "https://picsum.photos/seed/opennite-role3/900/675",
      "https://picsum.photos/seed/opennite-role4/900/675",
      "https://picsum.photos/seed/opennite-role5/900/675"
    ]
  },
  {
    id: "edging-challenge",
    name: "Edging Challenge Board",
    tag: "Control",
    blurb: "Roll for number of edges, timing, tools and release conditions. For those who enjoy delayed gratification.",
    source: "Original OpenNites activity.",
    photos: [
      "https://picsum.photos/seed/opennite-edge1/900/675",
      "https://picsum.photos/seed/opennite-edge2/900/675",
      "https://picsum.photos/seed/opennite-edge3/900/675",
      "https://picsum.photos/seed/opennite-edge4/900/675",
      "https://picsum.photos/seed/opennite-edge5/900/675"
    ]
  },
  {
    id: "public-risk",
    name: "Public Risk Light",
    tag: "Exhibition",
    blurb: "Low-to-medium risk public or semi-public challenges. Always prioritises consent, legality and personal safety.",
    source: "Original OpenNites activity — safety-first.",
    photos: [
      "https://picsum.photos/seed/opennite-public1/900/675",
      "https://picsum.photos/seed/opennite-public2/900/675",
      "https://picsum.photos/seed/opennite-public3/900/675",
      "https://picsum.photos/seed/opennite-public4/900/675",
      "https://picsum.photos/seed/opennite-public5/900/675"
    ]
  },
  {
    id: "toy-roulette",
    name: "Toy & Tool Roulette",
    tag: "Gear",
    blurb: "Decide which toys come out, in what order, and under what rules.",
    source: "Original OpenNites activity.",
    photos: [
      "https://picsum.photos/seed/opennite-toy1/900/675",
      "https://picsum.photos/seed/opennite-toy2/900/675",
      "https://picsum.photos/seed/opennite-toy3/900/675",
      "https://picsum.photos/seed/opennite-toy4/900/675",
      "https://picsum.photos/seed/opennite-toy5/900/675"
    ]
  },
  {
    id: "body-focus",
    name: "Body Focus Roulette",
    tag: "Sensation",
    blurb: "Which body part, type of touch, intensity and duration. Great for exploring preferences.",
    source: "Original OpenNites activity — educational.",
    photos: [
      "https://picsum.photos/seed/opennite-body1/900/675",
      "https://picsum.photos/seed/opennite-body2/900/675",
      "https://picsum.photos/seed/opennite-body3/900/675",
      "https://picsum.photos/seed/opennite-body4/900/675",
      "https://picsum.photos/seed/opennite-body5/900/675"
    ]
  }
];

const GALLERY_SEED = [
  { who: "Thando", img: "https://picsum.photos/seed/openniteg1/600/600", caption: "Solo Roulette had me for almost an hour." },
  { who: "Karabo", img: "https://picsum.photos/seed/openniteg2/600/600", caption: "Couples Dice Night is now a weekly thing." },
  { who: "Lerato", img: "https://picsum.photos/seed/openniteg3/600/600", caption: "Sensory Overload + ice = intense." },
  { who: "Sipho", img: "https://picsum.photos/seed/openniteg4/600/600", caption: "Edging Challenge is dangerous (in the best way)." },
  { who: "Naledi", img: "https://picsum.photos/seed/openniteg5/600/600", caption: "Roleplay Draw gave us a scene we never planned." },
  { who: "Anonymous", img: "https://picsum.photos/seed/openniteg6/600/600", caption: "Toy Roulette forced me to use the whole drawer." }
];

const LIVE_FEED_SEED = [
  { who: "Zanele", when: "just now", text: "Just finished Solo Pleasure Roulette. That last roll was brutal." },
  { who: "Bongani", when: "3m ago", text: "Anyone else on the Edging Challenge this week?" },
  { who: "Anonymous", when: "7m ago", text: "Couples Dice Night is now weekly in our house." },
  { who: "Precious", when: "12m ago", text: "Sensory Overload + good playlist = recommended." },
  { who: "Tumi", when: "18m ago", text: "Public Risk Light is intense even on soft settings. Stay safe." },
  { who: "Anonymous", when: "25m ago", text: "Donated. Keep the free activities coming." }
];

const QNA = [
  {
    q: "What is OpenNites?",
    a: "OpenNites is a wellness and education platform under Jozi Nites. We offer safe spaces for adult conversations, interactive activities, creator support and stigma reduction in South Africa."
  },
  {
    q: "What are these roulette-style activities?",
    a: "Original interactive challenges. You (or you and a partner) roll or draw to decide elements of a session. All emphasise consent, communication and personal boundaries."
  },
  {
    q: "Is everything free?",
    a: "Yes. Activities, gallery and educational content are free. The donate page is optional support for hosting and development."
  },
  {
    q: "Can I submit photos or ideas?",
    a: "Yes. Share photos via the gallery and suggest activities through the contact form. Everything is moderated."
  },
  {
    q: "How do you handle safety and consent?",
    a: "Every activity is framed with consent and limits in mind. Higher-risk activities include safety notes. We do not allow illegal or non-consensual content."
  },
  {
    q: "Where else can I find the community?",
    a: "WhatsApp group, FetLife (JoziNite Crew), and Tag-It. Links are in the footer and Connect section."
  }
];
