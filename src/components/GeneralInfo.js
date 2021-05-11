import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';
import Header from './Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import getDataById from '../helpers/getCaseData';

const GeneralInfo = (props) => {
    const [descriptions, setDescriptions] = useState('');
    const [flags, setFlags] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [customerId, setCustomerId] = useState('');

    //getDataById(id);

    const setStates = (content) => {
        setCaseNumber(content.caseNumber);
        setDescriptions(content.description);
        setFlags(content.activityFlag);
        setCustomerId(content.customerId);
    }
    
    if (!descriptions) {
        getDataById(props.match.params.id, setStates);
    }

    return (
        <div>
        <Header />
        <Container>
            <Row>
                <Col xs={8}>
                    <Container>
                        <CaseStatus id={caseNumber} />
                        <CaseInfo custId={customerId} />
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
