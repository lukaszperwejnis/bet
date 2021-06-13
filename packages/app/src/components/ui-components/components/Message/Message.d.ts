import { ReactElement } from 'react';
import { Message as MessageStructure } from '@structures';
import './message.css';
declare const defaultProps: Readonly<{
    root: string;
    duration: number;
}>;
declare type MessageComponentProps = {
    type: MessageStructure.Type;
    text: string;
};
declare type MessageProps = typeof defaultProps & MessageComponentProps;
export declare const Message: {
    ({ root, ...otherProps }: MessageProps): ReactElement;
    defaultProps: Readonly<{
        root: string;
        duration: number;
    }>;
};
export {};
