import './Button.css'
import React from 'react'

function Button(props) {
    console.log("Button Click");
    return (
        <button className="button" type={props.type || 'button'} onClick={props.onClick} >{props.children}</button>
    )
}

export default React.memo(Button);