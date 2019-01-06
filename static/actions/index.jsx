import {
    UPDATE_REPORTS,
    UPDATE_OPTIONS,
} from '../constants.jsx';


export const updateReports = reports => ({
    type: UPDATE_REPORTS,
    reports
});


export const updateOptions = options => ({
    type: UPDATE_OPTIONS,
    options
});