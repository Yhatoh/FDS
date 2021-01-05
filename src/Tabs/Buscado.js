//React posting
import React, {Component} from 'react';

//Components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../static/icon.css';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {RiInstagramLine} from 'react-icons/ri';
import {BiWorld} from 'react-icons/bi';
class Buscado extends Component {

  constructor(props){
    super(props)
    this.state = {
    	project: this.props.xd
    }
  }

  render(){
    return (
    <Row>
		<Col xs={12} sm={12} md={4} lg={4} xl={4}></Col>
		<Col xs={12} sm={12} md={4} lg={4} xl={4}>  
		<Card className="mt-2 mb-3 project_card">
			<Card.Header>
			    <Row> 
					<Col xs={6} sm={6} md={6} lg={8} xl={8}>
						<Card.Title>{this.state.project.name} </Card.Title>
					</Col>
					<Col xs={6} sm={6} md={6} lg={4} xl={4}>
						<Row className = "justify-content-end">
								<a href={this.state.project.web}><BiWorld className='icon-pad' size = "2em"></BiWorld></a>
								<a href={this.state.project.fb}><RiFacebookBoxFill  className= 'icon-pad'size = "2em"/></a>
								<a href={this.state.project.ig}><RiInstagramLine className= 'icon-pad'  size = "2em"/></a>
						</Row>
					</Col>
				</Row>
			</Card.Header>
    		
			  <iframe key = {this.state.project.code}
			  	title = "oa" 
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
			{( this.state.project.categoria === ""? <div></div>:
			<Card.Footer className="mb-5 foot">
				
			  	<Card.Text className={"category" + (this.state.project.type === 1 ? "1": "2")}>
			  		{this.state.project.categoria}
			  	</Card.Text>
			</Card.Footer>
			)}	
			</Card>
			</Col>
			<Col xs={12} sm={12} md={4} lg={4} xl={4}></Col>
         </Row>
    );
  }
}

export default Buscado;