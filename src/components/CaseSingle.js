import React, { useEffect, useState } from 'react'
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

import { Collapse } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getDataById from '../helpers/getCaseData';


const CaseSingle = (props) => {
    const [descriptions, setDescriptions] = useState('');
    const [flags, setFlags] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [caseId, setCaseId] = useState('');

    const toggle = () => setIsOpen(!isOpen);

    const setStates = (content) => {
        setCaseNumber(content.caseNumber);
        setDescriptions(content.description);
        setFlags(content.activityFlag);
        setCaseId(props.id);
    }

    if (!descriptions) {
        getDataById(props.id, setStates);
    }

    return (
        <Container style={{ display: "inline-block", padding: "0 55px" }}>
            <Button color="primary" onClick={toggle} style={{ textAlign: "inherit", marginBottom: '1rem', backgroundColor: 'lightblue', color: '#17a2b8', width: "100%" }}>Case No. {caseNumber}</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p>{descriptions}</p>
                        <p>Activity flag: {flags}</p>
                        <Link to={`/cases/current/${caseId}`}>
                            <Button color="warning">Open</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Collapse>
        </Container>
    )
}

export default withRouter(CaseSingle);