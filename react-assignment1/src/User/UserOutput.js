import React, { Component } from 'react'
import "./UserOutput.css";


 class UserOutput extends Component {
     
    render() {
        return (
          <div className="UserOutput">
            <p>
             Username: {this.props.username}
            </p>
            <p>
              First, make sure you are in the project root directory and
              then use Yarn or NPM to add three prettier related
              packages.
            </p>
          </div>
        );
    }
}

export default UserOutput