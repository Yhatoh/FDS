//React posting
import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../static/theme.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
let proyectos;
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : proyectos.filter(lang =>
      lang.toLowerCase().slice(0, inputLength) === inputValue
    );
};



// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);
class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
        value: '',
        suggestions: []
    };
    //proyectos = this.props.actual.IA.concat(this.props.actual.TD);
    const year = this.props.year
    proyectos = []
   
    if(year === ""){
        this.props.actual[0].proyectos.map((proyecto)=>(proyectos.push(proyecto.name )))
    }
    else if(year === "2019"){ 
      this.props.actual[1].proyectos.map((proyecto)=>(proyectos.push(proyecto.name )))
    }
    else if(year === "2018"){ 
      this.props.actual[2].proyectos.map((proyecto)=>(proyectos.push(proyecto.name )))
    }
    else if(year === "2017"){ 
      this.props.actual[3].proyectos.map((proyecto)=>(proyectos.push(proyecto.name )))
    }
  }
  getSuggestionValue = suggestion => {
    this.setState({
        value : suggestion
    });
    return suggestion
    }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onDone = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
      let nombre = suggestionValue.split(" - ")[0]
      
      if(proyectos.includes(nombre)){
        let aux = nombre.split(" ")
        nombre = aux.join("_")
        window.location.href = "/"+ nombre
      }

  }
  onDone2 = (m) =>{
    let nombre = this.state.value.split(" - ")[0]
    
    if(proyectos.includes(nombre)){
      let aux = nombre.split(" ")
      nombre = aux.join("_")
      window.location.href = "/"+ nombre
    }
    

}
  render(){
   
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Busca un proyecto',
          value,
          onChange: this.onChange
        };
    
        // Finally, render it!
        return (
        <div>
        <Container fluid>
        <Row className = "justify-content-end" >
          <Col xs={3} sm={3} md={3} lg={3} xl={3} >
          <Row className = "justify-content-center">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
            onSuggestionSelected={this.onDone}
          /> 
          <Button variant="outline-info" onClick = {this.onDone2}>Buscar</Button>
          </Row>
          </Col>
        </Row>
        </Container>
        </div>
        );
    	
  }
}

export default Search;