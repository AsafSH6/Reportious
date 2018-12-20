import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar.jsx'
import Welcome from './Welcome.jsx'
import OptionsMenu from './OptionsMenu.jsx'
import NotFound from './NotFound.jsx'


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8dc6da',
            contrastText: '#0a65bc',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
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


function App({ classes }) {
    return (
        <Router>
            <MuiThemeProvider theme={theme} >
                <CssBaseline/>
                <div className={classes.root}>
                    <AppBar/>

                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/options-menu' component={OptionsMenu} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        </Router>
    )
}


export default withStyles(styles)(App);
