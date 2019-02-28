import { connect } from 'react-redux';

import { updateReports, setReport } from "../actions";
import { Reports } from '../components/Reports';
import reportsService from '../services/Reports.jsx';
import chroma from "chroma-js";


const mapStateToProps = (state, ownProps) => ({
    reports: state.reports,
    colors: chroma.scale(['#2A4858', '#0a65bc', '#8dc6da']).domain([0, state.reports.length]),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    loadReports: () => {
        const { reportType } = ownProps.match.params || 'working-hours-report';

        reportsService.loadReports(reportType).then(reports => {
            dispatch(updateReports(reports))
        });
    },
    editNewReport: report => {
        dispatch(setReport(report, true))  // It's a new report.
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports)