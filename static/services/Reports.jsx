import gql from 'graphql-tag';

import Service from './Service.jsx'

import { dayToRegularCase } from '../utils.jsx';
import {
    allReportTypes,
} from '../constants.jsx';
import { dayToCamelCase } from "../utils";


class ReportsService extends Service {
    constructor() {
        super();
    }

    loadOptions = async () => allReportTypes;

    _loadWorkingHoursReports = async () => {
        const response = await this.client
            .query({
                query: gql`
                        query {
                          workingHoursReports(token: "${this.jwt_token}") {
                            id
                            date
                            days
                            drivingInKm
                          }
                        }
                    `
            });
        const workingHoursReports = response.data.workingHoursReports;
        return workingHoursReports.map(report => ({
            ...report,
            days: report.days.map(dayToCamelCase)
        }));
    };

    loadReports = async (reportType) => {
        return this._loadWorkingHoursReports();
    };

    saveReport = async report => {
        const variables = {
            id: report.id,
            drivingInKm: report.drivingInKm,
            days: JSON.stringify(report.days.map(dayToRegularCase))
        };

        const response = await this.client.mutate({
            mutation: gql`
                    mutation SaveWorkingHoursReport($id: Int!, $days: JSONString!, $drivingInKm: Int!) {
                        saveWorkingHoursReport(id: $id, days: $days, drivingInKm: $drivingInKm, token: "${this.jwt_token}") {
                            savedWorkingHoursReport{
                                id
                                date
                                days
                                drivingInKm
                            }
                        }
                    }
            `,
            variables
        });

        const savedReport = response.data.saveWorkingHoursReport.savedWorkingHoursReport;
        return {
            ...savedReport,
            days: savedReport.days.map(dayToCamelCase)
        };
    };

    createReport = async report => {
        const variables = {
            ...report,
            days: JSON.stringify(report.days.map(dayToRegularCase))
        };
        const response = await this.client.mutate({
            mutation: gql`
                    mutation CreateWorkingHoursReport($date: DateTime!, $days: JSONString!, $drivingInKm: Int!) {
                        createWorkingHoursReport(date: $date, days: $days, drivingInKm: $drivingInKm, token: "${this.jwt_token}") {
                            createdWorkingHoursReport{
                                id
                                date
                                days
                                drivingInKm
                            }
                        }
                    }
            `,
            variables
        });

        const createdReport = response.data.createWorkingHoursReport.createdWorkingHoursReport;
        return {
            ...createdReport,
            days: createdReport.days.map(dayToCamelCase)
        };
    };
    downloadReport = reportId => Promise.resolve(true);
}


export default new ReportsService();