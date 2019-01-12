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
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/EditRounded';
import Cancel from '@material-ui/icons/CancelRounded';

import {
    toFormattedDate,
    getHoursList,
    getTotalWorkingHours
} from '../../utils.jsx'
import NumberFormatTextField from '../NumberFormatTextField.jsx'


const styles = theme => ({
    root: {
    },
    iconButtons: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
    },
    edit: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit / 2}px`,
    },
    close: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit / 2}px`,
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
            report: this.props.report, // Should get from this.props.reportId in ComponentDidMount by API request.
            editMode: this.props.editMode,
            isNewReport: this.props.isNewReport
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

    onDrivingKMChange = event => {
        this.setState(prevState => {
            const { report } = prevState;

            return {
                report: {
                    ...report,
                    drivingInKM: event.target.value
                }
            }
        })
    };

    onEnableEditMode = event => {
        this.setState({
            editMode: true
        })
    };

    onClose = event => {
        this.props.onClose(event);
        this.setState({
            editMode: false
        })
    };

    onCancel = event => {
        this.setState({
            editMode: false
        })
    };

    onSave = event => {
        this.props.saveReport(event);
        this.setState({
            editMode: false
        })
    };

    onCreate = evemt => {
        this.props.addReport(event);
        this.setState({
            editMode: false,
            isNewReport: false
        })
    };

    getTotalWorkingHours = () => {
        const { report } = this.state;
        return getTotalWorkingHours(report);
    };

    render() {
        const { report, editMode, isNewReport } = this.state;
        const { classes, isOpen, downloadReport } = this.props;
        const totalWorkingHours = this.getTotalWorkingHours();
        const possibleWorkHoursList = getHoursList({minHour: 8, maxHour: 19});

        const ReportSubjects = ['מספר גנים', 'עד שעה', 'משעה', 'יום בחודש'].map((subject, idx) => (
            <Typography
                key={`report-subject-${idx}`}
                className={classes.reportRowItem}
            >
                {subject}
            </Typography>
        ));

        const ReportWorkingHours = report.daysReport.map((dayReport, idx) => (
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
                        disabled={editMode === false}
                    />
                    <Select
                        value={dayReport.endHour}
                        onChange={this.onEndHourChange(idx)}
                        name="בחר"
                        displayEmpty
                        className={ClassNames(classes.reportRowItem, classes.selectHour)}
                        disabled={editMode === false}
                    >
                        <MenuItem value="" disabled>
                            בחר
                        </MenuItem>
                        <MenuItem value="-">
                            --
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
                        disabled={editMode === false}
                    >
                        <MenuItem value="" disabled>
                            בחר
                        </MenuItem>
                        <MenuItem value="-">
                            --
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
            ));

        const DroveHours = (
            <TextField
                id="outlined-simple-start-adornment"
                value={report.drivingInKM}
                onChange={this.onDrivingKMChange}
                variant="outlined"
                label="נסיעות"
                className={classes.drivingDistance}
                inputProps={{
                    className: classes.input
                }}
                InputProps={{
                    readOnly: editMode === false,
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

        const Close = (
            (<IconButton
                onClick={this.onClose}
                className={classes.close}
            >
                <Cancel/>
            </IconButton>)
        );

        const IconButtons = (
            <div
                className={classes.iconButtons}
            >
                {
                    editMode === false ?
                        (<IconButton
                            onClick={this.onEnableEditMode}
                            className={classes.edit}
                        >
                            <Edit/>
                        </IconButton>)
                            :
                        null
                }
                {Close}
            </div>
        );

        const ActionButtons = (
            <React.Fragment>
            {editMode === false ? (
                <Button onClick={downloadReport} color="primary">
                    Download
                </Button>)
                   : (
               <React.Fragment>
                   {isNewReport ? (
                           <Button onClick={this.onCreate} color="primary">
                               Create
                           </Button>)
                           : (
                           <Button onClick={this.onSave} color="primary">
                                Save
                           </Button>)
                   }
                    <Button onClick={this.onCancel} color="primary">
                        Cancel
                    </Button>
               </React.Fragment>
                )
            }
            </React.Fragment>
        );

        return (
            <div>
                <Dialog
                    open={isOpen}
                    onClose={this.onClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.root}
                >
                    {IconButtons}
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
                        <div
                            className={classes.reportRow}
                        >
                            {ReportSubjects}
                        </div>
                        <Divider variant='middle'/>
                        <div
                            className={classes.reportDays}
                        >
                            {ReportWorkingHours}
                        </div>
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
                        {ActionButtons}
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles)(Report);