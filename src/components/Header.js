import './Header.css';
import './css/Login.css';

function Header() {
  return (
    <div className="Header">
      <div style={{
        display: 'flex',
        height: '100px',
        width: '100%',
        backgroundColor: 'lightBlue',
        color: '#17a2b8'}}>
        <div style={{
          justifyContent: "center",
          display: "flex",
          width: "18%",
          alignItems: "center"}}>
            <div className="logo" style={{
              fontSize: "3vw"}}>
              BVIS
            </div>
        </div>
      <div className="navButton" >
        <div>Cases</div>
      </div>

      <div className="navButton" >
        <div>Customers  </div>
      </div>

      <div className="navButton" >
        <div>Tools</div>
      </div>

      <div className="navButton" style={{justifyContent: "end", width: "40%", paddingRight: "20px"}} >
        <div>Log Out</div>
      </div>

      </div>
    </div>
  );
}

export default Header;
