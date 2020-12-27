//React posting
import React, {Component} from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

//Components
import Row from 'react-bootstrap/Row';
import HorizontalTimeline from 'react-horizontal-timeline';
import ControllTabs from '../Tabs/ControllTabs';
import Winner from '../Tabs/Winner';
import '../static/quetoyhaciendo.css';

const VALUES = ["2017-01-01", "2018-01-01", "2019-01-01"];

class Timeline extends Component {
  constructor(props){
  	super(props)
  	const val = (this.props.year === '2019' ? 2 : (this.props.year === '2018' ? 1 : 0))
  	this.state = { value: val, 
  						previous: val,
  						data2019: this.props.data2019,
  						data2018: this.props.data2018,
  						data2017: this.props.data2017
  					}
  	this.click = this.click.bind(this)
  }

  click(e){
  	const year = (e === 2 ? "2019" : (e === 1 ? "2018" : "2017"))
  	window.location.href = "/"+ year
  	console.log(e)
  }

  render() {
    return (
    	<>
	    
	        {/* Bounding box for the Timeline */}
	        <div style={{ width: '75%', height: '100px', margin: '0 auto' , color: '#FDFFFC'}}>
	          <HorizontalTimeline
	            index={this.state.value}
	            styles={{ background: '#343a40', foreground: '#7b9d6f', outline: '#FDFFFC' }}
	            indexClick={this.click}
	            getLabel={function(date) { return date.slice(0, 4)}}
	            values={ VALUES } />
	        </div>
	      

		  {this.state.value === 2 ?
		    	
				<Row className = "footerr">
					<Col xs={12} sm={12} md={12} lg={6} xl={6}>
					<Winner className="mlm" xd = {this.state.data2019.IA[1]}></Winner>
					</Col>
					<Col xs={12} sm={12} md={12} lg={6} xl={6}>
					<Winner xd = {this.state.data2019.TD[6]}></Winner> 
					</Col>
				</Row>
				:
	      	(this.state.value === 1 ? 

				<Row className = "footerr">
					<Col xs={12} sm={12} md={12} lg={6} xl={6}>
					<Winner className="mlm" xd = {this.state.data2018.IA[4]}></Winner>
					</Col>
					<Col xs={12} sm={12} md={12} lg={6} xl={6}>
					<Winner xd = {this.state.data2018.TD[6]}></Winner> 
					</Col>
				</Row>
			 :
		    
				  <Row className = "footerr">
					  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
					  <Winner className="mlm"  xd = {this.state.data2017.IA[2]}></Winner>
					  </Col>
					  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
					  <Winner xd = {this.state.data2017.IA[5]}></Winner> 
					  </Col>
				  </Row>
			    )
		      	
	      }
		  {this.state.value === 2 ?  	
	      	<ControllTabs 
	      	catName1="Inteligencia Artificial y Ciencia de Datos"
	      	catName2="Transformación Digital y Social"
	      	cat1={this.state.data2019.IA} 
	      	cat2={this.state.data2019.TD}/> :
	      	(this.state.value === 1 ? 
	      		<ControllTabs 
		      	catName1="Educación y Salud"
		      	catName2="Transformación Digital y Social"
		      	cat1={this.state.data2018.IA} 
		      	cat2={this.state.data2018.TD}/> :
		      	<ControllTabs 
		      	catName1=""
		      	catName2=""
		      	cat1={this.state.data2017.IA} 
		      	cat2={this.state.data2017.TD}/> )
		      	
	      }
	    </>
    );
  }
}


export default Timeline;
