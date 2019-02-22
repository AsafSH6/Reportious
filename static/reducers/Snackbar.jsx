import {
    OPEN_SNACKBAR,
    CLOSE_SNACKBAR,
} from "../constants";

const initialState = {
    isOpen: false,
    variant: null,
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR: {
            return {
                ...state,
                isOpen: true,
                variant: action.variant,
                message: action.message
            };
        }
        case CLOSE_SNACKBAR: {
            return {
                ...state,
                isOpen: false,
            }
        }
        default:
            return state;
    }
}