import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ReportDateSelection from './ReportDateSelection.jsx';
import { getEmptyReport } from '../../utils.jsx';


const styles = theme => ({
    createReport: {
        [theme.breakpoints.down('md')]: {
            width: 156,
            height: 156
        }
    },
    addIcon: {
        [theme.breakpoints.down('md')]: {
            fontSize: 100
        }
    },
});


@withStyles(styles)
class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();

        this.state = {
            choosingReportDate: false,
            selectedReportMonth: currentDate.getMonth(),
            selectedReportYear: currentDate.getFullYear(),
        }
    }

    chooseReportDate = () => {
        this.setState({
            choosingReportDate: true,
        })
    };

    onSelectedReportMonth = event => {
        this.setState({
            selectedReportMonth: Number(event.target.value)
        });
    };

    onSelectedReportYear = event => {
        this.setState({
            selectedReportYear: Number(event.target.value)
        });
    };

    createReportWithSelectedReportDate = () => {
        const { selectedReportMonth, selectedReportYear } = this.state;
        const selectedDate = new Date(selectedReportYear, selectedReportMonth);
        const newReport = getEmptyReport(selectedDate);
        this.props.editNewReport(newReport);

        this.setState({
            choosingReportDate: false,
        });
    };

    onClose = () => {
        this.setState({
            choosingReportDate: false,
        });
    };

    render() {
        const {
            choosingReportDate,
            selectedReportMonth,
            selectedReportYear,
        } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <Fab
                    className={classes.createReport}
                    color='primary'
                    onClick={this.chooseReportDate}
                >
                    <AddIcon
                        className={classes.addIcon}
                        fontSize='default'
                    />
                </Fab>
                <ReportDateSelection
                    choosingReportDate={choosingReportDate}
                    onClose={this.onClose}
                    selectedReportMonth={selectedReportMonth}
                    onSelectedReportMonth={this.onSelectedReportMonth}
                    selectedReportYear={selectedReportYear}
                    onSelectedReportYear={this.onSelectedReportYear}
                    onSaveReportDate={this.createReportWithSelectedReportDate}
                />
            </div>
        )
    }
}

export default CreateReportButton