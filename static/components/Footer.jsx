import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
    }
});

const Footer = ({ classes }) => {
    return (
        <footer
            className={classes.root}
        >
        <Typography>
            Footer!
        </Typography>
        </footer>
    )
};


export default withStyles(styles)(Footer);