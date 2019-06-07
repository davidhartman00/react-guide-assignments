import React from 'react'
import "./Char.css"

function Char (props) {
    let style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center", 
        margin: '16px', 
        border: '1px solid black'
    }

    return (
      <div
        className="char-component"
        style={style}
        onClick={props.click}
      >
        {props.char}
      </div>
    );
}

export default Char
