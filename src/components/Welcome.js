import Header from './Header';
import { Container, Jumbotron, Button } from 'react-bootstrap'

const Welcome = () => {
    
    return (
        <div>
            <Header />
            <Container style={{display: "flex", maxWidth: "100%", padding: "40px 55px"}}>
                <h1 style={{color: "lightblue"}}>Updates and announcements</h1>
            </Container>
            <div style={{display:"flex", justifyContent: "left", paddingLeft: "50px"}}>
                <Jumbotron style={{padding: "2rem 2rem", maxWidth: "96.5%"}}>
                    <h3>2021-05-09 News</h3>
                    <hr className="my-2" />
                    <br/>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <br/>
                    <Button className="readButton">Read More</Button>
                </Jumbotron>
            </div>
            <div style={{display:"flex", justifyContent: "left", paddingLeft: "50px"}}>
                <Jumbotron style={{padding: "2rem 2rem", maxWidth: "96.5%"}}>
                    <h3>2021-05-07 News</h3>
                    <hr className="my-2" />
                    <br/>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <br/>
                    <Button className="readButton">Read More</Button>
                </Jumbotron>
            </div>
            <div style={{display:"flex", justifyContent: "left", paddingLeft: "50px"}}>
                <Jumbotron style={{padding: "2rem 2rem", maxWidth: "96.5%"}}>
                    <h3>2021-05-04 News</h3>
                    <hr className="my-2" />
                    <br/>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. </p>
                    <br/>
                    <Button className="readButton">Read More</Button>
                </Jumbotron>
            </div>
        </div>
    );
}

export default Welcome;
