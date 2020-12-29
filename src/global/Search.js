//React posting
import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../static/theme.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
let proyectos;
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : proyectos.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };



// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
        value: '',
        suggestions: []
    };
    proyectos = this.props.actual.IA.concat(this.props.actual.TD);

  }
  getSuggestionValue = suggestion => {
    this.setState({
        value : suggestion.name
    });
    console.log(this.state.value)
    return suggestion.name
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

  onDone = () =>{
      let nombre = this.state.value
      let aux = nombre.split(" ")
      nombre = aux.join("_")
      window.location.href = "/"+ nombre

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
        <Row>
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
          <Button variant="outline-info" onClick = {this.onDone}>Buscar</Button>
        </Row>
        </div>
        );
    	
  }
}

export default Search;