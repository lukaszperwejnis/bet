import {CreationType} from '../types/creation-type.type';

export class Team {
    readonly _id: string;
    readonly creationType: CreationType;
    readonly name: string;
    readonly externalId: number;
}
