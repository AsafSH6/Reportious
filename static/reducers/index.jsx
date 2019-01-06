import { combineReducers } from 'redux';
import reports from './reports.jsx';
import authentication from './authentication.jsx';
import options from './options.jsx';


export default combineReducers({
    options,
    reports,
    authentication
})