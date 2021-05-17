import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Header from './Header';
import CaseSingle from './CaseSingle';
import { withRouter } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserWindow = (props) => {

    const [openCaseComponents, setOpenCaseComponents] = useState('');
    const [closedCaseComponents, setClosedCaseComponents] = useState('');

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

                var openCaseComponents = [];
                var closedCaseComponents = [];

                content.forEach(function (entity) {
                    if (entity.caseStatus == 0) {
                        openCaseComponents.push(<CaseSingle id={entity.id} />);
                    } else {
                        closedCaseComponents.push(<CaseSingle id={entity.id} />);
                    }
                });

                setOpenCaseComponents(openCaseComponents);
                setClosedCaseComponents(closedCaseComponents);
            }
        )();
    };

    if (!openCaseComponents) {
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
                                {openCaseComponents}
                            </Container>
                        </Container>
                    </Col>
                    <Col xs={4} style={{ marginTop: "2.5vw" }}>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Container style={{ maxWidth: "100%" }}>
                            <Container style={{ display: "flex", maxWidth: "100%", padding: "40px 55px" }}>
                                <h1 style={{ color: "lightblue" }}>Closed cases</h1>
                            </Container>

                            <Container style={{ marginLeft: "50px", display: "inline-block", backgroundColor: "#add8e669", padding: "50px" }}>
                                {closedCaseComponents}
                            </Container>
                        </Container>
                    </Col>
                    <Col xs={4} style={{ marginTop: "2.5vw" }}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default withRouter(UserWindow);
