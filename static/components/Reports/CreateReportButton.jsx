import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Report from './Report.jsx';


const getEmptyReport = () => ({
    date: new Date(),
        daysReport: [
    ...[...Array(31)].map((_, idx) => ({
        day: idx + 1,
        startHour: "",
        endHour: "",
        amount: ""
    }))],
    drivingInKM: 0,
});


class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            creatingReport: false,
            newReport: getEmptyReport()
        }
    }

    onCreateReport = () => {
        this.setState({creatingReport: true});
    };

    onClose = () => {
        this.setState({creatingReport: false});
    };

    render() {
        const { creatingReport, newReport } = this.state;

        return (
            <div>
                <Fab
                    color='primary'
                    onClick={this.onCreateReport}
                >
                    <AddIcon
                        fontSize='default'
                    />
                </Fab>
                <Report
                    isOpen={creatingReport}
                    onClose={this.onClose}
                    reportData={newReport}
                    editMode={true}
                />
            </div>
        )
    }
}

export default CreateReportButton