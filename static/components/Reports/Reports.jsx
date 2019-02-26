import React from 'react';

import ClassNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import ReportPreview from '../../containers/ReportPreview.jsx';
import Report from "../../containers/Report.jsx";
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


@withStyles(reportsPreviewStyle)
class Reports extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadReports();
    }

    indexToColor = index => this.props.colors(index).hex();

    render() {
        const { classes, reports } = this.props;

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
                        <CreateReportButton
                            editNewReport={this.props.editNewReport}
                        />
                    </div>
                </div>
                <Report />
            </div>
        )
    }
}


export default Reports;