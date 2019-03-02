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
        width: '100%',
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    reportRowItem: {
        margin: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
        textAlign: 'center',
        fontSize: 25,
        [theme.breakpoints.down('md')]: {
            fontSize: 50,
        }
    },
    reportDays: {

    },
    reportRowDay: {
        textAlign: 'center',
        minWidth: 168.5,
        [theme.breakpoints.up('lg')]: {
            minWidth: 30,
            maxWidth: 30,
        }
    },
    reportSelectHour: {
        textAlign: 'center',
        minWidth: 154,
        [theme.breakpoints.up('lg')]: {
            minWidth: 93,
            maxWidth: 93,
        }
    },
    reportRowAmount: {
        textAlign: 'center',
        minWwidth: 168.4,
        [theme.breakpoints.up('lg')]: {
            minWidth: 30,
            maxWidth: 30,
        }
    },
    input: {
        fontSize: 'inherit',
        textAlign: 'center',
    },
    secondContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 120,
        padding: '0px 24px 0px',
    },
    drivingDistance: {
        width: 170,
        [theme.breakpoints.down('md')]: {
            width: 250,
            fontSize: 50,
        }
    },
    totalWorkingHours: {
        width: 150,
        [theme.breakpoints.down('md')]: {
            width: 180,
            fontSize: 50,
        }
    },
    inputLabel: {
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
        }
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    menuItem: {
        fontSize: '2rem',
    }
});


const ReportButton = ({ children , ...props }) => (
    <Button
        color='primary'
        style={{fontSize: '2rem'}}
        {...props}
    >
        {children}
    </Button>
);

const iconStyles = theme => ({
    icon: {
        [theme.breakpoints.down('md')]: {
            fontSize: 50
        }
    },
});

@withStyles(iconStyles)
class ReportIconButton extends React.PureComponent {
    render() {
        const { classes, Icon, ...props } = this.props;
        return (
            <IconButton
                {...props}
            >
                <Icon
                    className={classes.icon}
                />
            </IconButton>
        );
    }
}


