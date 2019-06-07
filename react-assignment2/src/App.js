import React from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends React.Component {
  
    state = {
       length: 0
    }
  
  

  textLengthHandler = (event) =>{
    this.setState({
      length: event.target.value.length
    })
  }

  render(){
    return (
      <div className="App">
        <input onChange={this.textLengthHandler} />
        <p>{this.state.length}</p>
        <ValidationComponent  length={this.state.length} />
      </div>
    );
  }
}
export default App;
