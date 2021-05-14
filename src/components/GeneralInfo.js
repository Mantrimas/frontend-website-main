import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';
import Header from './Header';
import Inflow from './Inflow';
import TransactionInfo from './TransactionInfo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import getDataById from '../helpers/getCaseData';

const GeneralInfo = (props) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    const setStates = (data) => {
        setContent(data);
    }
 
    useEffect(() => {
        if (!content) {
            getDataById(props.match.params.id, setStates);
        }
        else {
            setLoading(false);
        }
    });

    if (loading) {
        return ("Loading...")
    }
    else {
        return (
            <div>
                <Header />
                <Container style={{ maxWidth: "1800px" }}>
                    <Row>
                        <Col xs={8}>
                            <Container>
                                <CaseStatus id={content.caseNumber} />
                                <CaseInfo custId={content.customerId} />
                                <Inflow />
                                <AccountInfo />
                            </Container>
                        </Col>
                        <Col xs={4} style={{ marginTop: "2.5vw" }}>
                            <Container style={{ height: "100%" }}>
                                <DecisionBox userId={content.userId} />
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <TransactionInfo custId={content.customerId} />
            </div>
        );
    }
}

export default withRouter(GeneralInfo);
