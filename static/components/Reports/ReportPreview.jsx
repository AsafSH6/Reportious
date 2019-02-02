import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';

import { toFormattedDate } from '../../utils.jsx'
import {getTotalWorkingHours} from "../../utils";


const reportStyle = theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 170,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        }
    },
    title: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]: {
            fontSize: 45
        }
    },
    avatar: {
        margin: theme.spacing.unit,
        width: 100,
        height: 100,
        [theme.breakpoints.down('md')]: {
            width: 200,
            height: 200,
        }
    },
    avatarIcon: {
        color: 'white',
        fontSize: 60,
        [theme.breakpoints.down('md')]: {
            fontSize: 130,
        }
    },
    divider: {
        width: '90%'
    },
    content: {
        margin: theme.spacing.unit * 2,
    },
    workingHours: {
        direction: 'rtl',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
        }
    },
});


@withStyles(reportStyle)
class ReportPreview extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    openReport = () => {
        const { report } = this.props;
        this.props.openReport(report);
    };

    render() {
        const { classes, className, style, report, backgroundColor } = this.props;

        return (
            <div
                className={className}
                style={style}
            >
                <Paper
                    elevation={1}
                    className={classes.paper}
                    onClick={this.openReport}
                >
                    <Typography
                        className={classes.title}
                        variant='subtitle1'
                        color='secondary'
                    >
                        {toFormattedDate(report.date)}
                        <Avatar
                            alt="Remy Sharp"
                            className={classes.avatar}
                            style={{background: backgroundColor}}
                        >
                            <FormatAlignLeft
                                className={classes.avatarIcon}
                            />
                        </Avatar>
                    </Typography>
                    <Divider className={classes.divider}/>
                    <div
                        className={classes.content}
                    >
                        <Typography
                            className={classes.workingHours}
                            variant='body1'
                            color='primary'
                        >
                            {`סה"כ ${getTotalWorkingHours(report)} שעות עבודה`}
                        </Typography>
                    </div>
                </Paper>
            </div>
        )
    }
}


export default ReportPreview;