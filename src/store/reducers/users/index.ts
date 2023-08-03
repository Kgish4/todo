import { UsersState, UsersAction, UsersActionEnum } from "./types";

const initialState: UsersState = {
  usersList: [],
  filter: "",
  isLoading: false,
  error: "",
};

export default function UsersReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActionEnum.GET_USERS:
      return { ...state, isLoading: true };
    case UsersActionEnum.GET_USERS_SUCCESS:
      return { ...state, usersList: action.payload };
    case UsersActionEnum.GET_USERS_FAIL:
      return { ...state, error: action.payload };
    case UsersActionEnum.SEARCH_USER:
      return { ...state, filter: action.payload };
    case UsersActionEnum.CLEAR_SEARCH_USER:
      return { ...state, filter: "" };
    case UsersActionEnum.REMOVE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}
