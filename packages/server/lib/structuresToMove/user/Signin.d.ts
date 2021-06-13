import { User } from "./User";
export declare namespace Signin {
    type Payload = {
        email: string;
        password: string;
    };
    type Success = {
        accessToken: string;
        refreshToken: string;
        user: User.DTO;
    };
}
