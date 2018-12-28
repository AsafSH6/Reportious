import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import chroma from 'chroma-js'

import { reportTypeToPreview } from '../../constants.jsx'
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

        const reportType = this.props.match.params.reportType;
        this.relevantReports = reportTypeToPreview[reportType].sort((r1, r2) => r2.date - r1.date);
        this.colors = chroma.scale(['#2A4858', '#0a65bc', '#8dc6da']).domain([0, this.relevantReports.length]);
    }

    indexToColor = index => this.colors(index).hex();

    render() {
        const { classes, match } = this.props;
        const { viewingReportId } = match.params;

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
                        className={classes.createReport}
                    >
                        <CreateReportButton/>
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(reportsPreviewStyle)(Reports);