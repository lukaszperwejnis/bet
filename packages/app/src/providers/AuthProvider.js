import { userService } from '../services';
export class AuthProvider {
    constructor() {
        this.observers = [];
        this.subscribe = (observer) => {
            this.observers.push(observer);
        };
        this.unsubscribe = (observer) => {
            this.observers = this.observers.filter((_observer) => _observer !== observer);
        };
        this.notify = () => {
            this.observers.forEach((observer) => observer(userService.isLoggedIn()));
        };
    }
    static getInstance() {
        if (!AuthProvider.instance) {
            AuthProvider.instance = new AuthProvider();
        }
        return AuthProvider.instance;
    }
}
