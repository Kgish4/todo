import {
  UsersActionEnum,
  GetUsersAction,
  GetUsersFailAction,
  GetUsersSuccessAction,
  RemoveUserAction,
  ClearSearchUserAction,
  SearchUserAction,
} from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const UsersActionCreators = {
  getUsers: (): GetUsersAction => ({ type: UsersActionEnum.GET_USERS }),
  getUsersSuccess: (payload: IUser[]): GetUsersSuccessAction => ({
    type: UsersActionEnum.GET_USERS_SUCCESS,
    payload,
  }),
  getUsersFail: (payload: string): GetUsersFailAction => ({
    type: UsersActionEnum.GET_USERS_FAIL,
    payload,
  }),
  removeUser: (payload: number): RemoveUserAction => ({
    type: UsersActionEnum.REMOVE_USER,
    payload,
  }),
  searchUser: (payload: string): SearchUserAction => ({
    type: UsersActionEnum.SEARCH_USER,
    payload,
  }),
  clearSearch: (): ClearSearchUserAction => ({
    type: UsersActionEnum.CLEAR_SEARCH_USER,
  }),

  fetchUsers: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(UsersActionCreators.getUsers());
      const response = await UserService.getUsers();
      console.log(response);
      dispatch(UsersActionCreators.getUsersSuccess(response));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(UsersActionCreators.getUsersFail(e.message));
      }
    }
  },
};
