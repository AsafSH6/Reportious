import { connect } from 'react-redux';

import Welcome from '../components/Welcome.jsx';
import {
    loggedIn,
    openSuccessSnackbar,
    openErrorSnackbar
} from '../actions';


const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    loggedIn: () => dispatch(loggedIn()),
    onLoginSuccess: () => dispatch(openSuccessSnackbar('Logged In Successfully')),
    onLoginFailure: () => dispatch(openErrorSnackbar('Failed To Log In'))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)