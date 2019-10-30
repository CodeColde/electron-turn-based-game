export const REGISTER = "REGISTER";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export type Username = string;
export type Password = string;

export interface User {
  username: Username;
  password: Password;
}

export type Users = User[];

interface CreateUserAction {
  type: typeof REGISTER;
  payload: User;
}

export interface DeleteUserReturn {
  type: typeof DELETE_ACCOUNT;
  payload: User;
}

export type DeleteUserAction = (username: Username) => DeleteUserReturn;

export type RegisterActionTypes = CreateUserAction | DeleteUserReturn;
