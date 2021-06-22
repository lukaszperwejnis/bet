import { CreationType } from '@bet/structures';
export interface Team {
    readonly _id: string;
    readonly creationType: CreationType;
    readonly name: string;
    readonly externalId: number;
}
