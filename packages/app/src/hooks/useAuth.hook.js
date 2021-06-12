import { useEffect, useState } from 'react';
import { userService } from '@services';
import { AuthProvider } from '../providers/AuthProvider';
export const useAuth = () => {
    const [isLogged, setIsLogged] = useState(userService.isLoggedIn());
    const authProvider = AuthProvider.getInstance();
    useEffect(() => {
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
