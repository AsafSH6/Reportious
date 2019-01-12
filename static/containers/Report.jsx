import { connect } from 'react-redux';

import { ReportsService } from '../services';
import Report from '../components/Reports/Report.jsx';
import {
    saveReport,
    addReport
} from "../actions";


const mapStateToProps = (state, ownProps) => ({
    downloadReport: () => ReportsService.downloadReport(ownProps.report.id)
});


const mapDispatchToProps = dispatch => ({
    saveReport: report => {
        ReportsService.saveReport(report);
        dispatch(saveReport(report))
    },
    addReport: report => {
        ReportsService.addReport(report);
        dispatch(addReport(report))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Report)