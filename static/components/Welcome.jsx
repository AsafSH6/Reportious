import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';


const styles = {
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
};

function Welcome({ classes, isLoggedIn=false }) {
    return (
        <div className={classes.root}>
            <ReportiousTitle>
                Welcome!
            </ReportiousTitle>
            <ReportiousLink to='/options-menu/'>
                LOGIN WITH GOOGLE
            </ReportiousLink>
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);