import {
    LOGGED_IN,
} from "../constants";

const defaultState = {
    isLoggedIn: true
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
}