@withStyles(styles)
class Report extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onStartHourChange = dayIdx => event => {
        this.props.updateDayStartHour(dayIdx, event.target.value);
    };

    onEndHourChange = dayIdx => event => {
        this.props.updateDayEndHour(dayIdx, event.target.value);
    };

    onAmountChange = dayIdx => event => {
        this.props.updateDayAmount(dayIdx, event.target.value || '');
    };

    onDrivingKMChange = event => {
        this.props.updateDrivingKm(event.target.value);
    };

    onEnableEditMode = event => {
        this.props.editReport(event);
    };

    onClose = event => {
        this.props.closeReport(event);
    };

    onClickAway = event => {
        // Exit page on click away only if not in edit mode.
        if (this.props.editMode === false) {
            return this.onClose(event);
        }
    };

    onCancel = event => {
        this.props.cancelEditReport(event);
    };

    onSave = event => {
        const { report, saveReport } = this.props;
        saveReport(report)
    };

    onCreate = event => {
        const { report, createReport } = this.props;
        createReport(report);
    };

    getTotalWorkingHours = () => {
        const { report } = this.props;
        return getTotalWorkingHours(report);
    };

    render() {
        const { classes, report, isNewReport, editMode, downloadReport } = this.props;
        if (report === null) return null;

        const totalWorkingHours = this.getTotalWorkingHours();
        const possibleWorkHoursList = getHoursList({minHour: 8, maxHour: 19});
        const subjectsClassName = [classes.reportRowAmount, classes.reportSelectHour, classes.reportSelectHour, classes.reportRowDay];
        const ReportSubjects = ["מס' גנים", 'סיום', 'התחלה', 'יום'].map((subject, idx) => (
            <Typography
                key={`report-subject-${idx}`}
                className={ClassNames(classes.reportRowItem, subjectsClassName[idx])}
            >
                {subject}
            </Typography>
        ));

        const ReportWorkingHours = report.days
            .map((day, idx) => (
                <div
                    key={`day-report-${report.id}-${idx}`}
                    className={classes.reportRow}
                >
                    <TextField
                        className={ClassNames(classes.reportRowItem, classes.reportRowAmount)}
                        onChange={this.onAmountChange(idx)}
                        value={day.amount}
                        inputProps={{
                            className: classes.input
                        }}
                        InputProps={{
                            className: classes.input,
                            inputComponent: NumberFormatTextField,
                        }}
                        disabled={editMode === false}
                    />
                    <Select
                        value={day.endHour}
                        onChange={this.onEndHourChange(idx)}
                        name="בחר"
                        displayEmpty
                        className={ClassNames(classes.reportRowItem, classes.reportSelectHour)}
                        disabled={editMode === false}
                    >
                        <MenuItem
                            className={classes.menuItem}
                            value="" disabled
                        >
                            בחר
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            value="-"
                        >
                            --
                        </MenuItem>
                        {possibleWorkHoursList.map((workHour, idx) => (
                            <MenuItem
                                key={`end-hour-${report.id}-${idx}`}
                                className={classes.menuItem}
                                value={workHour}>
                                {workHour}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        value={day.startHour}
                        onChange={this.onStartHourChange(idx)}
                        name="בחר"
                        displayEmpty
                        className={ClassNames(classes.reportRowItem, classes.reportSelectHour)}
                        disabled={editMode === false}
                    >
                        <MenuItem
                            className={classes.menuItem}
                            value="" disabled
                        >
                            בחר
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            value="-"
                        >
                            --
                        </MenuItem>
                        {possibleWorkHoursList.map((workHour, idx) => (
                            <MenuItem
                                key={`start-hour-${report.id}-${idx}`}
                                className={classes.menuItem}
                                value={workHour}>
                                {workHour}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        className={ClassNames(classes.reportRowItem, classes.reportRowDay)}
                        value={`.${day.number}`}
                        inputProps={{
                            className: classes.input
                        }}
                        InputProps={{
                            className: classes.input,
                            disableUnderline: true, readOnly: true
                        }}
                    />
                </div>
            ));

        const DroveHours = (
            <TextField
                id="outlined-simple-start-adornment"
                value={report.drivingInKm}
                onChange={this.onDrivingKMChange}
                variant="outlined"
                label="נסיעות"
                className={classes.drivingDistance}
                InputLabelProps={{
                    className: classes.inputLabel
                }}
                inputProps={{
                    className: classes.input
                }}
                InputProps={{
                    className: classes.input,
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
                InputLabelProps={{
                    className: classes.inputLabel
                }}
                inputProps={{
                    className: classes.input
                }}
                InputProps={{
                    className: classes.input,
                    readOnly: true,
                    inputComponent: NumberFormatTextField,
                }}
                variant="outlined"
            />
        );

        const Close = (
            (<ReportIconButton
                onClick={this.onClose}
                className={classes.close}
                Icon={Cancel}
            >
            </ReportIconButton>)
        );

        const IconButtons = (
            <div
                className={classes.iconButtons}
            >
                {
                    editMode === false ?
                        (<ReportIconButton
                            onClick={this.onEnableEditMode}
                            className={classes.edit}
                            Icon={Edit}
                        >
                        </ReportIconButton>)
                            :
                        null
                }
                {Close}
            </div>
        );

        const ActionButtons = (
            <React.Fragment>
            {editMode === false ? (
                <ReportButton onClick={() => downloadReport(report.id)} size='large' color="primary">
                    הורדה
                </ReportButton>)
                   : (
               <React.Fragment>
                   {isNewReport ? (
                           <ReportButton onClick={this.onCreate} color="primary">
                               יצירה
                           </ReportButton>)
                           : (
                           <ReportButton onClick={this.onSave} color="primary">
                                שמירה
                           </ReportButton>)
                   }
                    <ReportButton onClick={isNewReport ? this.onClose : this.onCancel} color="primary">
                        ביטול
                    </ReportButton>
               </React.Fragment>
                )
            }
            </React.Fragment>
        );

        return (
            <Dialog
                open
                onClose={this.onClickAway}
                maxWidth='md'
                aria-labelledby="form-dialog-title"
                className={classes.root}
            >
                {IconButtons}
                <DialogTitle
                    id="form-dialog-title"
                    className={classes.title}
                    disableTypography
                >
                    <Typography variant='h3'>
                        {toFormattedDate(report.date)}
                    </Typography>
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
        )
    }
}


export default Report;