import Container from 'react-bootstrap/Container';


const CaseStatus = (props) => {
  return (
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        border: "1px solid black",
        backgroundColor: 'lightblue'
    }}>
        You are currently viewing case no. {props.id}
    </Container>
  );
}

export default CaseStatus;
