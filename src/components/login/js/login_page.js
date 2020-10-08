import React, { useState } from 'react';
import '../scss/_home.scss';

import TextField from '@material-ui/core/TextField';
import LogoImage from '../../assets/logo/logo_full.png';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const LoginPage = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const config = { headers: { 'Content-Type': 'application/json' } };
    // const staff = { 'username': username, 'password': password };

    // const executeJwtAuthenticationService = () => {
    //     axios.post(`/login`, JSON.stringify(staff), config).then(response => {
    //         const jwtToken = response.headers.authorization;
    //         if (jwtToken !== null) {    
    //             sessionStorage.setItem("jwt", jwtToken);    
    //         } 
    //     }).catch((error) => {
    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log(error.request);
    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //         }
    //         console.log('Error config', error.config);
    //     });
    // }

    return (
        <div className="form-background">
            <div className="container-main">
                <form className="form-signin" method="post" action="/login" autoComplete="off">
                    <div className="container-logo">
                        <div className="logo-img-login" style={{
                            backgroundImage: `url(${LogoImage})`,
                        }} />
                    </div>
                    <h2 className="form-signin-heading noselect">Please sign in</h2>
                    <div className="container-username">
                        <TextField
                            id="username"
                            label="Username"
                            name="username"
                            type="username"
                            autoComplete="off"
                            variant="outlined"
                            required
                        // onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="container-password">
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="outlined"
                            required
                        // onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="container-button">
                        <Button className="signin-button btn" variant="contained" color="primary" type="submit" variant="contained" color="primary">
                            <span className="btn-post-font"> login</span>
                        </Button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default LoginPage;