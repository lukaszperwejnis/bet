export declare class User {
  readonly _id?: string;
  readonly profile: Profile;
  readonly email: string;
  readonly password?: string;
  readonly is_admin?: boolean;
  readonly score?: number;
}

export interface Profile {
  first_name: string;
  last_name: string;
}
