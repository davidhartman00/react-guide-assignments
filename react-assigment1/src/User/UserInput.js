import React, { Component } from 'react'

const userInput = (props) => {
    
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
                onChange={props.changeUsername}
                value={props.value} placeholder="enter a username"/>
            </div>
        )
    
}


export default userInput
