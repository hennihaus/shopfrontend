import {updateState} from "../common/util";
import {
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILED,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS
} from "./auth-actions";

const initialState = {};

const signUp = (state, action) => updateState(state, {
    signUpMessage: action.payload.signUpMessage,
});

const signUpFailed = (state, action) => updateState(state, {
    signUpMessage: action.payload.signUpMessage
});

const signIn = (state, action) => updateState(state, {
    signInMessage: action.payload.signInMessage,
});

const signInFailed = (state, action) => updateState(state, {
    signInMessage: action.payload.signInMessage
});

const signOut = (state, action) => updateState(state, {
    signOutMessage: action.payload.signOutMessage
});

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
