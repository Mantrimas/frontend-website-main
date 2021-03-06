import Container from 'react-bootstrap/Container';
import TransactionTable from './TransactionTable';

const TransactionInfo = (props) => {
  return (
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: "#add8e669",
        color: "#17a2b8",
        marginBottom: "200px",
        maxWidth: '90%'
    }}>
        Transaction Information
      <br></br>
        <TransactionTable custId={props.custId}/>
    </Container>
  );
}

export default TransactionInfo;
