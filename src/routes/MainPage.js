import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';

function MainPage({ shoes }) {
    return (
      <>
        <div className="main-bg"></div>
        <Container>
          <Row>
            {shoes.map((shoe, index) => (
              <Col key={index}>
                <img src={shoe.src} width="80%" alt={shoe.title} />
                <h4>{shoe.title}</h4>
                <p>{shoe.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }

  export default MainPage;