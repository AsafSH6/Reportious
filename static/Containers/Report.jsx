import { connect } from 'react-redux';

import { ReportsService } from '../Services';
import Report from '../components/Reports/Report.jsx';
import {
    saveReport,
    addReport
} from "../actions";


const mapStateToProps = (state, ownProps) => ({
    downloadReport: () => ReportsService.downloadReport(ownProps.report.id)
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    saveReport: () => {
        const { report } = ownProps;
        ReportsService.saveReport(report);
        dispatch(saveReport(report))
    },
    addReport: () => {
        const { report } = ownProps;
        ReportsService.addReport(report);
        dispatch(addReport(report))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Report)