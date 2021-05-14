
import DateTimeOffset from 'datetime-offset';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Comment from './Comment';

import React, { useState, useEffect, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import createComment from '../helpers/createComment';
import getCommentData from '../helpers/getCommentData';
import editCase from '../helpers/editCase';

const DecisionBox = (props) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [activeItem, setActiveItem] = useState('');
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [value, setValue] = useState(),
        onInput = ({ target: { value } }) => setValue(value),
        onFormSubmit = e => {
            e.preventDefault()
            createComment({
                userId: props.userId,
                caseId: props.match.params.id,
                comment: value.toString(),
                createdAt: (new DateTimeOffset(new Date())).datetime
            });
            setValue()
        }

    const [decisionValue, setDecisionValue] = useState(),
        onDecision = ({ target: { value } }) => setDecisionValue(value),
        onDecisionFormSubmit = e => {
            e.preventDefault()
            //put request to close case and add decision
            editCase({
                id: props.match.params.id,
                caseStatus: 1,
                decision: activeItem + decisionValue.toString()
            })
            setDecisionValue()
        }

    const setStates = (contents) => {
        setContent(contents);
        var commentArray = [];
        contents.forEach(function (entity) {
            commentArray.push(<Comment message={entity.comment} />);
        });

        setComments(commentArray);
    }

    const handleClick = (item) => {
        setActiveItem(item);
    }

    useEffect(() => {
        if (!content) {
            getCommentData(props.match.params.id, setStates)
        }
        else {
            setLoading(false);
        }
    });

    return (
        <Container className="p-5" style={{
            height: "100%",
            backgroundColor: "#add8e669",
            color: "#17a2b8"
        }}>
            <Tabs defaultActiveKey="home" style={{ color: "darkcyan" }}>
                <Tab eventKey="home" title="Decision">
                    <ListGroup style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                        <ListGroup.Item action onClick={() => handleClick("Normal")} className={(activeItem === "Normal") ? "active" : ""}>
                            Normal behaviour
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => handleClick("Unusual")} className={(activeItem === "Unusual") ? "active" : ""}>
                            Unusual behaviour
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => handleClick("MoreInfo")} className={(activeItem === "MoreInfo") ? "active" : ""}>
                            More information required
                        </ListGroup.Item>
                    </ListGroup>
                    <Form onSubmit={onDecisionFormSubmit}>
                        <Form.Group>
                            <Form.Label>Decision</Form.Label>
                            <Form.Control as="textarea" onChange={onDecision} value={decisionValue} rows={4} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="profile" title="Comments">
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label>Add comment</Form.Label>
                            <Form.Control type="text" onChange={onInput} value={value} rows={4} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    Comments:
                    {!loading && comments}
                </Tab>
            </Tabs>
        </Container>
    );
}

export default withRouter(DecisionBox);
