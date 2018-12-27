import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ReportiousTitle, ReportiousLink } from './ReportiousComponents';
import { reports } from '../constants.jsx';
import toFormattedDate from '../utils.jsx'
import NumberFormatTextField from './NumberFormatTextField.jsx'


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


function ViewReport({ classes, isOpen, onClose, reportId }) {
    const report = reports[1];
    const totalWorkingHours = report.daysReport.reduce((accumulator, currentReport) => {  // TODO: validate the hours value.
        const reportWorkingHours = Date.parse(`01 Jan 1970 ${currentReport.endHour}:00 GMT`) - Date.parse(`01 Jan 1970 ${currentReport.startHour}:00 GMT`);
        return accumulator + reportWorkingHours;
    }, 0) / (60 * 60 * 1000);

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
                <Divider light />
                <DialogContent
                    className={classes.content}
                >
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
                    <Divider variant='middle' />
                    <div
                        className={classes.reportDays}
                    >
                        {report.daysReport.map((dayReport, idx) => (
                            <div
                                key={`day-report-${idx}`}
                                className={classes.reportRow}
                            >
                                <TextField
                                    className={classes.reportRowItem}
                                    value={dayReport.amount}
                                    inputProps={{
                                        className: classes.input
                                    }}
                                    InputProps={{
                                        inputComponent: NumberFormatTextField,
                                    }}
                                />
                                <TextField
                                    className={classes.reportRowItem}
                                    value={dayReport.endHour}
                                    inputProps={{
                                        className: classes.input
                                    }}
                                />
                                <Select
                                    value={dayReport.startHour}
                                    name="בחר"
                                    displayEmpty
                                    className={classes.reportRowItem}
                                >
                                    <MenuItem value="" disabled>
                                        בחר
                                    </MenuItem>
                                    {[...Array(22)].map((_, idx) => {
                                        let hour = String(8 + Math.floor(idx / 2));
                                        if(hour.length === 1) {
                                            hour = '0' + hour;
                                        }
                                        const minutes = (idx % 2) ? '30' : '00' ;
                                        return (
                                            <MenuItem key={`start-hour-${report.id}-${idx}`} value={`${hour}:${minutes}`}>{`${hour}:${minutes}`}</MenuItem>
                                        )
                                    })
                                    }
                                </Select>
                                <TextField
                                    className={classes.reportRowItem}
                                    value={`.${dayReport.day}`}
                                    inputProps={{
                                        className: classes.input
                                    }}
                                    InputProps={{
                                        disableUnderline: true, readOnly: true
                                    } }
                                />
                            </div>
                        ))}
                    </div>
                </DialogContent>
                <DialogContent
                    className={classes.secondContent}
                >
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
                    <TextField
                        id="outlined-simple-start-adornment"
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
                </DialogContent>
                <Divider light/>
                <DialogActions
                    className={classes.actions}
                >
                    <Button onClick={onClose} color="primary">
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default withStyles(styles)(ViewReport);