import React from 'react'

const ValidationComponent = props => {
    let str = "Text too short";
    if (props.length > 8 ) str = "Text long enough";
    
    return (
        <div>
            {str}
        </div>
    )
}

export default ValidationComponent

