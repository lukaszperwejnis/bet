export declare namespace Message {
    type Message = {
        key: number;
        text: string;
        duration: number;
        type: Type;
    };
    enum Type {
        Success = "SUCCESS",
        Error = "ERROR",
        Warning = "WARNING",
        Info = "INFO"
    }
}
