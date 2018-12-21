import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { allReportTypes } from '../constants.jsx';
import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';

const styles = {
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};


function OptionsMenu({ classes }) {
    return (
        <div className={classes.root}>
            <ReportiousTitle>
                Options Menu2!
            </ReportiousTitle>
            {allReportTypes.map(reportType => (
                <ReportiousLink
                    key={reportType.name}
                    to={`/reports-preview/${reportType.type}/`}
                >
                    {reportType.name}
                </ReportiousLink>
            ))}
        </div>
    );
}

OptionsMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsMenu);