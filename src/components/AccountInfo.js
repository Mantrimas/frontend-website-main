import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import getAccounts from '../helpers/getAccountsByCustomer';


const AccountInfo = (props) => {
  const [accounts, setAccounts] = useState('');
  const [loading, setLoading] = useState(true);

  const setStates = (content) => {
    let accounts = [];
    content.forEach(obj => {
      accounts.push(obj['accountNumber']);
      accounts.push(" ");
    });

    setAccounts(accounts);    
  }

  useEffect(() => {
    if (!accounts) {
      getAccounts(props.custId, setStates);
      console.log("use efekt");
    }
    else {
      setLoading(false);
    }
  });

  if (loading) {
    return "Loading...";
  } else {
    return (
      <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: "#add8e669",
        color: "#17a2b8"
      }}>
        Accounts: {accounts}
      </Container>
    );
  }
}

export default AccountInfo;
