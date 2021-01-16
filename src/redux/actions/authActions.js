import { AUTH, LOGOUT } from "../actionTypes";

export const googleSignIn = (result, token) => async (dispatch) => {

    try {
        dispatch({ type: AUTH, data: { result, token } });
    } catch (error) {
        console.log(error);
    }
};

export const googleSignOut = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
};
