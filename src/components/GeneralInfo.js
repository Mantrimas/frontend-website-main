import CaseInfo from './CaseInfo';
import CaseStatus from './CaseStatus';
import AccountInfo from './AccountInfo';
import DecisionBox from './DecisionBox';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GeneralInfo() {
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <Container>
                        <CaseStatus />
                        <CaseInfo />
                        <AccountInfo />
                    </Container>
                </Col>
                <Col xs={4} style={{marginTop: "2.5vw"}}>
                    <Container style={{height: "100%"}}>
                        <DecisionBox />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default GeneralInfo;
