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
import Container from 'react-bootstrap/Container';

import Sparkles from 'react-sparkle';
class Winner extends Component {

  constructor(props){
    super(props)
    console.log(this.props.xd)
    this.state = {
    	project: this.props.xd,
    }

    console.log(this.state.project.name)
  }

  render(){
    return (
        <Container className="wrapper">
        <Card className="winner_card">
        <Card.Body>
            <Card.Title className="winner_text winner_title">{"Ganador: "+this.state.project.categoria}</Card.Title>
        <Card className="project_card">
    	
            <Sparkles  
                color="gold"
                count={30}
                minSize={7}
                maxSize={12}
                fadeOutSpeed={30}
                flicker={false} 
            />
            <Card.Body className="mb-5">
			    <Row> 
					<Col xs = "9">
						<Card.Title>{this.state.project.name} </Card.Title>
					</Col>

					<Col>
						<Row>
							<Col xs = "1"></Col>
							<Col>
								<a href="https://www.google.com"><RiFacebookBoxFill  className= 'icon-pad'size = "1.1em"/></a>
								<a href="https://www.google.com"><RiInstagramLine className= 'icon-pad'  size = "1.1em"/></a>
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
				<Row><Col xs="10"></Col><Col><BiCaretRightCircle className='icon-left icon-marg-bottom' size = "2em"></BiCaretRightCircle></Col></Row>
			</Card>
        <img className="infoi" border="0" alt="W3Schools" src="https://png.pngtree.com/svg/20170904/the_golden_crown_309708.png" width="80" height="90"/>
        </Card.Body>
        </Card>
        </Container>
    );
  }
}

export default Winner;