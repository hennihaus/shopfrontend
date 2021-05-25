import {addDays, updateState} from "../common/util";
import {
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILED,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS
} from "./auth-actions";

const initialState = {
    expiration: +window.localStorage.getItem('expiration'),
    signUpSuccess: null,
    signUpMessage: null,
    signInSuccess: null,
    signInMessage: null,
    signOutMessage: null
};

const signUp = (state, action) => {
    const expiration = addDays(new Date(), 7).getTime();
    window.localStorage.setItem('expiration', `${expiration}`);
    return updateState(state, {
        expiration,
        signUpSuccess: true,
        signUpMessage: action.payload.signUpMessage,
    });
};

const signUpFailed = (state, action) => updateState(state, {
    signUpSuccess: false,
    signUpMessage: action.payload.signUpMessage
});

const signIn = (state, action) => {
    const expiration = addDays(new Date(), 7).getTime();
    window.localStorage.setItem('expiration', `${expiration}`);
    return updateState(state, {
        expiration,
        signInSuccess: true,
        signInMessage: action.payload.signInMessage
    });
};

const signInFailed = (state, action) => updateState(state, {
    signInSuccess: false,
    signInMessage: action.payload.signInMessage
});

const signOut = (state, action) => {
    window.localStorage.removeItem('expiration');
    return updateState(state, {
        expiration: null,
        signUpSuccess: false,
        signInSuccess: false,
        signInMessage: null,
        signUpMessage: null,
        signOutMessage: action.payload.signOutMessage
    });
};

const signOutFailed = state => updateState(state, {
    signOutMessage: 'Abmeldung fehlgeschlagen'
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return signUp(state, action);
        case SIGN_UP_FAILED:
            return signUpFailed(state, action);
        case SIGN_IN_SUCCESS:
            return signIn(state, action);
        case SIGN_IN_FAILED:
            return signInFailed(state, action);
        case SIGN_OUT_SUCCESS:
            return signOut(state, action);
        case SIGN_OUT_FAILED:
            return signOutFailed(state);
        default:
            return state;
    }
};

export default authReducer;
