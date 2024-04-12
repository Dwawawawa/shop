import { useState} from 'react';
import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import DetailPage from './routes/DetailPage.js'
import MainPage from './routes/MainPage.js';


function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark" className=''>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link onClick={()=> navigate('/event')}>이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path= "/" element ={<MainPage shoes={shoes} />} />
        <Route path= "/detail" element ={<DetailPage shoes={shoes}/>} />
        <Route path='/detail/:id' element ={<DetailPage shoes={shoes}/>} />
        <Route path= "/event" element ={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        
        <Route path= "*" element ={<div>404</div>} />
      </Routes>
    </div>
  );
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      <Link to="/event/one">1</Link>
      <br></br>
      <Link to="/two">2</Link>
    </div>
  )
}


export default App;
