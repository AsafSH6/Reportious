import {
    UPDATE_REPORTS,
    SAVE_REPORT,
    ADD_REPORT,
} from  '../constants.jsx';


const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REPORTS:
            return action.reports;
        case SAVE_REPORT:
            return state.map(report => {
                if (report.id === action.report) {
                    return action.report;
                }
                else {
                    return report;
                }
            });
        case ADD_REPORT:
            // ********************************************************************************
            // WILL BE REMOVED ONCE WE CREATE REAL SERVER.
            action.report.id = Math.max(...state.map(report => report.id)) + 1;
            action.report.name = `report ${action.report.id}`;
            // ********************************************************************************
            return [...state, action.report];
        default:
            return state;
    }
}