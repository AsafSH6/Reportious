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
import { ReportiousTitle, ReportiousButton, ReportiousLink } from './ReportiousComponents';
import ViewReport from './ViewReport.jsx';


const toFormattedDate = date => (
    moment(date).format('DD/MM/YYYY')
);

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

class ReportPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewingReport: this.props.viewingReport
        };
    }

    openViewReport = () => {
        this.setState({viewingReport: true});
    };

    closeViewReport = () => {
        this.setState({viewingReport: false});
    };

    render() {
        const { viewingReport } = this.state;
        const { classes, className, report, backgroundColor } = this.props;

        return (
            <div>
                <ReportiousButton
                    key={report.name}
                    className={className}
                    variant='text'
                    onClick={this.openViewReport}
                >
                    <Paper
                        elevation={1}
                        className={classes.root}
                    >
                        <Typography
                            variant='subtitle1'
                            color='secondary'>
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
                        <Divider className={classes.divider}/>
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
                </ReportiousButton>
                <ViewReport
                    isOpen={viewingReport}
                    onClose={this.closeViewReport}
                    reportId={report.id}
                />
            </div>
        )
    }
};

ReportPreview = withStyles(reportStyle)(ReportPreview);

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

class ReportsPreview extends React.Component {
    constructor(props) {
        super(props);

        const reportType = this.props.match.params.reportType;
        this.relevantReports = reportTypeToPreview[reportType].sort((r1, r2) => r2.date - r1.date);
        this.colors = chroma.scale(['#2A4858', '#0a65bc', '#8dc6da']).domain([0, this.relevantReports.length]);
    }

    indexToColor = index => this.colors(index).hex();

    render() {
        const { classes, match } = this.props;
        const { reportType, viewingReportId } = match.params;

        return (
            <div className={classes.root}>
                <ReportiousTitle>
                    Preview
                </ReportiousTitle>
                <div className={classes.content}>
                    <div className={classes.preview}>
                        {this.relevantReports.map((report, idx) => (
                            <ReportPreview
                                key={report.id}
                                className={classes.reportPreview}
                                report={report}
                                viewingReport={viewingReportId === String(report.id)}
                                backgroundColor={this.indexToColor(idx)}
                            />
                        ))}
                    </div>
                    <div
                        className={classes.create}
                    >
                        <ReportiousLink
                            to={`/create-report/${reportType}/`}
                            useButton={false}
                        >
                            <Fab
                                color='primary'
                            >
                                <AddIcon fontSize='default'/>
                            </Fab>
                        </ReportiousLink>
                    </div>
                </div>
            </div>
        )
    }
};


export default withStyles(reportsPreviewStyle)(ReportsPreview);