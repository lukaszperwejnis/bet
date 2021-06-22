import { MessageActions } from '@stores/actions';
import { MessageStoreType } from '../types';
export declare function messageReducer(state: MessageStoreType | undefined, { type, payload }: MessageActions): MessageStoreType;
