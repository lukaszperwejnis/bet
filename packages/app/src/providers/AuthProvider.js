"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const _services_1 = require("@services");
class AuthProvider {
    constructor() {
        this.observers = [];
        this.subscribe = (observer) => {
            this.observers.push(observer);
        };
        this.unsubscribe = (observer) => {
            this.observers = this.observers.filter((_observer) => _observer !== observer);
        };
        this.notify = () => {
            this.observers.forEach((observer) => observer(_services_1.userService.isLoggedIn()));
        };
    }
    static getInstance() {
        if (!AuthProvider.instance) {
            AuthProvider.instance = new AuthProvider();
        }
        return AuthProvider.instance;
    }
}
exports.AuthProvider = AuthProvider;
