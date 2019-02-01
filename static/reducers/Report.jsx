import {
    UPDATE_DAY_START_HOUR,
    UPDATE_DAY_END_HOUR,
    UPDATE_DAY_AMOUNT,
    UPDATE_DRIVING_KM
} from  '../constants.jsx';



const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DAY_START_HOUR:
            const daysReport = [...state.daysReport];
            const changedDayReport = daysReport[action.dayIdx];

            daysReport[dayIdx] = {
                ...changedDayReport,
                startHour: action.startHour
            };

            return {
                ...state,
                daysReport: daysReport
            };
        default:
            return state;
    }
}