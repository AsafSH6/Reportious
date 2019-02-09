import { connect } from 'react-redux';

import OptionsMenu from '../components/OptionsMenu.jsx';
import {
    updateOptions,
} from "../actions";

import reportsService from '../services/Reports.jsx';


const mapStateToProps = state => ({
    reportOptions: state.options // TODO: Send request to the server to get it.
});


const mapDispatchToProps = dispatch => ({
    updateOptions: () => {
        reportsService.loadOptions().then(options => {
            dispatch(updateOptions(options));
        })
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsMenu)