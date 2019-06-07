import React from 'react'

const ValidationComponent = props => {
    let str = "Text too short";
    if (props.length > 6 ) str = "Text long enough";
    
    return (
        <div>
            <p>
            {str}
            </p>
        </div>
    )
}

export default ValidationComponent

