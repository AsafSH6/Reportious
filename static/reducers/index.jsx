import { combineReducers } from 'redux';
import reports from './Reports.jsx';
import authentication from './Authentication.jsx';
import options from './Options.jsx';


export default combineReducers({
    options,
    reports,
    authentication
})