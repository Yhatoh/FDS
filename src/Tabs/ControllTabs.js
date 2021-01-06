//React posting
import React, {Component} from 'react';

//Components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Project from './Project';
import Search from '../global/Search.js';

class ControllTabs extends Component {

  constructor(props){
    super(props)
    var gener = this.props.cat1.concat(this.props.cat2)
    gener.sort((a, b) => a.name.localeCompare(b.name))
    this.state = {
      year: this.props.year,
      actual: this.props.actual,
      key: 'gen',
      gen: gener,
      catName1: this.props.catName1,
      catName2: this.props.catName2,
      cat1: this.props.cat1,
      cat2: this.props.cat2
    }

    this.changeState = this.changeState.bind(this)
  }

  changeState(e){
    this.setState({key: e})
  }

  render(){
    return (
      <Tabs className="custom-tabs nav-fill mb-4" activeKey={this.state.key} id="controlled-tab" onSelect={this.changeState}>
        <Tab eventKey="gen" title="Todos los Proyectos">
       
        <Search actual={this.state.actual} year= {this.state.year} />
        
        <br></br>
          <Container className="bg-dark" fluid>
            <Row>
              { this.state.gen.map((project) =>
                <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                  <div key={project.code}>
                    <Project xd={project} key = {project.code}/>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </Tab>
        { this.state.catName1 !== "" ?
          <Tab eventKey="ia_dc" title={this.state.catName1}>
            <Search actual={this.state.actual} year= {this.state.year}/>
            <Container className="bg-dark" fluid>
              <Row>
                { this.state.cat1.map((project) =>
                  <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                    <div key={project.code}>
                      <Project xd={project} key = {project.code}/>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </Tab> : <></>}
        { this.state.catName1 !== "" ?
          <Tab eventKey="tds" title={this.state.catName2}>
            <Search actual={this.state.actual} year= {this.state.year} />
            <Container className="bg-dark" fluid>
              <Row>
                { this.state.cat2.map((project) =>
                  <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                    <div key={project.code}>
                      <Project xd={project} key = {project.code}/>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </Tab> : <></>}
      </Tabs>
    );
  }
}

export default ControllTabs;