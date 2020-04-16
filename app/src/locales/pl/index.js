import {fields} from './fields'
import {cta} from "./cta";
import {validation } from "./validation";
import {login} from "./login";
import {mailInvitationSignup} from "./mailInvitationSignup";
import {resetPassword} from "./resetPassword";

export const pl = {
    ...fields,
    ...cta,
    ...validation,
    ...login,
    ...mailInvitationSignup,
    ...resetPassword
};
