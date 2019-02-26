import { connect } from 'react-redux';

import ReportPreview from '../components/Reports/ReportPreview.jsx';
import { setReport } from "../actions";


const mapDispatchToProps = dispatch => ({
    openReport: (report) => {
        dispatch(setReport(report, false)); // Not a new report.
    },
});


export default connect(
    null,
    mapDispatchToProps
)(ReportPreview)