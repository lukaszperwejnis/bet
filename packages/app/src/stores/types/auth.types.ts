export type AuthStoreType = {
  isLoading: boolean;
  // TODO temporary
  currentUser: any;
};

export enum AuthActionType {
  Login = 'LOGIN',
  SuccessLogin = 'SUCCESS_LOGIN',
  FailedLogin = 'FAILED_LOGIN',
}
