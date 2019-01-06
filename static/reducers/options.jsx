import {
    UPDATE_OPTIONS
} from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_OPTIONS:
            return action.options;
        default:
            return state;
    }
}