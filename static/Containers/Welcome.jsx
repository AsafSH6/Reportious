import { connect } from 'react-redux';

import Welcome from '../components/Welcome.jsx';

const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn // TODO: Send request to the server to check it.
});

export default connect(
    mapStateToProps,
    null
)(Welcome)