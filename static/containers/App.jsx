import { connect } from 'react-redux';

import App from '../components/App.jsx';

const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn // TODO: Send request to the server to check it.
});

export default connect(
    mapStateToProps,
    null
)(App)