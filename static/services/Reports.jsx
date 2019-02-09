import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import { getCSRFToken } from '../utils.jsx';
import {
    reports,
    allReportTypes,
} from '../constants.jsx';

class ReportsService {
    constructor() {
        this.client = new ApolloClient({
            link: createHttpLink({
                uri: '/graphql/',
                credentials: 'same-origin',
                headers: {
                    'X-CSRFToken': getCSRFToken(),
                }
            }),
            cache: new InMemoryCache()
        });
    }

    loadOptions = async () => allReportTypes;

    _loadWorkingHoursReports = async () => {
        const reports = await this.client
            .query({
                query: gql`
                        query {
                          workingHoursReports {
                            id
                            date
                            days
                            drivingInKm
                          }
                        }
                    `
            });
        return reports.data.workingHoursReports;
    };

    loadReports = async (reportType) => {
        return this._loadWorkingHoursReports();
    };
    saveReport = report => new Promise((resolve, reject) => {console.log('Saving report', report); resolve(report)});
    createReport = report => new Promise((resolve, reject) => {console.log('Creating report', report); resolve(report)});
    downloadReport = reportId => console.log('Downloading report', reportId);
}


export default new ReportsService();