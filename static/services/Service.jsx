import Cookies from 'js-cookie';

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class Service {
    JWT_TOKEN = 'jwt_token';

    constructor() {
        this.client = new ApolloClient({
            link: createHttpLink({
                uri: '/graphql/',
                credentials: 'same-origin',
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken'),
                }
            }),
            cache: new InMemoryCache()
        });

        this._jwt_token = Cookies.get(this.JWT_TOKEN) || null;
    }

    get jwt_token() {
        if (this._jwt_token === null) {
            this._jwt_token = Cookies.get(this.JWT_TOKEN) || null;
        }

        return this._jwt_token;
    }

    set jwt_token(token) {
        this._jwt_token = token || null;
    }
}


export default Service;