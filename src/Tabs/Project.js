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
class Project extends Component {

  constructor(props){
    super(props)
    this.state = {
    	project: this.props.xd
    }
  }

  render(){
    return (
    	<Card className="mt-2 mb-3 project_card">
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
			  	frameBorder="0" 
			  	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			  	allowFullScreen>
			  </iframe>
			  <Card.Body className="try h-100">
			    <Card.Text className="project_card_text">
			      {this.state.project.descripcion}
			    </Card.Text>
			  </Card.Body>
				<Row><Col xs="10"></Col><Col><a href={this.state.project.web}><BiCaretRightCircle className='icon-left icon-marg-bottom' size = "2em"></BiCaretRightCircle></a></Col></Row>
			</Card>
    );
  }
}

export default Project;