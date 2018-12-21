import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ReportiousLink, ReportiousTitle } from '.';


const styles = {
    root: {

    },
    toolBar: {
        margin: '0vw 5vw',
    },
    reportiousIcon: {
        flexGrow: 1,
    }
};

function ReportiousAppBar({ classes, title = 'Reportious' }) {
    return (
        <div className={classes.root}>
            <AppBar
                position='static'
                color='primary'
            >
                <Toolbar
                    className={classes.toolBar}
                >
                    <div
                        className={classes.reportiousIcon}
                    >
                        <ReportiousLink
                            to='/'
                            buttonPassThroughProps={{color: 'inherit', variant: 'text'}}
                        >
                            {title}
                        </ReportiousLink>
                    </div>
                    <IconButton
                        color="inherit"
                    >
                        <AccountCircle fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ReportiousAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportiousAppBar);