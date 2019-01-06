import { connect } from 'react-redux';

import { updateReports } from "../actions";
import { Reports } from '../components/Reports';
import reportsService from '../services/reports.jsx';
import chroma from "chroma-js";


const mapStateToProps = state => ({
    reports: state.reports,
    colors: chroma.scale(['#2A4858', '#0a65bc', '#8dc6da']).domain([0, state.reports.length])
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    loadReports: () => {
        const { reportType } = ownProps.match.params;
        const reports = reportsService.loadReports(reportType);

        return dispatch(updateReports(reports))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports)