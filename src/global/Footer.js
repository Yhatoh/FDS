import ausp from '../img/Auspiciadores.png';
import org from '../img/logoUSM.png';
import pat from '../img/patrocina.png';
import fesw from '../img/feswLogo.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ResponsiveImage from '../global/ResponsiveImage.js';
import '../static/quetoyhaciendo.css';
import { MdLocationOn } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Footer() {
  return (
    <>
		<footer className = "footerr">
				<Row className = "footer">
					<Col></Col>
					<Col>
					<div className = "headerFooter" >Organiza</div>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>

				<Row className = "footer">
					<Col xs = "3"></Col>
					<Col><ResponsiveImage
						src= { org }
						width={ 2000 }
						height={ 300 } /></Col>
					<Col xs = "1"></Col>
					<Col xs = "1"></Col>
				</Row>
				<Row className = "footer">
					<Col></Col>
					<Col>
					<div className = "headerFooter" >Auspicia</div>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
				<Row className = "footer">
					<Col xs = "3"></Col>
					<Col>
						<ResponsiveImage
							src= { ausp }
							width={ 2000 }
							height={ 1200 } />
					</Col>
					<Col xs = "1"></Col>
					<Col xs = "1"></Col>
				</Row>
				<Row className = "footer">
					<Col></Col>
					<Col>
					<div className = "headerFooter" >Patrocina</div>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
				<Row className = "footer">
				<Col xs = "3"></Col>
				<Col>
					<ResponsiveImage
						src= { pat }
						width={ 2000 }
						height={ 350 }/>
				</Col>
				<Col xs = "1"></Col>
				<Col xs = "1"></Col>
				</Row>
			

			<Row className="bg-dark rowcustom" width = "98%">
				<Col xs = "3"></Col>
				<Col xs = "2"> 
					<br></br>
					<div className = "footerGrande">XXVIII Feria de Software Virtual</div>
					<div className = "footerGrande"> 2020</div> 
					<a className = "footerMediano" href="https://www.inf.utfsm.cl"><b>Departamento de Informática</b></a>
					<div className = "footerMediano"><b> Universidad Técnica Federico Santa María</b></div> 
					<br></br>
					<a href="https://www.facebook.com/feriadesoftwareutfsm/"><FaFacebookF size = "2em"/>  </a> <a href="https://twitter.com/FeriaSoftware"> <FaTwitter size = "2em"/> </a>
				</Col>
				<Col xs = "2"> 
					<br></br>
					<div className = "footerMediano"><b>Campus Casa Central Valparaíso</b></div> 
					<div className = "footerMediano"> <MdLocationOn size = "1.3em"/>   Av.España 1680, Valparaíso</div> 
					<div className = "footerMediano"> <MdLocalPhone size = "1.3em"/>   +56 (32) 2654242</div> 
					<br></br>
					<div className = "footerMediano"><b>Campus Santiago San Joaquín</b></div> 
					<div className = "footerMediano"> <MdLocationOn size = "1.3em"/>   Av. Vicuña Mackenna 3939, Santiago</div> 
					<div className = "footerMediano"> <MdLocalPhone size = "1.3em"/>   +56 (2) 2303 7200</div> 
					<br></br>
					<a className = "footerCorr" href= "mailto:feria@inf.utfsm.cl">  <MdMail size = "1.4em"/>   feria@inf.utfsm.cl</a> 
					<br></br>
				</Col>
				<Col>
					<Row>
						<Col xs = "3"></Col>
						<Col xs = "5">
							<br></br>
							<ResponsiveImage
								src= { fesw }
								width={ 150 }
								height={ 75 }/>
						</Col>
					</Row>	
				</Col>
			</Row>
		</footer>
		</>
  );
}

export default Footer;