import React from 'react';

import { ReportiousTitle } from './ReportiousComponents';



function EditReport({ match }) {
    return (
        <ReportiousTitle>
            Edit report {match.params.reportId}
        </ReportiousTitle>
    )
}


export default EditReport;