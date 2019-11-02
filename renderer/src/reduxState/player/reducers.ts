import {
  LOGIN,
  LOGOUT,
  SELECT_CHARACTER,
  PlayerActionTypes,
  UPDATE_CHARACTER,
  UNSET_CHARACTER
} from "./types";

export const initialPlayerState = {};

function player(state = initialPlayerState, action: PlayerActionTypes) {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.payload
      };
    case UPDATE_CHARACTER:
    case SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload
      };
    case UNSET_CHARACTER:
      return {
        ...state,
        selectedCharacter: {}
      };
    case LOGOUT:
      return initialPlayerState;
    default:
      return state;
  }
}

export default player;
