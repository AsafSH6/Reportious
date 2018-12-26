import React from 'react';
import moment from 'moment';
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import { reportTypeToPreview } from '../constants.jsx'
import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';


const reportStyle = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 170,
    },
    avatar: {
        margin: theme.spacing.unit,
        width: 100,
        height: 100,
    },
    divider: {
        width: '90%'
    },
    content: {
        margin: theme.spacing.unit * 2,
    },
});

const toFormattedDate = date => (
    moment(date).format('DD/MM/YYYY')
);

const ReportPreview = withStyles(reportStyle)(({ classes, className, report, backgroundColor }) => {
    return (
        <div>
            <ReportiousLink
                key={report.name}
                className={className}
                to={`/view-report/${report.id}/`}
                buttonPassThroughProps={{variant: 'text'}}
            >
                <Paper
                    elevation={1}
                    className={classes.root}
                >
                    <Typography
                        variant='subtitle1'
                        color='secondary'                        >
                        {`${report.name}`}
                    <Avatar
                        alt="Remy Sharp"
                        className={classes.avatar}
                        style={{background: backgroundColor}}
                    >
                        <FormatAlignLeft
                            style={{fontSize: 60, color: "white"}}
                        />
                    </Avatar>
                    </Typography>
                    <Divider className={classes.divider} />
                    <div
                        className={classes.content}
                    >
                        <Typography
                            variant='body1'
                            color='primary'
                        >
                            {toFormattedDate(report.date)}
                        </Typography>
                    </div>
                </Paper>
            </ReportiousLink>
        </div>
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
        justifyContent: 'center',
    },
    reportPreview: {
        margin: theme.spacing.unit * 2,
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
    const relevantReports = reportTypeToPreview[reportType].sort((r1, r2) => r2.date - r1.date);

    const backgroundColors = chroma.scale(['#2A4858', '#0a65bc', '#8dc6da']).domain([0, relevantReports.length]);

    return (
        <div className={classes.root}>
            <ReportiousTitle>
                Preview
            </ReportiousTitle>
            <div className={classes.content}>
                <div className={classes.preview}>
                {relevantReports.map((report, idx) => (
                    <ReportPreview
                        key={report.id}
                        className={classes.reportPreview}
                        report={report}
                        backgroundColor={backgroundColors(idx).hex()}
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