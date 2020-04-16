import {actionNames} from "./types";

export function onLogin({token, user}) {
    console.log({token, user});
    return {
        type: actionNames.LOGGED_IN,
        payload: {
            token,
            user
        }
    }
}
