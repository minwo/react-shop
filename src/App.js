import { useState } from 'react';
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.scss';

import productInfo from './data.js';
import { Route, Routes, link, useNavigate, Outlet } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';

function App() {
	let [shoes, setShoes] = useState(productInfo);
	let navigate = useNavigate();

  return (
    <div className="App">
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link onClick={ () => { navigate('/') } }>Home</Nav.Link>
					<Nav.Link onClick={() => { navigate('/Detail') }}>Detail</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		<Routes>
			<Route path="/" element={<Main/>}></Route>
			<Route path="/detail" element={<Detail shoes={shoes}/>}></Route>
		</Routes>

		
    </div>
  );
}

export default App;
