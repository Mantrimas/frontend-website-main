import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';

import { Collapse } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getDataById from '../helpers/getCaseData';


const CaseSingle = (props) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const setStates = (data) => {
        setContent(data);
    }

    useEffect(() => {
        if (!content) {
            getDataById(props.id, setStates);
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
            <Container style={{ display: "inline-block", padding: "0 55px" }}>
                <Button color="primary" onClick={toggle} style={{ textAlign: "inherit", marginBottom: '1rem', backgroundColor: 'lightblue', color: '#17a2b8', width: "100%" }}>Case No. {content.caseNumber}</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <p>{content.description}</p>
                            <p>Activity flag: {content.activityFlag}</p>
                            <Link to={`/cases/current/${props.id}`}>
                                <Button color="warning">Open</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </Collapse>
            </Container>
        )
    }
}

export default withRouter(CaseSingle);