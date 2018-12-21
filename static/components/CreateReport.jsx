import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ReportiousTitle } from './ReportiousComponents';
import WorkingHoursReport from './WorkingHoursReport.jsx';
import NotFound from './NotFound.jsx';




function CreateReport({ match }) {
    console.log(match);

    return (
        <div>
            <ReportiousTitle>
                Create report :D
            </ReportiousTitle>
            <Switch>
                <Route exact path='/create-report/working-hours-report/' component={WorkingHoursReport} />
                <Route exact path='/create-report/other-report/' component={WorkingHoursReport} />

                <Route component={NotFound} />
            </Switch>
        </div>
    )
}


export default CreateReport;