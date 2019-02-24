import {
    SET_REPORT,
    UNSET_REPORT,
    EDIT_REPORT,
    CANCEL_EDIT_REPORT,
    UPDATE_DAY_START_HOUR,
    UPDATE_DAY_END_HOUR,
    UPDATE_DAY_AMOUNT,
    UPDATE_DRIVING_KM
} from  '../constants.jsx';



const initialState = {
    editingReport: null,
    originalReport: null,
    isNewReport: undefined,
    editMode: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_REPORT: {

            return {
                editingReport: _.cloneDeep(action.report),
                originalReport: _.cloneDeep(action.report),
                isNewReport: action.isNewReport,
                editMode: action.isNewReport
            };
        }
        case UNSET_REPORT: {
            return {
                editingReport: null,
                originalReport: null,
                isNewReport: undefined,
                editMode: undefined,
            };
        }
        case EDIT_REPORT: {
            return {
                ...state,
                editMode: true,
            };
        }
        case CANCEL_EDIT_REPORT: {
            const { originalReport } = state;

            return {
                ...state,
                editingReport: _.cloneDeep(originalReport),
                editMode: false
            };
        }
        case UPDATE_DAY_START_HOUR: {
            const { editingReport } = state;
            const days = [...editingReport.days];
            const changedDay = days[action.dayIdx];

            days[action.dayIdx] = {
                ...changedDay,
                startHour: action.startHour
            };
            return {
                ...state,
                editingReport: {
                    ...editingReport,
                    days: days
                }
            };
        }
        case UPDATE_DAY_END_HOUR: {
            const { editingReport } = state;
            const days = [...editingReport.days];
            const changedDay = days[action.dayIdx];

            days[action.dayIdx] = {
                ...changedDay,
                endHour: action.endHour
            };
            return {
                ...state,
                editingReport: {
                    ...editingReport,
                    days: days
                }
            };
        }
        case UPDATE_DAY_AMOUNT: {
            const { editingReport } = state;
            const days = [...editingReport.days];
            const changedDay = days[action.dayIdx];

            days[action.dayIdx] = {
                ...changedDay,
                amount: action.amount
            };
            return {
                ...state,
                editingReport: {
                    ...editingReport,
                    days: days
                }
            };
        }
        case UPDATE_DRIVING_KM: {
            const { editingReport } = state;

            return {
                ...state,
                editingReport: {
                    ...editingReport,
                    drivingInKm: action.drivingInKm
                }
            };
        }
        default:
            return state;
    }
}