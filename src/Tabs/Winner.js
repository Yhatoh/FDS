//React posting
import React, {Component} from 'react';

//Components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../static/icon.css';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {RiInstagramLine} from 'react-icons/ri';
import Container from 'react-bootstrap/Container';
import {BiWorld} from 'react-icons/bi';

import Sparkles from 'react-sparkle';
class Winner extends Component {

  constructor(props){
    super(props)
    this.state = {
    	project: this.props.xd,
    }
  }

  render(){
    return (
        <Container className="wrapper">
        <Card className="winner_card">
        <Card.Body>
            <Card.Title className="winner_text winner_title">{"Ganador: "+(this.state.project.categoria === ""? (this.state.project.name === "HolSense"? "Mejor rendimiento academico San joaquin" : "Mejor rendimiento academico Casa Central") : this.state.project.categoria)}</Card.Title>
        <Card className="project_win_card">
    	
            <Sparkles  
                color="gold"
                count={30}
                minSize={7}
                maxSize={12}
                fadeOutSpeed={30}
                flicker={false} 
            />
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
    		
			  <iframe 
			  	title= "pa"
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
			{(this.state.project.categoria === ""? <div></div>:
			<Card.Footer className="mb-4 foot">
				
			  	<Card.Text className={"category" + (this.state.project.type === 1 ? "1": "2")}>
			  		{this.state.project.categoria}
			  	</Card.Text>
			</Card.Footer>
			)}	
			</Card>
        <img className="infoi" border="0" alt="W3Schools" src="https://png.pngtree.com/svg/20170904/the_golden_crown_309708.png" width="80" height="90"/>
        </Card.Body>
        </Card>
        </Container>
    );
  }
}

export default Winner;