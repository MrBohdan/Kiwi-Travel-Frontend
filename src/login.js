import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/login/js/login_page';


const Login = () => {
    return (
        <div className="container-body">
            <LoginPage />
        </div>
    );
}

ReactDOM.render(<Login />, document.getElementById('login'));