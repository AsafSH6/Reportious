import Cookies from 'js-cookie';
import gql from 'graphql-tag';

import Service from './Service.jsx'

class AuthenticationService extends Service{
    constructor() {
        super();
    }

    isLoggedIn = async () => {
        return this.jwt_token !== null;
    };

    logIn = async (username, password) => {
        const variables = {
            username,
            password,
        };

        const response = await this.client.mutate({
            mutation: gql`
                    mutation TokenAuth($username: String!, $password: String!) {
                        tokenAuth(username: $username, password: $password) {
                            token
                        }
                    }
            `,
            variables
        });

        const token = response.data.tokenAuth.token;
        this.jwt_token = token;
        Cookies.set(this.JWT_TOKEN, this.jwt_token);

        return true;
    }







}


export default new AuthenticationService();