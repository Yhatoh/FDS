import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResponsiveImage from '../global/ResponsiveImage.js';
import fesw from '../img/feswLogo.png';
import '../static/quetoyhaciendo.css';


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
		    <Nav className="mr-auto nav-text">
		      <Nav.Link href= "../">Feria de Software 2020</Nav.Link>
		      <Nav.Link href="2019">Años Anteriores</Nav.Link>
		      <Nav.Link href="#final">Contacto</Nav.Link>
		    </Nav>
			
	
			</Navbar.Collapse>
		  </Navbar>

		</>
  );
}

export default NavTop;