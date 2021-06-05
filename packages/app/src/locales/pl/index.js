import { fields } from './fields';
import { validation } from './validation';
import { login } from './login';
import { mailInvitationSignup } from './mailInvitationSignup';
import { resetPassword } from './resetPassword';
import { setPassword } from './setPassword';
import { invalidToken } from './invalidToken';
import { errors } from './errors';
export const pl = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, fields), validation), login), mailInvitationSignup), resetPassword), setPassword), invalidToken), errors);
