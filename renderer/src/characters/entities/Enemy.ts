export interface EnemyType {
  name: string;
  race: "Goblin" | "Orc" | "Wizard";
  classTitle: string;
  gender: "Male" | "Female";
  moves: string[];
  ability: string;
  level: number;
  experience: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}
