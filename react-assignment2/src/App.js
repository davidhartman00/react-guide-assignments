import React from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    length: 0,
    message: ""
  };

  messageHandler = event => {
    this.setState({
      length: event.target.value.length,
      message: event.target.value
    });
  };

  charDeleteHandler = (index) =>{
    let message = this.state.message

    message = message.split("") //turn into array

    message.splice(index, 1) //remove element from array

    message = message.join("") //join arry into string

    this.setState({
      message: message
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text"
        onChange={this.messageHandler}
        value={this.state.message}/>
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        <CharComponent
          message={this.state.message}
          charDelete={this.charDeleteHandler}
        />
      </div>
    );
  }
}
export default App;
