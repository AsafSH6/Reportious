import {
    SET_REPORT,
    UNSET_REPORT,
    EDIT_REPORT,
    CANCEL_EDIT_REPORT,
    UPDATE_DAY_START_HOUR,
    UPDATE_DAY_END_HOUR,
    UPDATE_DAY_AMOUNT,
    UPDATE_DRIVING_KM,
    UPDATE_REPORTS,
    UPDATE_OPTIONS,
    SAVE_REPORT,
    CREATE_REPORT,
    LOGGED_IN
} from '../constants.jsx';


export const setReport = (report, isNewReport) => ({
    type: SET_REPORT,
    report,
    isNewReport
});


export const unsetReport = () => ({
    type: UNSET_REPORT,
});


export const editReport = () => ({
    type: EDIT_REPORT,
});


export const cancelEditReport = () => ({
    type: CANCEL_EDIT_REPORT,
});


export const updateDayStartHour = (dayIdx, startHour) => ({
    type: UPDATE_DAY_START_HOUR,
    dayIdx,
    startHour,
});


export const updateDayEndHour = (dayIdx, endHour) => ({
    type: UPDATE_DAY_END_HOUR,
    dayIdx,
    endHour,
});


export const updateDayAmount = (dayIdx, amount) => ({
    type: UPDATE_DAY_AMOUNT,
    dayIdx,
    amount
});


export const updateDrivingKM = drivingInKM => ({
    type: UPDATE_DRIVING_KM,
    drivingInKM,
});


export const updateReports = reports => ({
    type: UPDATE_REPORTS,
    reports
});


export const updateOptions = options => ({
    type: UPDATE_OPTIONS,
    options
});


export const saveReport = report => ({
    type: SAVE_REPORT,
    report,
});


export const createReport = report => ({
    type: CREATE_REPORT,
    report
});


export const loggedIn = () => ({
    type: LOGGED_IN,
});