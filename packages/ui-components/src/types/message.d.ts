export declare type Message = {
    key: number;
    text: string;
    duration: number;
    type: MessageType;
};
export declare enum MessageType {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info"
}
