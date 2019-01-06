import {
    reports,
    allReportTypes,
} from '../constants.jsx';

class ReportsService {
    loadReports = (reportType) => reports[reportType];
    loadOptions = () => allReportTypes;
}


export default new ReportsService();