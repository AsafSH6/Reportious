import {
    UPDATE_REPORTS,
} from  '../constants.jsx';


const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REPORTS:
            return action.reports;
        default:
            return state;
    }
}