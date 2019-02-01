import {
    reports,
    allReportTypes,
} from '../constants.jsx';

class ReportsService {
    loadReports = reportType => reports[reportType];
    loadOptions = () => allReportTypes;
    saveReport = report => new Promise((resolve, reject) => {console.log('Saving report', report); resolve(report)});
    createReport = report => new Promise((resolve, reject) => {console.log('Creating report', report); resolve(report)});
    downloadReport = reportId => console.log('Downloading report', reportId);
}


export default new ReportsService();