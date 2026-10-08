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
    description: `Among my contributions were a dynamic Map Bounds system for staged level progression and improvements to Fog of War and merge targeting. I also implemented several NPCs and playable units and their combat behaviors.`,
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
    title: "RECIPE FOR DISASTER",
    meta: "UNITY · GRID PUZZLE",
    year: "2026",
    summary: "A grid-based puzzle game about chefs throwing a hot potato through a kitchen full of hazards.",
    description: `Recipe for Disaster is a grid-based puzzle game where players must get a hot potato from a cooking pot to a plate at the end. Players place chefs with different throwing abilities and use their skills to navigate the potato through traps and interactive kitchen hazards.

The game was developed in a few days as part of a game jam. I handled gameplay programming and implementation, Noam Argov developed the grid system and level design tools, and Edo Amit handled the game and level design. Naturally, I had to make sure we had wizard chefs.`,
    cover: "assets/hot-potato/cover.jpg",
    previewVideo: "assets/hot-potato/preview.mp4",
    previewGif: "assets/hot-potato/preview.gif",
    gallery: [
      { src: "assets/hot-potato/01.jpg"},
      { src: "assets/hot-potato/02.jpg"},
      { src: "assets/hot-potato/03.jpg"},
      { src: "assets/hot-potato/04.jpg", caption: "Teleporting wizard chefs!" }
    ],
    video: "assets/hot-potato/preview.mp4",
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
    ],
    video: "assets/cycle/preview.mp4",
    links: []
  },
  {
    id: "rpg-combat",
    title: "RPG COMBAT",
    meta: "UNITY · MULTIPLAYER · RPG",
    year: "2023",
    summary: "A turn-based RPG combat prototype.",
    description: `A turn-based combat prototype featuring 9 characters with unique abilities and RPG-style stats. Battles have teams of three characters and support online multiplayer.`,
    cover: "assets/rpg-combat/cover.jpg",
    previewVideo: "assets/rpg-combat/preview.mp4",
    previewGif: "assets/rpg-combat/preview.gif",
    gallery: [
      { src: "assets/rpg-combat/01.jpg"},
      { src: "assets/rpg-combat/02.jpg"},
      { src: "assets/rpg-combat/03.jpg"}
    ],
    video: "",
    links: []
  }
];
