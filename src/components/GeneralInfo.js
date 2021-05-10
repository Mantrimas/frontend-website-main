import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';
import Header from './Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

const GeneralInfo = (props) => {
    const [descriptions, setDescriptions] = useState('');
    const [flags, setFlags] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [caseId, setCaseId] = useState('');

    console.log(props.match.params.id);

    const getDataById = (id) => {
        (
            async () => {
                const response = await fetch('https://localhost:44347/api/Case/' + id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    credentials: 'include'
                });

                const content = await response.json();

                setCaseNumber(content.caseNumber);
                setDescriptions(content.description);
                setFlags(content.activityFlag);
            }
        )();
    };

    if (!descriptions) {
        getDataById(props.match.params.id);
    }

    return (
        <div>
        <Header />
        <Container>
            <Row>
                <Col xs={8}>
                    <Container>
                        <CaseStatus id={caseNumber} />
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

export default withRouter(GeneralInfo);
