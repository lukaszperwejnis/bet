export declare namespace Password {
  type StartResetPayload = {
    email: string;
  };
  type StartResetSuccess = boolean;
  type ResetPayload = {
    token: string;
    password: string;
  };
  type ResetSuccess = boolean;
}
