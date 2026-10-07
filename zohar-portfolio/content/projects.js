/*
  EDIT PROJECTS HERE.
  Reorder the objects in this array to reorder projects on the site.

  Asset paths are relative to index.html.
  For hover previews, use a short MP4 when possible. A GIF can be used as
  the fallback preview instead. Animated media is only loaded on hover.
*/

const projects = [
  {
    id: "moduwar",
    title: "MODUWAR",
    meta: "UNITY · RTS · EARLY ACCESS · BIOHEX STUDIOS",
    year: "",
    summary: "An adaptive RTS where you control a one-organism army, which I got to work on as a Unity/C# developer.",
    description: `Moduwar is an adaptive RTS by Biohex Studios where you control the Modu, splitting, merging, and growing new organs to build your army. The game launched in Early Access on Steam.

Among my contributions were designing and implementing a dynamic Map Bounds system for staged level progression, extending Fog of War to handle visibility rules across the game's different gameplay entities and effects, and overhauling merge targeting to provide reliable, context-aware merge placement from different approach angles.`,
    cover: "assets/moduwar/cover.jpg",
    previewVideo: "assets/moduwar/preview.mp4",
    //previewGif: "assets/moduwar/preview.gif",
    gallery: [
      { src: "assets/moduwar/01.jpg"},
      { src: "assets/moduwar/02.jpg"},
      { src: "assets/moduwar/03.jpg"},
      { src: "assets/moduwar/04.jpg"}
    ],
    video: "assets/moduwar/preview.mp4",
    links: [
      { label: "STEAM", url: "https://store.steampowered.com/app/923100/Moduwar/" }
    ]
  },
  {
    id: "spawnstorm",
    title: "SPAWNSTORM",
    meta: "UNITY · 2D RTS · CUSTOMIZATION",
    year: "2025",
    summary: "A fast-paced, one-lane RTS where rival wizards fight using customizable minions and spells.",
    description: `Spawnstorm is a one-lane RTS where rival wizards battle using customizable minions and spells. Minions are assembled from different body parts, allowing players to create different builds from up to 140 minion combinations, and different 9 spells across 9 levels.

The game was our final project for Game Design studies at the Open University of Israel. I handled the programming and game design, while Liza Burykina handled the art, UI, and visual design.`,
    cover: "assets/spawnstorm/cover.jpg",
    previewVideo: "assets/spawnstorm/preview.mp4",
    previewGif: "assets/spawnstorm/preview.gif",
    gallery: [
      { src: "assets/spawnstorm/01.png"},
      { src: "assets/spawnstorm/02.png", caption: "Minion customization" },
      { src: "assets/spawnstorm/03.png"},
      { src: "assets/spawnstorm/04.png"},
      { src: "assets/spawnstorm/05.png"},
      { src: "assets/spawnstorm/06.png", caption: "Spell selection" },
    ],
    video: "assets/spawnstorm/preview.mp4",
    links: [
      { label: "ITCH.IO", url: "https://jumper-cables.itch.io/spawnstorm" }
    ]
  },
  
     {
    id: "bubble-freezer",
    title: "BUBBLE FREEZER",
    meta: "S&BOX · ARCADE SURVIVAL",
    year: "2026",
    summary: "An arcade survival game inspired by Bubble Trouble and Pang.",
    description: `Me jumping on the roguelike trend. A tiny arcade shooter inspired by Bubble Trouble and Pang, where you control a snowman who must shoot projectiles to pop bouncing, splitting bubbles, leveling up and picking from a selection of perks to get stronger each run.

It was fun working within such tight constraints and scope, pushing against them with perks as far as I could without things spiraling out of hand.

Hosted on the s&box platform.`,
    cover: "assets/bubble-freezer/TitleCard.png",
    previewVideo: "assets/bubble-freezer/Preview.mp4",
    gallery: [
      { src: "assets/bubble-freezer/Screeshot (1).jpg"},
      { src: "assets/bubble-freezer/Screeshot (2).jpg"},
      { src: "assets/bubble-freezer/Screeshot (3).jpg"},
      { src: "assets/bubble-freezer/Screeshot (4).jpg"},
      { src: "assets/bubble-freezer/Screenshot (5).jpg"}
    ],
    video: "assets/bubble-freezer/Preview.mp4",
    links: []
  },
  {
    id: "hot-potato",
    title: "HOT POTATO",
    meta: "UNITY · GRID PUZZLE",
    year: "2026",
    summary: "A grid-based puzzle game about routing a potato through chefs and obstacles.",
    description: `Sample project description. Replace this with your own description and explain your gameplay programming and implementation work. Credit collaborators here if you want them visible in the project description.`,
    cover: "assets/hot-potato/cover.jpg",
    previewVideo: "assets/hot-potato/preview.mp4",
    previewGif: "assets/hot-potato/preview.gif",
    gallery: [
      { src: "assets/hot-potato/01.jpg", caption: "Optional screenshot caption." },
      { src: "assets/hot-potato/02.jpg", caption: "Optional screenshot caption." }
    ],
    video: "",
    links: []
  },
  {
    id: "cycle",
    title: "CYCLE",
    meta: "UNITY · TURN-BASED · CARD STRATEGY",
    year: "2025",
    summary: "A card game inspired by Canaanite mythology.",
    description: `Cycle is a card game where players build and adapt their deck as they progress through different stages. Combat centers around a simple strength/weakness system, rewarding players for building decks suited to the enemies they face.

The art and stages are inspired by Canaanite mythology, a morbid fixation of mine. The game features 24 cards, 16 enemies, 4 stages, and an endless mode.`,
    cover: "assets/cycle/cover.jpg",
    previewVideo: "assets/cycle/preview.mp4",
    previewGif: "assets/cycle/preview.gif",
    gallery: [
      { src: "assets/cycle/01.jpg", caption: "Optional screenshot caption." },
      { src: "assets/cycle/02.jpg", caption: "Optional screenshot caption." }
    ],
    video: "",
    links: []
  },
  {
    id: "rpg-combat",
    title: "RPG COMBAT",
    meta: "UNITY · ONLINE MULTIPLAYER · RPG",
    year: "2023",
    summary: "An online multiplayer turn-based RPG prototype focused on combat and character systems.",
    description: `Sample project description. Replace this with your own description of the combat systems, character systems, gameplay programming, and AppWarp multiplayer implementation.`,
    cover: "assets/rpg-combat/cover.jpg",
    previewVideo: "assets/rpg-combat/preview.mp4",
    previewGif: "assets/rpg-combat/preview.gif",
    gallery: [
      { src: "assets/rpg-combat/01.jpg", caption: "Optional screenshot caption." },
      { src: "assets/rpg-combat/02.jpg", caption: "Optional screenshot caption." }
    ],
    video: "",
    links: []
  }
];
