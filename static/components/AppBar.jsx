import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
                        variant='h6'
                        color='inherit'
                        className={classes.reportiousIcon}
                    >
                        <Link to='/'>
                            Reportious
                        </Link>
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