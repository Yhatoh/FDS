import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResponsiveImage from '../global/ResponsiveImage.js';
import fesw from '../img/feswLogo.png';
import '../static/quetoyhaciendo.css';
import Search from '../global/Search.js';

function NavTop(props) {
  return (
    <>
		  <Navbar bg="dark" variant="grey" expand="lg">
		  <Navbar.Brand href= "../" ><ResponsiveImage
								src= { fesw }
								width={ 125 }
								height={ 50 }/></Navbar.Brand> 
		  <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark navtugle"/>
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href= "../">Inicio</Nav.Link>
		      <Nav.Link href="2019">Años Anteriores</Nav.Link>
		      <Nav.Link href="#final">Contacto</Nav.Link>
		    </Nav>
			<Search actual={props.actual}/>
	
			</Navbar.Collapse>
		  </Navbar>

		</>
  );
}

export default NavTop;