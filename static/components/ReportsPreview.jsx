import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import { reportTypeToPreview } from '../constants.jsx'
import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';


const reportStyle = theme => ({

});


const ReportPreview = withStyles(reportStyle)(({ classes, report }) => {
    return (
        <ReportiousLink
            key={report.name}
            to={`/view-report/${report.id}/`}
        >
            {`${report.name} ${report.date.toDateString()}`}
        </ReportiousLink>
    )
});


const reportsPreviewStyle = theme => ({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    content: {
        flex: 1,
        margin: theme.spacing.unit * 4,
        display: 'flex',
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});


const ReportsPreview = withStyles(reportsPreviewStyle)(({ classes, match }) => {
    const reportType = match.params.reportType;
    const relevantReports = reportTypeToPreview[reportType];

    return (
        <div className={classes.root}>
            <ReportiousTitle>
                Preview
            </ReportiousTitle>
            <div className={classes.content}>
                <div className={classes.preview}>
                {relevantReports.map(report => (
                    <ReportPreview
                        key={report.id}
                        report={report}
                    />
                ))}
                </div>
                <ReportiousLink
                    className={classes.create}
                    to={`/create-report/${reportType}/`}
                    useButton={false}
                >
                    <Fab
                        color='primary'
                    >
                        <AddIcon fontSize='default' />
                    </Fab>
                </ReportiousLink>
            </div>
        </div>
    )
});


export default ReportsPreview;