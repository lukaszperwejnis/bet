import { AuthActionType, AuthStoreType } from '../types';
import { AuthActions } from '../actions';

const initialState: AuthStoreType = {
  isLoading: false,
  currentUser: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActions,
): AuthStoreType => {
  switch (action.type) {
    case AuthActionType.Login:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionType.SuccessLogin:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionType.FailedLogin:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
