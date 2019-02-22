import { combineReducers } from 'redux';
import options from './Options.jsx';
import report from './Report.jsx';
import reports from './Reports.jsx';
import authentication from './Authentication.jsx';
import snackbar from './Snackbar.jsx';


export default combineReducers({
    options,
    report,
    reports,
    authentication,
    snackbar
})