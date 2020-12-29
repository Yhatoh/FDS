//React posting
import React, {Component} from 'react';

//Components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BiCaretRightCircle} from 'react-icons/bi';
import '../static/icon.css';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {RiInstagramLine} from 'react-icons/ri';
class Buscado extends Component {

  constructor(props){
    super(props)
    this.state = {
    	project: this.props.xd
    }
  }

  render(){
    return (
    <Row className = "specialrow">
	<Col></Col>
	<Col></Col>
    <Col xs={12} sm={12} md={6} lg={6} xl={6}>  
    	<Card className="mt-2 mb-3  project_card">
    		<Card.Body className="mb-5">
			    <Row> 
					<Col xs = "9">
						<Card.Title>{this.state.project.name} </Card.Title>
					</Col>

					<Col>
						<Row>
							<Col xs = "1"></Col>
							<Col>
								<a href={this.state.project.fb}><RiFacebookBoxFill  className= 'icon-pad'size = "1.1em"/></a>
								<a href={this.state.project.ig}><RiInstagramLine className= 'icon-pad'  size = "1.1em"/></a>
							</Col>
						</Row>
					</Col>
					
				</Row>
			  	<Card.Text className={"category" + (this.state.project.type === 1 ? "1": "2")}>
			  		{this.state.project.categoria}
			  	</Card.Text>
			  </Card.Body>
			  <iframe 
			  	width="100%" 
			  	height="auto" 
			  	src={"https://www.youtube.com/embed/" + this.state.project.code} 
			  	frameborder="0" 
			  	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			  	allowfullscreen>
			  </iframe>
			  <Card.Body className="try h-100">
			    <Card.Text className="project_card_text">
			      {this.state.project.descripcion}
			    </Card.Text>
			  </Card.Body>
				<Row><Col xs="10"></Col><Col><a href={this.state.project.web}><BiCaretRightCircle className='icon-left icon-marg-bottom' size = "2em"></BiCaretRightCircle></a></Col></Row>
			</Card>
        </Col>
		<Col></Col>
		
         </Row>
    );
  }
}

export default Buscado;