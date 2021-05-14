import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';
import Header from './Header';

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
        console.log(data);
    }
 
    useEffect(() => {
        console.log("hello");
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
            </div>
        );
    }
}

export default withRouter(GeneralInfo);
