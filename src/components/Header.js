import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div style={{
        height: '100px',
        width: '100%',
        backgroundColor: 'lightBlue',
        color: 'white'}}>
          <div style={{
            textAlign: "left",
            paddingLeft: "100px",
            paddingTop: "30px",
            fontSize: '20px',
          }}>
            Case number: #300250
          </div>
      </div>
    </div>
  );
}

export default Header;
