import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Report from './Report.jsx';


class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            creatingReport: false
        }
    }

    onCreateReport = () => {
        this.setState({creatingReport: true});
    };

    onClose = () => {
        this.setState({creatingReport: false});
    };

    render() {
        const { creatingReport } = this.state;

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
                    reportId={0}
                    editMode={true}
                />
            </div>
        )
    }
}

export default CreateReportButton