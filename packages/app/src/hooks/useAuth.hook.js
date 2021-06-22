"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const react_1 = require("react");
const _services_1 = require("@services");
const AuthProvider_1 = require("../providers/AuthProvider");
const useAuth = () => {
    const [isLogged, setIsLogged] = react_1.useState(_services_1.userService.isLoggedIn());
    const authProvider = AuthProvider_1.AuthProvider.getInstance();
    react_1.useEffect(() => {
        const listener = (newIsLogged) => {
            setIsLogged(newIsLogged);
        };
        authProvider.subscribe(listener);
        return () => {
            authProvider.unsubscribe(listener);
        };
    }, []);
    return [isLogged];
};
exports.useAuth = useAuth;
