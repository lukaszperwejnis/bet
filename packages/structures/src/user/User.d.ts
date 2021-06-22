export declare namespace User {
    interface User {
        readonly _id?: string;
        readonly profile: Profile;
        readonly email: string;
        readonly password?: string;
        readonly is_admin?: boolean;
        readonly score?: number;
    }
    interface Profile {
        first_name: string;
        last_name: string;
    }
    type DTO = Omit<User, "password">;
}
