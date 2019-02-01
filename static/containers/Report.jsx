import { connect } from 'react-redux';

import { ReportsService } from '../services';
import Report from '../components/Reports/Report.jsx';
import {
    saveReport,
    createReport
} from "../actions";


const mapStateToProps = (state, ownProps) => ({
    downloadReport: () => ReportsService.downloadReport(ownProps.report.id)
});


const mapDispatchToProps = dispatch => ({
    saveReport: report => {
        return ReportsService.saveReport(report).then(savedReport => {
            dispatch(saveReport(savedReport));
            return savedReport;
        });
    },
    createReport: report => {
        return ReportsService.createReport(report).then(createdReport => {
            dispatch(createReport(createdReport));
            return createdReport;
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Report)