import React from 'react';
import ClassNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import ReportPreview from './ReportPreview.jsx';
import CreateReportButton from './CreateReportButton.jsx';


const reportsPreviewStyle = theme => ({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    content: {
        flex: 1,
        margin: theme.spacing.unit * 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    preview: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reportsPreview: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    reportPreview: {
        margin: theme.spacing.unit * 2,
        [theme.breakpoints.down('md')]: {
            minWidth: 303,
            minHeight: 390
        }
    },
    createReport: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

class Reports extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadReports();
    }

    indexToColor = index => this.props.colors(index).hex();

    render() {
        const { classes, reports, viewingReportId } = this.props;
        console.log('num of reports', reports.length);
        console.log('first report', reports[0]);

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.preview}>
                        <div className={classes.reportsPreview}>
                            {reports.map((report, idx) => (
                                <ReportPreview
                                    key={`report-preview-${report.id}`}
                                    className={ClassNames(classes.reportPreview, 'animated rotateInUpLeft')}
                                    style={{
                                        animationDelay: `${idx * 0.2}s`
                                    }}
                                    report={report}
                                    alreadyViewingReport={viewingReportId === String(report.id)}
                                    backgroundColor={this.indexToColor(idx)}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className={ClassNames(classes.createReport, 'animated flipInX')}
                        style={{
                            animationDelay: `${reports.length * 0.2 + 0.5}s`
                        }}
                    >
                        <CreateReportButton />
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(reportsPreviewStyle)(Reports);