import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscribe.css'
import React, { useState } from 'react'

function AddSubscribe(props) {
    let [subcription, setSubcription] = useState({ name: 'henil', pincode: '396195' });
    
    let onSubmiteHanddler = (event) => {
        event.preventDefault();
        props.onSave(subcription);
    }

    let nameHandler = (event) => {
        setSubcription({ ...subcription, name: event.target.value })
    }
    let pincodeHandler = (event) => {
        setSubcription({ ...subcription, pincode: event.target.value })
    }
    return (
        <Container className="AddSubscribe">
            <form onSubmit={onSubmiteHanddler} autoComplete="off">
                <div className="box">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" className="input" onChange={nameHandler} />
                </div>
                <div className="box">
                    <label htmlFor="pincode">Pine Code :</label>
                    <input type="number" id="pincode" className="input" onChange={pincodeHandler} />
                </div>
                <div className="box">
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Container>
    )
}
export default AddSubscribe