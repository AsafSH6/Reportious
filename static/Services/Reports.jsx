import {
    reports,
    allReportTypes,
} from '../constants.jsx';

class ReportsService {
    loadReports = reportType => reports[reportType];
    loadOptions = () => allReportTypes;
    saveReport = report => console.log('Saving report', report);
    addReport = report => console.log('Adding report', report);
    downloadReport = reportId => console.log('Downloading report', reportId);
}


export default new ReportsService();