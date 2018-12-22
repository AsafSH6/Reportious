import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReportiousAppBar } from './ReportiousComponents'
import Welcome from './Welcome.jsx'
import OptionsMenu from './OptionsMenu.jsx'
import ReportPreview from './ReportsPreview.jsx'
import ViewReport from './ViewReport.jsx'
import EditReport from './EditReport.jsx'
import CreateReport from './CreateReport.jsx'
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


function App({ classes }) {
    return (
        <Router>
            <MuiThemeProvider theme={theme} >
                <CssBaseline/>
                <div className={classes.root}>
                    <ReportiousAppBar/>

                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/options-menu/' component={OptionsMenu} />
                        <Route path='/reports-preview/:reportType/' component={ReportPreview} />
                        <Route path='/create-report/:reportType/' component={CreateReport} />
                        <Route path='/view-report/:reportId/' component={ViewReport} />
                        <Route path='/edit-report/:reportId/' component={EditReport} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        </Router>
    )
}


export default withStyles(styles)(App);
