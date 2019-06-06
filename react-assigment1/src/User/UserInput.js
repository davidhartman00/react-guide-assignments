import React, { Component } from 'react'

class UserInput extends Component {
    render() {
        const style = {
            backgroundColor: "#eee",
            border: "1px solid red",
            borderRadius: '1px',
            margin: "20px auto",
            padding: '5px'
        };
        return (
            <div>
                <input 
                style={style}
                onChange={this.props.changeUsername}
                value={this.props.username} placeholder="enter a username"/>
            </div>
        )
    }
}


export default UserInput
