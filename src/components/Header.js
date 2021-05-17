import './css/Header.css';
import './css/Login.css';
import logout from '../helpers/logout';

import { BrowserRouter, Route, Link, withRouter, useHistory } from 'react-router-dom';

const Header = (props) => {

  const history = useHistory()

  const logoutHandler = () => {
    logout(history.go());
  }

  return (
    <div className="Header">
      <div style={{
        display: 'flex',
        height: '100px',
        width: '100%',
        backgroundColor: 'lightBlue',
        color: '#17a2b8'
      }}>
        <div style={{
          justifyContent: "center",
          display: "flex",
          width: "18%",
          alignItems: "center"
        }}>
          <div className="logo" style={{
            fontSize: "3vw"
          }}>
            <Link to="/" className="okbro">BVIS</Link>
            </div>
        </div>


          <div className="navButton" >
            <Link to="/cases" className="link">Cases</Link>
          </div>

          <div className="navButton" >
            <Link to="/customers" className="link">Customers</Link>
          </div>

          <div className="navButton" style={{ justifyContent: "end", width: "40%", paddingRight: "20px" }} >
          <Link to="/" className="link" onClick={logoutHandler}>Log Out</Link>
          </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
