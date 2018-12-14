import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


const styles = {
    root: {
        // flex: 1,
    },
    toolBar: {
        margin: '0vw 5vw',
    },
    reportiousIcon: {
        flexGrow: 1,
    }
};

function ReportiousAppBar({ classes }) {
    return (
        <div className={classes.root}>
            <AppBar
                position='static'
                color='primary'
            >
                <Toolbar
                    className={classes.toolBar}
                >
                    <Typography
                        variant='title'
                        color='inherit'
                        className={classes.reportiousIcon}
                    >
                        Reportious
                    </Typography>
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