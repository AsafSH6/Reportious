import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider  from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 2,
    },
    border: {
        minWidth: '33%',
        marginTop: theme.spacing.unit * 2,
    }
});


const ReportiousTitle = ({ classes, children, ...passThroughProps }) => (
    <Typography
        className={classes.root}
        variant='h3'
        color='secondary'
        {...passThroughProps}
    >
        {children}
        <Divider className={classes.border} />
    </Typography>
);

export default withStyles(styles)(ReportiousTitle);