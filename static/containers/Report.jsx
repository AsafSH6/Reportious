import { connect } from 'react-redux';

import { ReportsService } from '../services';
import Report from '../components/Reports/Report.jsx';
import {
    updateDayStartHour,
    updateDayEndHour,
    updateDayAmount,
    updateDrivingKM,
    editReport,
    cancelEditReport,
    saveReport,
    createReport,
    setReport,
    unsetReport
} from "../actions";


const mapStateToProps = (state, ownProps) => ({
    report: state.report.editingReport,
    isNewReport: state.report.isNewReport,
    editMode: state.report.editMode,
    downloadReport: () => ReportsService.downloadReport(ownProps.report.id)
});


const mapDispatchToProps = dispatch => ({
    editReport: () => dispatch(editReport()),
    cancelEditReport: () => dispatch(cancelEditReport()),
    closeReport: () => dispatch(unsetReport()),
    updateDayStartHour: (dayIdx, startHour) => {
        dispatch(updateDayStartHour(dayIdx, startHour));
    },
    updateDayEndHour: (dayIdx, endHour) => {
        dispatch(updateDayEndHour(dayIdx, endHour));
    },
    updateDayAmount:(dayIdx, amount) => {
        dispatch(updateDayAmount(dayIdx, amount));
    },
    updateDrivingKM: drivingInKM => {
        dispatch(updateDrivingKM(drivingInKM));
    },
    saveReport: report => {
        return ReportsService.saveReport(report).then(savedReport => {
            dispatch(saveReport(savedReport));
            dispatch(setReport(savedReport, false));
            return savedReport;
        });
    },
    createReport: report => {
        return ReportsService.createReport(report).then(createdReport => {
            dispatch(createReport(createdReport));
            dispatch(setReport(createdReport, false)); // Not a new report anymore.
            return createdReport;
        });
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Report)