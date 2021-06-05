export var Message;
(function (Message) {
    let Type;
    (function (Type) {
        Type["Success"] = "SUCCESS";
        Type["Error"] = "ERROR";
        Type["Warning"] = "WARNING";
        Type["Info"] = "INFO";
    })(Type = Message.Type || (Message.Type = {}));
})(Message || (Message = {}));
