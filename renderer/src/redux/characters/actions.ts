import {
  ADD_CHARACTER,
  Character,
  LEVEL_UP_CHARACTER,
  DELETE_CHARACTER
} from "./types";

export function addCharacter(data: Character) {
  return {
    type: ADD_CHARACTER,
    payload: data
  };
}

export function levelUpCharacter(id: number) {
  return {
    type: LEVEL_UP_CHARACTER,
    payload: {
      id
    }
  };
}

export function deleteCharacter(id: number) {
  return {
    type: DELETE_CHARACTER,
    payload: {
      id
    }
  };
}
