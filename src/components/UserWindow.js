import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Header from './Header';
import DecisionBox from './DecisionBox';
import CaseSingle from './CaseSingle';
import { withRouter } from 'react-router-dom';


import { Collapse } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserWindow = (props) => {

    const [caseIds, setCaseIds] = useState('');
    const [caseComponents, setCaseComponents] = useState('');

    const getData = () => {
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

                var caseIds = [];
                var caseComponents = [];
                content.forEach(function (entity) {
                    caseIds.push(entity.id);
                    caseComponents.push(<CaseSingle id={entity.id} />);
                });

                setCaseIds(caseIds);
                setCaseComponents(caseComponents);
            }
        )();
    };

    if (!caseIds) {
        getData();
    }

    return (
        <div>
            <Header />

            <Container style={{ maxWidth: "100%" }}>
                <Row>
                    <Col xs={8}>
                        <Container style={{ maxWidth: "100%" }}>
                            <Container style={{ display: "flex", maxWidth: "100%", padding: "40px 55px" }}>
                                <h1 style={{ color: "lightblue" }}>Currently assigned cases</h1>
                            </Container>

                            <Container style={{ marginLeft: "50px", display: "inline-block", backgroundColor: "#add8e669", padding: "50px" }}>
                                {caseComponents}
                            </Container>
                        </Container>
                    </Col>
                    <Col xs={4} style={{ marginTop: "2.5vw" }}>
                        <Container style={{ height: "100%" }}>
                            <DecisionBox />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default withRouter(UserWindow);
