import { useState } from 'react';
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.scss';

import productInfo from './data.js';

function App() {
	let [shoes, setShoes] = useState(productInfo);

  return (
    <div className="App">
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">
						Another action
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
						Separated link
					</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		<div className="visual"></div>
		
		<div className="prd-list">
			<Cardlist shoes={shoes}/>
		</div>

		
    </div>
  );
}

function Cardlist(props){
	
	return props.shoes.map(function(obj, idx){
		return(
			<div className="item" key={idx}>
				<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd0"+ (idx+1) +".jpg"} alt="" /></div>
				<p className="title">{obj.title}</p>
				<p className="detail">{obj.content}</p>
			</div>
		)
	})
}

export default App;
