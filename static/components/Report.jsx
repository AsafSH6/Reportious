import React from 'react';
import ClassNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { toFormattedDate, getHoursList} from '../utils.jsx'
import NumberFormatTextField from './NumberFormatTextField.jsx'
import { reports } from '../constants.jsx';



const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

const styles = theme => ({
    root: {

    },
    title: {
        textAlign: 'center',
    },
    content: {
        margin: theme.spacing.unit * 2,
    },
    reportRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    reportRowItem: {
        margin: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
        textAlign: 'center'
    },
    reportDays: {

    },
    input: {
        textAlign: 'center'
    },
    secondContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 90,
        padding: '0px 24px 0px',
    },
    selectHour: {
        minWidth: 82.82,
    },
    drivingDistance: {
        width: 170,
    },
    totalWorkingHours: {
        width: 150,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            report: reports[1] // Should get from this.props.reportId in ComponentDidMount by API request.
        }
    }

    onStartHourChange = idx => event => {
        this.setState(prevState => {
            const { report } = prevState;
            const daysReport = report.daysReport;
            const changedDayReport = daysReport[idx];

            daysReport[idx] = {
                ...changedDayReport,
                'startHour': event.target.value
            };

            return {
                report: {
                    ...report,
                    daysReport: [...daysReport]
                }
            }
        })
    };

    onEndHourChange = idx => event => {
        this.setState(prevState => {
            const { report } = prevState;
            const daysReport = report.daysReport;
            const changedDayReport = daysReport[idx];

            daysReport[idx] = {
                ...changedDayReport,
                'endHour': event.target.value
            };

            return {
                report: {
                    ...report,
                    daysReport: [...daysReport]
                }
            }
        })
    };

    onAmountChange = idx => event => {
        this.setState(prevState => {
            const { report } = prevState;
            const daysReport = report.daysReport;
            const changedDayReport = daysReport[idx];

            daysReport[idx] = {
                ...changedDayReport,
                'amount': event.target.value
            };

            return {
                report: {
                    ...report,
                    daysReport: [...daysReport]
                }
            }
        })
    };

    getTotalWorkingHours = () => {
        const { report } = this.state;
        const reducer = (sum, dayReport) => {
            const startHour = Date.parse(`01 Jan 1970 ${dayReport.startHour}:00 GMT`);
            const endHour = Date.parse(`01 Jan 1970 ${dayReport.endHour}:00 GMT`);
            if(startHour && endHour && endHour > startHour) {  // Invalid day report.
                const dayWorkingHours = endHour - startHour;
                return sum + dayWorkingHours;
            }
            else {
                return sum;
            }
        };

        return (report.daysReport.reduce(reducer, 0) / HOUR_IN_MILLISECONDS);
    };

    render() {
        const { report } = this.state;
        const { classes, isOpen, onClose } = this.props;
        const totalWorkingHours = this.getTotalWorkingHours();
        const possibleWorkHoursList = getHoursList({minHour: 8, maxHour: 19});

        const ReportSubjects = (
            <div className={classes.reportRow}>
                <Typography
                    className={classes.reportRowItem}
                >
                    מספר גנים
                </Typography>
                <Typography
                    className={classes.reportRowItem}
                >
                    עד שעה
                </Typography>
                <Typography
                    className={classes.reportRowItem}
                >
                    משעה
                </Typography>
                <Typography
                    className={classes.reportRowItem}
                >
                    יום בחודש
                </Typography>
            </div>
        );

        const ReportWorkingHours = (
            <div
                className={classes.reportDays}
            >
                {report.daysReport.map((dayReport, idx) => (
                    <div
                        key={`day-report-${report.id}-${idx}`}
                        className={classes.reportRow}
                    >
                        <TextField
                            className={classes.reportRowItem}
                            onChange={this.onAmountChange(idx)}
                            value={dayReport.amount}
                            inputProps={{
                                className: classes.input
                            }}
                            InputProps={{
                                inputComponent: NumberFormatTextField,
                            }}
                        />
                        <Select
                            value={dayReport.endHour}
                            onChange={this.onEndHourChange(idx)}
                            name="בחר"
                            displayEmpty
                            className={ClassNames(classes.reportRowItem, classes.selectHour)}
                        >
                            <MenuItem value="" disabled>
                                בחר
                            </MenuItem>
                            {possibleWorkHoursList.map((workHour, idx) => (
                                <MenuItem
                                    key={`end-hour-${report.id}-${idx}`}
                                    value={workHour}>
                                    {workHour}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            value={dayReport.startHour}
                            onChange={this.onStartHourChange(idx)}
                            name="בחר"
                            displayEmpty
                            className={ClassNames(classes.reportRowItem, classes.selectHour)}
                        >
                            <MenuItem value="" disabled>
                                בחר
                            </MenuItem>
                            {possibleWorkHoursList.map((workHour, idx) => (
                                <MenuItem
                                    key={`start-hour-${report.id}-${idx}`}
                                    value={workHour}>
                                    {workHour}
                                </MenuItem>
                            ))}
                        </Select>
                        <TextField
                            className={classes.reportRowItem}
                            value={`.${dayReport.day}`}
                            inputProps={{
                                className: classes.input
                            }}
                            InputProps={{
                                disableUnderline: true, readOnly: true
                            }}
                        />
                    </div>
                ))}
            </div>
        );
        
        const DroveHours = (
            <TextField
                id="outlined-simple-start-adornment"
                value={report.drivingInKM}
                variant="outlined"
                label="נסיעות"
                className={classes.drivingDistance}
                inputProps={{
                    className: classes.input
                }}
                InputProps={{
                    inputComponent: NumberFormatTextField,
                    startAdornment: <InputAdornment position="start">קילומטרים</InputAdornment>,
                }}
            />
        );
        
        const WorkedHours = (
            <TextField
                id="outlined-read-only-input"
                className={classes.totalWorkingHours}
                label="סך כל שעות עבודה"
                value={totalWorkingHours}
                margin="normal"
                inputProps={{
                    className: classes.input
                }}
                InputProps={{
                    readOnly: true,
                    inputComponent: NumberFormatTextField,
                }}
                variant="outlined"
            />
        );

        const Download = (
            <Button onClick={onClose} color="primary">
                Download
            </Button>
        );

        return (
            <div>
                <Dialog
                    open={isOpen}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle
                        id="form-dialog-title"
                        className={classes.title}
                    >
                        {toFormattedDate(report.date)}
                    </DialogTitle>
                    <Divider light/>
                    <DialogContent
                        className={classes.content}
                    >
                        {ReportSubjects}
                        <Divider variant='middle'/>
                        {ReportWorkingHours}
                    </DialogContent>
                    <DialogContent
                        className={classes.secondContent}
                    >
                        {WorkedHours}
                        {DroveHours}
                    </DialogContent>
                    <Divider light/>
                    <DialogActions
                        className={classes.actions}
                    >
                        {Download}
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles)(Report);