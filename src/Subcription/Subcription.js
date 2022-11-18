import Student from '../Student/Student'
import Container from '../template/Container'
import './Subcription.css'
import Subdate from './Subdate'
import React, { useState } from 'react'

export default function Subcription(props) {
let [title,setTitle] = useState(props.title)
let onClickHandler = ()=>{
    setTitle ("chamnge")
}
    return (

        <Container className="box">
            <div className="date-box">
                <Subdate date={props.date} />
            </div>
            <Student name={props.name}/>
            <div className="title-box">
                <span className="title"> {title}</span>
            </div>
            <div className="price-box">
                <span className="price"> {props.ammount} </span>
            </div>
            <button id="changeTitle" onClick={onClickHandler} >Click</button>
        </Container>
    )
}