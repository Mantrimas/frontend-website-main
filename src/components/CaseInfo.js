import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import getCustomerData from '../helpers/getCustomerData';

import './css/CaseInfo.css';

const CaseInfo = (props) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    const setStates = (content) => {
        setContent(content);
    }

    useEffect(() => {
        if (!content) {
            getCustomerData(props.custId, setStates)
        }
        else {
            setLoading(false);
        }
    });


    if (loading) {
        return 'Loading...';
    }
    else {
        return (
            <Container className="p-5 customerInfo" >
                <Row>
                    <Col style={{
                        padding: "2px",
                        height: "200px"
                    }}>
                        <Container style={{
                            padding: "2px",
                            paddingBottom: "7.5px",
                            color: "darkcyan"
                        }}>
                            Customer profile
                    </Container>
                        <Container style={{
                            backgroundColor: "lightblue",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            borderRadius: "3%"
                        }}>
                            <h4>{content.firstName} {content.lastName}</h4>
                            <Row>
                                <Col sm={4}><b>Address:</b></Col>
                                <Col sm={8}>{content.address} </Col>
                            </Row>
                            <Row>
                                <Col sm={4}><b>Birth date:</b></Col>
                                <Col sm={8}>{content.birthDate.split("T")[0]} </Col>
                            </Row>
                            <Row>
                                <Col sm={4}><b>Citizenship:</b></Col>
                                <Col sm={8}>{content.citizenship} </Col>
                            </Row>
                            <Row>
                                <Col sm={4}><b>National ID:</b></Col>
                                <Col sm={8}>{content.nationalId} </Col>
                            </Row>
                            <Row>
                                <Col sm={4}><b>Phone:</b></Col>
                                <Col sm={8}>{content.phone} </Col>
                            </Row>
                            <Row>
                                <Col sm={4}><b>Email:</b></Col>
                                <Col sm={8}>{content.email} </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(CaseInfo);
