import {
  LOGIN,
  Username,
  SELECT_CHARACTER,
  UNSET_CHARACTER,
  UPDATE_CHARACTER
} from "./types";
import { Character } from "../characters/types";
import { getState } from "../..";

export function login(username: Username) {
  return {
    type: LOGIN,
    payload: username
  };
}

export function hasCharacter(username: Username) {
  const state = getState();
  return state.characters.find(item => item.owner === username);
}

export function selectCharacter(character: Character) {
  return {
    type: SELECT_CHARACTER,
    payload: character
  };
}

export function updateCharacter(data: Character) {
  return {
    type: UPDATE_CHARACTER,
    payload: data
  };
}

export function unsetCharacter() {
  return {
    type: UNSET_CHARACTER
  };
}
