import React, { useState } from 'react';
import './css/Login.css';

import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [userName, setUsername] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://localhost:44347/api/authmanagement/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        setUsername(content.userName);

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={{
            pathname: "/",
            state: userName
        }} />;
    }

    return (
        <div id="login">
            <h3 className="logo text-center pt-5">BVIS</h3>
            <h2 className="text-center">Bylų valdymo informacinė sistema.</h2>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">

                            <form id="login-form" className="form" onSubmit={submit}>
                                <h3 className="text-center" style={{
                                    marginBottom: "35px"
                                }}>Prisijungimas</h3>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-info">El. paštas</label><br />
                                    <input type="email" className="form-control"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Slaptažodis</label><br />
                                    <input type="password" className="form-control"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group text-center" style={{
                                    marginTop: "80px",
                                    position: "relative",
                                }}>
                                    <div style={{
                                        transform: "translateY(-50%)"
                                    }}>
                                        <button type="submit" className="btn btn-info btn-md" style={{
                                            padding: "3% 30%"
                                        }}>Prisijungti </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
