import Container from 'react-bootstrap/Container';


const CaseStatus = (props) => {
  return (
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: 'lightblue',
        color: '#17a2b8'
    }}>
        You are currently viewing case no. {props.id}
    </Container>
  );
}

export default CaseStatus;
