import { AUTH, LOGOUT } from "../actionTypes";
import * as api from '../../api';

export const googleSignIn = (result, token, history) => async (dispatch) => {

    try {
        dispatch({ type: AUTH, data: { result, token } });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const googleSignOut = (history) => async (dispatch) => {
    dispatch({ type: LOGOUT });
    history.push('/');
};

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}