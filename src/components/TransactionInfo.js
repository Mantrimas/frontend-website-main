import Container from 'react-bootstrap/Container';
import TransactionTable from './TransactionTable';

const TransactionInfo = (props) => {
  return (
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: "#add8e669",
        color: "#17a2b8",
        height: '500px',
        marginBottom: "200px",
        maxWidth: '90%'
    }}>
        Transaction Information

        <TransactionTable custId={props.custId}/>
    </Container>
  );
}

export default TransactionInfo;
