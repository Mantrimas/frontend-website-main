import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Header from './Header';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

const UserWindow = (props) => {

    const [cases, setCases] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const getCases = () => {
        (
            async () => {
                const response = await fetch('https://localhost:44347/api/Case', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    credentials: 'include'
                });

                const content = await response.json();

                var ids = [];
                content.forEach(function (entity) {
                    ids.push(entity.id);
                });

                setCases(ids);

                console.log(ids)
            }
        )();
    };

    if (!cases) {
        getCases();
    }


    return (
        <div>
            <Header />
            <Container style={{ display: "flex", maxWidth: "100%", padding: "40px 55px" }}>
                <h1 style={{ color: "lightblue" }}>Currently assigned cases</h1>
            </Container>
            <Container style={{display: "inline-block", padding: "0 55px"}}>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: 'lightblue', color: '#17a2b8', width: "100%" }}>{cases}</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>Case Description</CardBody>
                    </Card>
                </Collapse>
            </Container>

            <Container style={{display: "inline-block", padding: "0 55px"}}>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: 'lightblue', color: '#17a2b8', width: "100%" }}>{cases}</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>Case Description</CardBody>
                    </Card>
                </Collapse>
            </Container>

            <Container style={{display: "inline-block", padding: "0 55px"}}>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: 'lightblue', color: '#17a2b8', width: "100%" }}>{cases}</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>Case Description</CardBody>
                    </Card>
                </Collapse>
            </Container>
        </div>
    );
}

export default UserWindow;
