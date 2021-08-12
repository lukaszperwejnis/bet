import { CreationType } from './common';

export namespace Team {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  export declare class Team {
    readonly _id: string;
    readonly externalId?: number;
    readonly name: string;
    readonly creationType: CreationType;
  }

  export type CreatePayload = {
    _id?: string;
    name: string;
    externalId: string;
    creationType: CreationType;
  };
}
