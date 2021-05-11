import React, { useState } from 'react';
import './css/Login.css';

import { Route, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import App from './App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

        if (!response.ok) {
            handleShow()
        } else {
            setRedirect(true);
        }
    }

    if (redirect) {
        console.log("swx");
        return <Route path="/" exact component={App}></Route>
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

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Login failed</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Please try again</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
