import {CreationType} from '../enums';

export declare class Team {
  readonly _id: string;
  readonly externalId?: number;
  readonly name: string;
  readonly creationType: CreationType;
}
