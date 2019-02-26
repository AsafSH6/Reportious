import {
    UPDATE_REPORTS,
    SAVE_REPORT,
    CREATE_REPORT,
} from  '../constants.jsx';


const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REPORTS:
            return action.reports;
        case SAVE_REPORT:
            return state.map(report => {
                if (report.id === action.report.id) {
                    return action.report;
                }
                else {
                    return report;
                }
            });
        case CREATE_REPORT:
            return [action.report, ...state];
        default:
            return state;
    }
}