//React posting
import React, {Component} from 'react';

//Components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BiWorld} from 'react-icons/bi';
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
		<div className = "minicont">
    	<Card className="mt-2 mb-3 project_card">
			<Card.Header>
			    <Row> 
					<Col xs={6} sm={6} md={6} lg={8} xl={8}>
						<Card.Title style={{fontSize: "27px"}}>{this.state.project.name} </Card.Title>
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
    		
			  <iframe 
			  	title = {this.state.project.code}
			  	width="100%" 
			  	height="auto" 
			  	src={"https://www.youtube.com/embed/" + this.state.project.code} 
			  	frameBorder="0" 
			  	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			  	allowFullScreen>
			  </iframe>
			  <Card.Body className="try h-100 mb-2">
			    <Card.Text className="project_card_text">
			      {this.state.project.descripcion}
			    </Card.Text>
			  </Card.Body>
			{( this.state.project.categoria === ""? <div></div>:
			<Card.Footer className="mb-4 foot ">
			  	<Card.Text className={"category" + (this.state.project.type === 1 ? "1": "2")}>
			  		{this.state.project.categoria}
			  	</Card.Text>
			</Card.Footer>
			)}
				
			</Card>
			</div>
    );
  }
}

export default Project;