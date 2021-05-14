import { User } from "../structures/User";

export interface LoggedUser {
  accessToken: string;
  refreshToken: string;
  user: User;
}
