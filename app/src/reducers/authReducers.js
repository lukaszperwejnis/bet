import {actionNames} from "../actions/types";

const initialState = {
    user: null,
    token: null
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionNames.LOGGED_IN:
            console.log(action, 'action');
            return {
                ...action.payload
            };
        case actionNames.LOGGED_OUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
