import { Character } from "../characters/types";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const UNSET_CHARACTER = "UNSET_CHARACTER";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";

export type Username = string;
export type Password = string;

export interface PlayerProps {
  username?: string;
  selectedCharacter?: Character;
}

export interface LoginActionReturn {
  type: typeof LOGIN;
  payload: Username;
}
export interface LogoutActionReturn {
  type: typeof LOGOUT;
}
export interface SelectCharacterActionReturn {
  type: typeof SELECT_CHARACTER;
  payload: Character;
}
export interface UpdateCharacterActionReturn {
  type: typeof UPDATE_CHARACTER;
  payload: Character;
}
export interface UnsetCharacterActionReturn {
  type: typeof UNSET_CHARACTER;
}

export type LoginAction = (username: Username) => LoginActionReturn;
export type LogoutAction = () => LogoutActionReturn;
export type SelectCharacterAction = (
  character: Character
) => SelectCharacterActionReturn;
export type UnsetCharacterAction = () => UnsetCharacterActionReturn;
export type UpdateCharacterAction = (
  character: Character
) => UpdateCharacterActionReturn;

export type PlayerActionTypes =
  | LoginActionReturn
  | LogoutActionReturn
  | SelectCharacterActionReturn
  | UpdateCharacterActionReturn
  | UnsetCharacterActionReturn;
