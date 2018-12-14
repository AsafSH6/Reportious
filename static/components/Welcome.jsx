import React from 'react';
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

function Welcome({ classes }) {
    return (
        <div className={classes.root}>
            <Typography variant='headline' color='primary'>
                Welcome!
            </Typography>

            <Button
                variant='outlined'
            >
                LOGIN WITH GOOGLE
            </Button>
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);