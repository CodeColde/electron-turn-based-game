const characterTypes = new Map([
  [
    "dwarf",
    {
      resistance: {
        gnome: 0.5,
        human: 1.25,
        dwarf: 1
      },
      stats: {
        hp: 35,
        attack: 10,
        magic: 10,
        defense: 10,
        magicResistance: 10,
        speed: 10
      }
    }
  ],
  [
    "human",
    {
      resistance: {
        gnome: 1.25,
        human: 1,
        dwarf: 0.5
      },
      stats: {
        hp: 35,
        attack: 12,
        magic: 4,
        defense: 8,
        magicResistance: 10,
        speed: 10
      }
    }
  ],
  [
    "gnome",
    {
      resistance: {
        gnome: 1,
        human: 0.5,
        dwarf: 1.25
      },
      stats: {
        hp: 35,
        attack: 10,
        magic: 10,
        defense: 10,
        magicResistance: 10,
        speed: 10
      }
    }
  ]
]);

export default characterTypes;
