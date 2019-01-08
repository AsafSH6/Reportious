import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {default as MaterialUIAppBar} from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

import { ReportiousLink } from './ReportiousComponents';


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

function AppBar({ classes, title = 'Reportious' }) {
    return (
        <div className={classes.root}>
            <MaterialUIAppBar
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
                            buttonPassThroughProps={{
                                color: 'inherit',
                                size: 'large',
                                variant: 'text',
                                style: {textTransform: 'none'}
                            }}
                        >
                            <LibraryBooks
                                fontSize='large'
                            />
                            <Typography
                                variant='h5'
                                color='inherit'
                            >
                                <b> {title} </b>
                            </Typography>
                        </ReportiousLink>
                    </div>
                    <IconButton
                        color="inherit"
                    >
                        <AccountCircle fontSize="large" />
                    </IconButton>
                </Toolbar>
            </MaterialUIAppBar>
        </div>
    );
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);