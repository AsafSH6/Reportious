import React from 'react';

import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';



function ViewReport({ match }) {
    const reportId = match.params.reportId;
    return (
        <div>
            <ReportiousTitle>
                View report {reportId}
            </ReportiousTitle>
            <ReportiousLink
                to={`/edit-report/${reportId}`}
            >
                Edit report {match.params.reportId}
            </ReportiousLink>
        </div>
    )
}


export default ViewReport;