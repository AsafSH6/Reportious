import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Report from '../../containers/Report.jsx';
import ReportDateSelection from './ReportDateSelection.jsx';
import { getEmptyReport } from '../../utils.jsx';


class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);

        const dateBeforeOneMonth = new Date();
        dateBeforeOneMonth.setMonth(dateBeforeOneMonth.getMonth() - 1); // Previous month.

        this.state = {
            choosingReportDate: false,
            selectedReportMonth: dateBeforeOneMonth.getMonth(),
            selectedReportYear: dateBeforeOneMonth.getFullYear(),
            creatingReport: false,
            newReport: null
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

        this.setState({
            choosingReportDate: false,
            creatingReport: true,
            newReport: getEmptyReport(selectedDate)
        });
    };

    onClose = () => {
        this.setState({
            choosingReportDate: false,
            creatingReport: false,
            newReport: null
        });
    };

    render() {
        const {
            creatingReport,
            newReport,
            choosingReportDate,
            selectedReportMonth,
            selectedReportYear,
        } = this.state;

        return (
            <div>
                <Fab
                    color='primary'
                    onClick={this.chooseReportDate}
                >
                    <AddIcon
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
                {
                    newReport ?
                    (<Report
                        isOpen={creatingReport}
                        onClose={this.onClose}
                        report={newReport}
                        editMode={true}
                        isNewReport={true} />)
                    : null
                }
            </div>
        )
    }
}

export default CreateReportButton