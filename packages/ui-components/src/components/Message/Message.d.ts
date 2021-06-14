import "./message.css";
declare const defaultProps: Readonly<{
    root: string;
    duration: number;
}>;
export declare type MessageType = "success" | "error" | "warning" | "info";
declare type MessageComponentProps = {
    type: MessageType;
    text: string;
};
declare type MessageProps = typeof defaultProps & MessageComponentProps;
export declare const Message: {
    ({ root, ...otherProps }: MessageProps): JSX.Element;
    defaultProps: Readonly<{
        root: string;
        duration: number;
    }>;
};
export {};
