import Container from 'react-bootstrap/Container';
import CustomerTable from './CustomerTable';
import Header from './Header';

const CustomerList = (props) => {
  return (
    <>
    <Header />
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: "#add8e669",
        color: "#17a2b8",
        height: '500px',
        marginBottom: "200px",
        maxWidth: '90%'
    }}>
        Customer List

        <CustomerTable/>
    </Container>
    </>
  );
}

export default CustomerList;
