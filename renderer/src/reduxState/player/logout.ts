import { LOGOUT } from "./types";

export const logoutAction = { type: LOGOUT };

export function logout() {
  return logoutAction;
}