import React, {ReactElement, useEffect, useState} from 'react';
import {betService, userService} from '../../services';

export const Dashboard = (): ReactElement => {
    const [availableGameBets, setAvailableGameBets] = useState<unknown[]>([]);
    const [availableChampionBets, setAvailableChampionBets] = useState<unknown[]>([]);
    const logout = (): void => {
        userService.logout();
    };

    useEffect(() => {
        betService.getAvailableBets().then((result) => {
            console.log(result, 'getAvailableBets');
        });
    }, []);
    return (
        <div>
            Hello from dashboard
            <button onClick={logout}>Logout</button>
        </div>
    );
};
