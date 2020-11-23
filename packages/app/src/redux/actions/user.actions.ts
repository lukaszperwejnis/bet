// import {userService} from '../../services/user.service';
// import {userConstants} from '../constants';
// import {alertActions} from './alert.actions';
//
// export const userActions = {
//     login,
//     logout,
//     signup,
// };
//
// type User = {};
//
// function login(data: {username: string; password: string}): User {
//     return (dispatch) => {
//         userService.login(data).then(
//             (user) => {
//                 //todo set tokens
//                 dispatch({type: userConstants.REGISTER_SUCCESS, user});
//                 return user;
//             },
//             (error) => {
//                 dispatch(alertActions.error(error.toString()));
//                 return error;
//             }
//         );
//     };
// }
//
// function logout(): Record<string, string> {
//     userService.logout();
//     return {type: userConstants.LOGOUT};
// }
//
// function signup(data: {token: string; password: string}) {
//     return (dispatch) => {
//         userService.signup(data).then(
//             (response) => {
//                 dispatch(alertActions.success('Registration successful'));
//                 return response;
//             },
//             (error) => {
//                 dispatch(alertActions.error(error.toString()));
//                 return error;
//             }
//         );
//     };
// }
//
// function validateInvitationToken(token: string) {
//     return (dispatch) => {
//         userService.validateInvitationToken(token).then(
//             (response) => {
//                 return response;
//             },
//             (error) => {
//                 dispatch(alertActions.error(error.toString()));
//                 return error;
//             }
//         );
//     };
// }
