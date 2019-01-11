import { connect } from 'react-redux';

import Welcome from '../components/Welcome.jsx';
import { loggedIn } from '../actions';


const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    loggedIn: () => dispatch(loggedIn())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)