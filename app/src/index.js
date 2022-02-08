import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import { Auth0Provider } from '@auth0/auth0-react' // Auth0

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-f1w8u9n8.us.auth0.com"
            clientId="7kKWTphZbl8PgNyTWXhXoY2ibdrrRLGy"
            redirectUri={window.location.origin}>
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
