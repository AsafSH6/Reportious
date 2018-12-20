import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

function Welcome({ classes, isLoggedIn=false }) {
    return (
        <div className={classes.root}>
            <Typography variant='h5' color='primary'>
                Welcome!
            </Typography>

            <Link to='/options-menu'>
                <Button
                    variant='outlined'
                >
                    LOGIN WITH GOOGLE
                </Button>
            </Link>
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);