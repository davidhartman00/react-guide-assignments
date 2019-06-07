import React, { Component } from 'react';
import './App.css';
import UserInput from "./User/UserInput"
import UserOutput from "./User/UserOutput"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: "SomeUsername"
    }
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {

    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput  changeUsername={this.changeUsernameHandler} value={this.state.username}/>
        <UserOutput username="LastUserName"/>
      </div>
    );
  }
}

 


export default App;
