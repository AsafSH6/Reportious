import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { ReportiousTitle } from '../ReportiousComponents';
import ReportPreview from './ReportPreview.jsx';
import CreateReportButton from './CreateReportButton.jsx';


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

        return (
            <div className={classes.root}>
                <ReportiousTitle>
                    Preview
                </ReportiousTitle>
                <div className={classes.content}>
                    <div className={classes.preview}>
                        {reports.map((report, idx) => (
                            <ReportPreview
                                key={`report-preview-${idx}`}
                                className={classes.reportPreview}
                                report={report}
                                viewingReport={viewingReportId === String(report.id)}
                                backgroundColor={this.indexToColor(idx)}
                            />
                        ))}
                    </div>
                    <div
                        className={classes.createReport}
                    >
                        <CreateReportButton />
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(reportsPreviewStyle)(Reports);