//, isSnackbarOpen, onSnackbarClose, snackbarMessage
import { connect } from 'react-redux';

import { ReportiousSnackbar } from '../components/ReportiousComponents';
import {
    closeSnackbar,
} from "../actions";



const mapStateToProps = state => ({
    isOpen: state.snackbar.isOpen,
    variant: state.snackbar.variant,
    message: state.snackbar.message,
});


const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeSnackbar());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportiousSnackbar)