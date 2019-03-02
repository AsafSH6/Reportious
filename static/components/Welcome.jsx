import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Redirect from "react-router-dom/es/Redirect";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { ReportiousButton } from './ReportiousComponents';


import {
    ReportiousTitle,
    ReportiousLink
} from './ReportiousComponents';
import { AuthenticationService } from "../services";


const styles = theme => ({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/static/images/bodybackground.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit *8}px`,
    },
    welcomeMessage: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    element: {
        color: 'white',
        fontSize: 50,
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem'
        }
    },
    logInFormContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
    },
    logInFormItem: {
        margin: theme.spacing.unit * 2
    },
    logInFormInputs: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing.unit,
    },
    loginFormInput: {
        fontSize: 70,
        height: 155,
    },
    loginFormInputLabel: {
        fontSize: 40
    },
    textField: {
        borderColor: 'white'
    },
    loginButton: {
        marginBottom: theme.spacing.unit,
    }
});


class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    componentWillMount() {
        AuthenticationService.isLoggedIn().then(isLoggedIn => {
            if (isLoggedIn) {
                this.props.loggedIn();
            }
        })
    }

    onUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    };

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    };

    logIn = () => {
        const { username, password } = this.state;
        AuthenticationService.logIn(username, password).then(loggedIn => {
            if (loggedIn) {
                this.props.onLoginSuccess();
                setTimeout(this.props.loggedIn, 1500)
            }
        }).catch(err => {
            this.props.onLoginFailure();
        })
    };

    keyPress = event => {
        if(event.keyCode === 13) { // Enter
            this.logIn();
        }
    };

    render() {
        const { classes, isLoggedIn } = this.props;

        if (isLoggedIn) {
            return (<Redirect to='/' />)
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
                    <div className={classes.welcomeMessage}>
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
                    </div>
                    {/*<ReportiousLink*/}
                        {/*to='/'*/}
                        {/*buttonPassThroughProps={{*/}
                            {/*className: ClassNames(classes.element, 'animated fadeInUp'),*/}
                            {/*style: {*/}
                                {/*animationDelay: '1.5s',*/}
                            {/*},*/}
                            {/*onClick: this.logIn*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*LOGIN WITH GOOGLE*/}
                    {/*</ReportiousLink>*/}
                    <div
                        className={ClassNames(classes.logInFormContainer, 'animated fadeInUp')}
                        style={{
                            animationDelay: '1.5s',
                        }}
                    >
                        <Paper
                            className={classes.logInFormInputs}
                        >
                            <TextField
                              className={classes.logInFormItem}
                              id="standard-username-input"
                              label="User Name"
                              margin="normal"
                              onChange={this.onUsernameChange}
                              onKeyDown={this.keyPress}
                              InputLabelProps={{
                                  className: classes.loginFormInputLabel
                              }}
                              InputProps={{
                                  className: classes.loginFormInput
                              }}
                            />
                            <TextField
                              className={classes.logInFormItem}
                              id="standard-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              margin="normal"
                              onChange={this.onPasswordChange}
                              onKeyDown={this.keyPress}
                              InputLabelProps={{
                                  className: classes.loginFormInputLabel
                              }}
                              InputProps={{
                                  className: classes.loginFormInput
                              }}
                            />
                        </Paper>
                        <ReportiousButton
                            className={classNames(classes.element, classes.loginButton)}
                            onClick={this.logIn}
                        >
                            Log In
                        </ReportiousButton>
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);