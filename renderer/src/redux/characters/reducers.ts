import {
  ADD_CHARACTER,
  CreateActionTypes,
  CharacterState,
  LEVEL_UP_CHARACTER,
  Character,
  DELETE_CHARACTER
} from "./types";

export const initialCharacterState = [];

function characters(
  state = initialCharacterState,
  action: CreateActionTypes
): CharacterState {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, action.payload];
    case LEVEL_UP_CHARACTER:
      return state.map((item: Character) =>
        item.id === action.payload.id ? { level: item.level++, ...item } : item
      );
    case DELETE_CHARACTER:
      return state.filter((item: Character) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export default characters;
