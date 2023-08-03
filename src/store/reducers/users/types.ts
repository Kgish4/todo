import { IUser } from "../../../models/IUser";

export interface UsersState {
  usersList: IUser[];
  filter: string;
  isLoading: boolean;
  error: string;
}

export enum UsersActionEnum {
  GET_USERS = "GET_USERS",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  GET_USERS_FAIL = "GET_USERS_FAIL",
  REMOVE_USER = "REMOVE_USER",
  SEARCH_USER = "SEARCH_USER",
  CLEAR_SEARCH_USER = "CLEAR_SEARCH_USER",
}

export interface SearchUserAction {
  type: UsersActionEnum.SEARCH_USER;
  payload: string;
}
export interface ClearSearchUserAction {
  type: UsersActionEnum.CLEAR_SEARCH_USER;
}

export interface RemoveUserAction {
  type: UsersActionEnum.REMOVE_USER;
  payload: number;
}
export interface GetUsersAction {
  type: UsersActionEnum.GET_USERS;
}
export interface GetUsersSuccessAction {
  type: UsersActionEnum.GET_USERS_SUCCESS;
  payload: IUser[];
}

export interface GetUsersFailAction {
  type: UsersActionEnum.GET_USERS_FAIL;
  payload: string;
}

export type UsersAction =
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersFailAction
  | RemoveUserAction
  | SearchUserAction
  | ClearSearchUserAction;
