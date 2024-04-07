import { CreationType } from './common';

export interface Team {
  readonly _id: string;
  readonly externalId?: number;
  readonly name: string;
  readonly creationType: CreationType;
  readonly crest: string;
}

export type CreatePayload = {
  _id?: string;
  name: string;
  externalId: string;
  creationType: CreationType;
};
