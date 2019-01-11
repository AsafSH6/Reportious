import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Report from '../../containers/Report.jsx';
import { getEmptyReport } from '../../utils.jsx';


class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            creatingReport: false,
            newReport: null
        }
    }

    onCreateReport = () => {
        this.setState({
            creatingReport: true,
            newReport: getEmptyReport()
        });
    };

    onClose = () => {
        this.setState({
            creatingReport: false,
            newReport: null
        });
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