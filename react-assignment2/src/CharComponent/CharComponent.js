import React from 'react'
import "./CharComponent.css"

function CharComponent(props) {
    let style = {
        display: "inlineBlock",
        padding: "16px",
        textAlign: "center", 
        margin: '16px', 
        border: '1px solid black',
        width: '40%',
        margin: '10px auto'
    }
    const charList = props.message.split("")
        .map((el,idx)=>{
            return (<li 
                key={el+idx}
                onClick={()=>props.charDelete(idx)}
                >{el}</li>)
        })

    return (
      <div className="char-component" style={style}>
        <ul>{charList}</ul>
      </div>
    );
}

export default CharComponent
