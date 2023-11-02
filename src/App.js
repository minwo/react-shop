import { useEffect, useState } from 'react';
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.scss';
import { Route, Routes, link, useNavigate, Outlet } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { productInfo } from './store';

function App() {
	let navigate = useNavigate();

	let state = useSelector((state) => {
		return state
	})

	let [shoes, setShoes] = useState(state.productInfo);

	useEffect(() => {
		localStorage.setItem('최근본상품', JSON.stringify( [] ))
	},[])

  return (
    <div className="App">
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/">SHOP</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link onClick={ () => { navigate('/') } }>Home</Nav.Link>
					<Nav.Link onClick={() => { navigate('/Detail/0') }}>Detail</Nav.Link>
					<Nav.Link onClick={() => { navigate('/Cart') }}>Cart</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		<Routes>
			<Route path="/" element={<Main/>}></Route>
			<Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
			<Route path="/cart/" element={<Cart shoes={shoes}/>}></Route>
		</Routes>

		
    </div>
  );
}

export default App;
