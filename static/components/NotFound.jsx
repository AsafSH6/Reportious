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

function NotFound({ classes }) {
    return (
        <div className={classes.root}>
            <Typography variant='h5' color='primary'>
                Not Found!
            </Typography>
        </div>
    );
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);