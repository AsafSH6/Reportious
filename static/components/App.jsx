import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {
    MuiThemeProvider,
    createMuiTheme,
    withStyles
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './AppBar.jsx'
import NotFound from './NotFound.jsx'

import {
    Welcome,
    Options,
    Reports,
} from '../containers';


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8dc6da',
            contrastText: '#0a65bc',
        },
        secondary: {
            main: '#606c76',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: "Roboto, Helvetica Neue, Helvetica, Arial,sans-serif",
        fontSize: 18,
    },
});

const styles = {
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
    }
};


function App({ classes, isLoggedIn }) {
    return (
        <Router>
            <MuiThemeProvider theme={theme} >
                <CssBaseline/>
                <div className={classes.root}>
                    {isLoggedIn && <AppBar className={'animated fadeInDown'}/>}

                    <Switch>
                        <Route
                            exact path='/'
                            component={Options}
                        />
                        <Route
                            path='/welcome'
                            component={Welcome}
                        />
                        <Route
                            path='/reports/:reportType/:viewingReportId?'
                            component={Reports}
                        />
                        <Route
                            component={NotFound}
                        />
                    </Switch>
                    {isLoggedIn === false && <Redirect to='/welcome/'/>}
                </div>
            </MuiThemeProvider>
        </Router>
    )
}


export default withStyles(styles)(App);
