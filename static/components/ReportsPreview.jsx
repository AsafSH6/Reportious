import React from 'react';

import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';


const reportTypeToPreview = {
    'working-hours-report': [
        {
            id: 1,
            name: 'report1',
            date: new Date(9, 5, 1995)
        },
        {
            id: 2,
            name: 'report2',
            date: new Date(10, 5, 1995)
        }
    ],
    'other-report': [
        {
            id: 3,
            name: 'nothing',
            date: new Date()
        }
    ]
};

function ReportPreview({ report }) {
    return (
        <ReportiousLink
            key={report.name}
            to={`/view-report/${report.id}/`}
        >
            {`${report.name} ${report.date.toDateString()}`}
        </ReportiousLink>
    )
}


function ReportsPreview({ match }) {
    const reportType = match.params.reportType;
    const relevantReports = reportTypeToPreview[reportType];

    return (
        <div>
            <ReportiousTitle>
                Preview!
            </ReportiousTitle>
            {relevantReports.map(report => (
                <ReportPreview
                    key={report.id}
                    report={report}
                />
            ))}
            <ReportiousLink
                to={`/create-report/${reportType}/`}
            >
                Create report
            </ReportiousLink>
        </div>
    )
}


export default ReportsPreview;