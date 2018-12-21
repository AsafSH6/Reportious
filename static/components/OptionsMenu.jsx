import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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

const Reports = [
    {
        name: 'Working Hours Report',
        link: 'working-hours-report/'  // TODO: save as constant.
    },
    {
        name: 'Other report',
        link: 'other-report/'  // TODO: save as constant.
    }
];

function OptionsMenu({ classes, reportTypes = Reports}) {
    return (
        <div className={classes.root}>
            <Typography variant='h5' color='primary'>
                Options Menu!
                <div>
                    {reportTypes.map(reportType => (
                        <Link key={reportType.name} to={reportType.link}>
                            <Button >
                                    {reportType.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </Typography>
        </div>
    );
}

OptionsMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsMenu);