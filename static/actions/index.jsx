import {
    UPDATE_REPORTS,
    UPDATE_OPTIONS,
    SAVE_REPORT,
    CREATE_REPORT,
    LOGGED_IN
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


export const createReport = report => ({
    type: CREATE_REPORT,
    report
});

export const loggedIn = () => ({
    type: LOGGED_IN,
});