import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Redirect from "react-router-dom/es/Redirect";

import { withStyles } from '@material-ui/core/styles';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';


import {
    ReportiousTitle,
    ReportiousLink
} from './ReportiousComponents';


const styles = theme => ({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/images/bodybackground.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit *8}px`,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    element: {
        color: 'white'
    },
});

function Welcome({ classes, loggedIn, isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <Redirect to='/'/>
        )
    }
    return (
        <div className={ClassNames(classes.root)}>
            <div
                className={classes.top}
            >
                <Typography
                    variant='h5'
                    className={ClassNames(classes.element, 'animated bounceIn')}
                    style={{
                        animationDelay: '2.5s'
                    }}
                >
                    <b> Reportious </b>
                </Typography>
                <ReportiousLink
                    to='.'
                    linkPassThroughProps={{
                        className: 'animated bounceIn',
                        style: {
                            animationDelay: '2.5s'
                        }
                    }}
                    buttonPassThroughProps={{
                        className: classes.element
                    }}
                >
                    Demo
                </ReportiousLink>
            </div>
            <div
                className={classes.content}
            >
                <LibraryBooks
                    className={'animated bounceIn'}
                    style={{
                        fontSize: 100, color: 'white',
                        animationDelay: '2.5s'
                    }}
                />
                <ReportiousTitle
                    className={ClassNames(classes.element, 'animated fadeInUp')}
                    style={{
                        animationDelay: '1s'
                    }}
                >
                    A safe place for all your reports
                </ReportiousTitle>
                <ReportiousLink
                    to='/'
                    buttonPassThroughProps={{
                        className: ClassNames(classes.element, 'animated fadeInUp'),
                        style: {
                            animationDelay: '1.5s',
                        },
                        onClick: loggedIn
                    }}
                >
                    LOGIN WITH GOOGLE
                </ReportiousLink>
            </div>
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);