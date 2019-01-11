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
                <div className={classes.content}>
                    <div className={classes.preview}>
                        {reports.map((report, idx) => (
                            <ReportPreview
                                key={`report-preview-${idx}`}
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