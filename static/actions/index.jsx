import {
    UPDATE_REPORTS,
    UPDATE_OPTIONS,
    SAVE_REPORT,
    ADD_REPORT,
} from '../constants.jsx';


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


export const addReport = report => ({
    type: ADD_REPORT,
    report
});