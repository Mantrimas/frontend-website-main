import GeneralInfo from './GeneralInfo';
import Welcome from './Welcome';
import Login from './Login';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UserWindow from './UserWindow';
import CustomerList from './CustomerList';


const App = () => {
    const [loggedIn, setLoggedIn] = useState('true');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://localhost:44347/api/Session/session', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    credentials: 'include'
                });

                if (response.ok) {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            }
        )();
    });

    if (loggedIn == true) {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Welcome} />
                <Route path="/cases" exact component={UserWindow} />
                <Route path="/cases/current/:id" exact component={GeneralInfo} />
                <Route path="/customers" exact component={CustomerList} />
            </BrowserRouter>
        );
    } else if (loggedIn == false) {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login} />
                <Redirect to={{ pathname: '/' }} />
            </BrowserRouter>
            
        );
    } else {
        return (<div></div>)
    }
}

export default App;