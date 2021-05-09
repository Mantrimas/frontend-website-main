import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';
import Header from './Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GeneralInfo = (props) => {

    const location = useLocation();

    return (
        <div>
        <Header />
        <div> hey, {location.state} </div>
        <Container>
            <Row>
                <Col xs={8}>
                    <Container>
                        <CaseStatus />
                        <CaseInfo />
                        <AccountInfo />
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

export default GeneralInfo;
