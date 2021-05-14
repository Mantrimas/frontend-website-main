import Container from 'react-bootstrap/Container';


const Comment = (props) => {
  return (
    <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: 'lightblue',
        color: '#17a2b8'
    }}>
        {props.message}
    </Container>
  );
}

export default Comment;
