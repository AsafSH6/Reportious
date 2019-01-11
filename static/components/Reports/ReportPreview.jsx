import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';

import { toFormattedDate } from '../../utils.jsx'
import { ReportiousButton } from '../ReportiousComponents';
import Report from '../../containers/Report.jsx';


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
                <Report
                    isOpen={viewingReport}
                    onClose={this.closeViewReport}
                    report={report}
                    editMode={false}
                    isNewReport={false}
                />
            </div>
        )
    }
}


export default withStyles(reportStyle)(ReportPreview);