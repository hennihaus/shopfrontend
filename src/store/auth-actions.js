import axios from "../common/axios-url";

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED';

const signUp = signUpMessage => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: {
            signUpMessage,
        }
    };
};

const signUpFailed = signUpMessage => {
    return {
        type: SIGN_UP_FAILED,
        payload: {
            signUpMessage
        }
    };
};

export const register = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/signup', userData, {withCredentials: true});
            dispatch(signUp(response.data));
        } catch (error) {
            console.error(error);
            dispatch(signUpFailed(error.response.data));
        }
    };
};

const signIn = signInMessage => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: {
            signInMessage
        }
    };
};

const signInFailed = signInMessage => {
    return {
        type: SIGN_IN_FAILED,
        payload: {
            signInMessage
        }
    }
}

export const login = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/login', userData, {withCredentials: true});
            dispatch(signIn(response.data));
        } catch (error) {
            console.error(error);
            dispatch(signInFailed(error.response.data));
        }
    };
};

const signOut = signOutMessage => {
    return {
        type: SIGN_OUT_SUCCESS,
        payload: {
            signOutMessage
        }
    };
};

export const signOutFailed = () => {
    return {
        type: SIGN_OUT_FAILED
    };
};

export const logout = () => {
    return dispatch => {
        axios.post('/logout', null, {withCredentials: true})
            .then(response => dispatch(signOut(response.data)))
            .catch(error => {
                console.error(error);
                dispatch(signOutFailed());
            });
    };
};



