import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CaseInfo() {
  return (
    <Container className="p-5" style={{
        marginTop: "2.5vw",
        border: "1px solid black"
    }}>
        <Row>
            <Col sm={4} style={{
                padding: "2px",
                height: "200px",
                border: "1px solid black"
            }}>Customer Information</Col>
            <Col sm={8} style={{
                padding: "2px",
                height: "200px",
                border: "1px solid black"
            }} md={{ offset: 1}} >Inflow overview</Col>
        </Row>
    </Container>
  );
}

export default CaseInfo;
