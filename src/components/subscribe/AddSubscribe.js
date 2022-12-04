import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscribe.css'
import React, { useReducer, useState } from 'react'
import ErrorModal from '../templates/ErrorModal';

function setReducer(latest, action) {

    if (action.type === 'Name') {
        return { ...latest, name: action.value };
    }
    else if (action.type === 'Pincode') {
        return { ...latest, pincode: action.value };
    } else {
        return { name: '', pincode: '' };
    }
}

function AddSubscribe(props) {
    let [subcription, setsubcripReducer] = useReducer(setReducer, { name: '', pincode: '' })
    let [error, setError] = useState(false);

    let onSubmiteHanddler = (event) => {
        event.preventDefault();
        if (subcription.name.trim().length === 0) {
            setError({ title: 'name not define', content: 'Enter Name' })

        } else if (subcription.pincode.trim().length === 0) {
            setError({ title: 'pincode not define', content: 'Enter pincode' })
        } else if (subcription.pincode.length < 6 || subcription.pincode.length < 0) {
            setError({ title: 'pincode not Valid', content: 'Enter 6 digit' })
        }
        else {
            props.onSave(subcription);
            setsubcripReducer({ type: "clear" });
        }
    }
    let nameHandler = (event) => {
        setsubcripReducer({ type: "Name", value: event.target.value });
        console.log(subcription);
    }
    let pincodeHandler = (event) => {
        setsubcripReducer({ type: "Pincode", value: event.target.value });
    }
    let closeHandler = () => {
        setError(false);
    }
    return (
        <Container className="AddSubscribe">
            {error && <ErrorModal title={error.title} content={error.content} onClose={closeHandler} />}
            <form onSubmit={onSubmiteHanddler} autoComplete="off">
                <div className="box">
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={subcription.name} id="name" className="input" onChange={nameHandler} />
                </div>
                <div className="box">
                    <label htmlFor="pincode">Pine Code :</label>
                    <input type="number" value={subcription.pincode} id="pincode" className="input" onChange={pincodeHandler} />
                </div>
                <div className="box">
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Container>
    )
}
export default AddSubscribe