import React from 'react';

import { ReportiousTitle } from './ReportiousComponents';



function WorkingHoursReport({ match }) {
    console.log('working hours', match)
    return (
        <ReportiousTitle>
            Create working hours report!
        </ReportiousTitle>
    )
}


export default WorkingHoursReport;