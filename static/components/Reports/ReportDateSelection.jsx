import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import {
    MONTHS_LIST,
    YEAR_LIST
} from '../../utils.jsx'


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    select: {
        textAlign: 'center',
        minWidth: 154,
        [theme.breakpoints.up('lg')]: {
            minWidth: 93,
            maxWidth: 93,
        },
        fontSize: 25,
        [theme.breakpoints.down('md')]: {
            fontSize: 50,
        }
    },
});


@withStyles(styles)
class ReportDateSelection extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            classes,
            choosingReportDate,
            onClose,
            selectedReportMonth,
            onSelectedReportMonth,
            selectedReportYear,
            onSelectedReportYear,
            onSaveReportDate
        } = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth='md'
                open={choosingReportDate}
                onClose={this.onClose}
            >
                <DialogTitle
                    disableTypography
                >
                    <Typography
                        variant='h3'
                    >
                        בחרי את תאריך הדוח
                    </Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form className={classes.root}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="month-input">חודש</InputLabel>
                            <Select
                                className={classes.select}
                                value={selectedReportMonth}
                                onChange={onSelectedReportMonth}
                                input={<Input id="month-input" />}
                            >
                                {
                                    MONTHS_LIST.map((month, idx) => (
                                        <MenuItem
                                            key={month}
                                            value={idx}
                                        >
                                            {month}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="year-input">שנה</InputLabel>
                            <Select
                                className={classes.select}
                                value={selectedReportYear}
                                onChange={onSelectedReportYear}
                                input={<Input id="year-input" />}
                            >
                                {
                                    YEAR_LIST.map(year => (
                                        <MenuItem
                                            key={year}
                                            value={year}
                                        >
                                            {year}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSaveReportDate} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default ReportDateSelection