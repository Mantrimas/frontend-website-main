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

    const [cases, setCases] = useState('');


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

    const location = useLocation();

    if(!cases) {
        getCases();
    }

    console.log(cases);

    return (
        <div>
            <Header />
            <div>{cases}</div>
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
