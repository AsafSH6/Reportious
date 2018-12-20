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

function OptionsMenu({ classes, reports = [1, 2, 3] }) {
    return (
        <div className={classes.root}>
            <Typography variant='h5' color='primary'>
                Options Menu!
                <div>
                    Create new report
                </div>
                <div>
                    {reports.map((report, idx) => <p key={`report${idx}`}>report: {report}</p>)}
                </div>
            </Typography>
        </div>
    );
}

OptionsMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsMenu);