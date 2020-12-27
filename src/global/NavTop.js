import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResponsiveImage from '../global/ResponsiveImage.js';
import fesw from '../img/feswLogo.png';
import Scroll from 'react-scroll';
import { BiWindows } from 'react-icons/bi';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function NavTop() {
  return (
    <>
		  <Navbar bg="dark" variant="grey">
			
		    <Navbar.Brand href= "../" ><ResponsiveImage
								src= { fesw }
								width={ 125 }
								height={ 50 }/></Navbar.Brand> 
		    <Nav className="mr-auto">
		      <Nav.Link href= "../">Inicio</Nav.Link>
		      <Nav.Link href="ano-anteriores/2019">Años Anteriores</Nav.Link>
		      <Nav.Link href="#final">Contacto</Nav.Link>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
		  </Navbar>
		</>
  );
}

export default NavTop;