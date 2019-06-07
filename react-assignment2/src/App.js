import React from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    message: ""
  };

  messageHandler = event => {
    this.setState({
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
        <p>{this.state.message.length}</p>
        <Validation length={this.state.message.length} />
        <CharComponent
          message={this.state.message}
          charDelete={this.charDeleteHandler}
        />
      </div>
    );
  }
}
export default App;
