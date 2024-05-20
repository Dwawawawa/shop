/*eslint-disable*/
import React, { useState, useContext, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart.js';

const Detail = lazy(() => import('./Detail.js'));

export const 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="jumbotron">
                <h1>20% Season Off!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </div>
              <div className="container">
                <재고context.Provider value={재고}>
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Card shoes={shoes[i]} i={i} key={i} />;
                    })}
                  </div>
                </재고context.Provider>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((result) => {
                        shoes변경([...shoes, ...result.data]);
                      })
                      .catch(() => {
                        console.log('실패');
                      });
                  }}
                >
                  더보기
                </button>
              </div>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <재고context.Provider value={재고}>
              <Suspense fallback={<div>로딩중이에요</div>}>
                <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
              </Suspense>
            </재고context.Provider>
          }
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  let navigate = useNavigate();

  return (
    <div className="col-md-4" onClick={() => navigate('/detail/' + props.shoes.id)}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
      <Test />
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>;
}

export default App;
