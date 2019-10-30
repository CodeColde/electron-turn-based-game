export interface Character {
  id: number;
  owner: string;
  name: string;
  gender: string;
  race: string;
  classTitle: string;
  moves: Array<string>;
  ability: string;
  level: number;
  experience: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export type Statistics = {
  hp: number;
  attack: number;
  defense: number;
  magic: number;
  magicResistance: number;
  speed: number;
};

export type CharacterExamples = Character & {
  levelUp: () => void;
};

export type CharacterState = Character[];

export const ADD_CHARACTER = "ADD_CHARACTER";
export const LEVEL_UP_CHARACTER = "LEVEL_UP_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

interface CreateCharacterAction {
  type: typeof ADD_CHARACTER;
  payload: Character;
}

export interface LevelUpCharacterAction {
  type: typeof LEVEL_UP_CHARACTER;
  payload: {
    id: number;
  };
}

export interface DeleteCharacterAction {
  type: typeof DELETE_CHARACTER;
  payload: {
    id: number;
  };
}

export type CreateActionTypes =
  | CreateCharacterAction
  | LevelUpCharacterAction
  | DeleteCharacterAction;
