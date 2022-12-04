import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscribe.css'
import React, { useRef, useState } from 'react'
import ErrorModal from '../templates/ErrorModal';
import Input from '../templates/Input';

function AddSubscribe(props) {
    let [subcription, setSubcription] = useState({ name: '', pincode: '' });
    let [error, setError] = useState(false);
    const nameRef = useRef('HenilP');
    const pincodeRef = useRef('362520');

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
            setSubcription({ name: '', pincode: '' });
            nameRef.current.value='';
            pincodeRef.current.value='';
        }
    }

    let nameHandler = (event) => {
        setSubcription({ ...subcription, name: nameRef.current.value })
    }
    let pincodeHandler = (event) => {
        setSubcription({ ...subcription, pincode: pincodeRef.current.value })
    }
    let closeHandler = () => {
        setError(false);
    }
    return (
        <Container className="AddSubscribe">
            {error && <ErrorModal title={error.title} content={error.content} onClose={closeHandler} />}
            <form onSubmit={onSubmiteHanddler} autoComplete="off">
                <div className="box">
                    <Input type="text" passRef={nameRef} label="Name" id="name" onChange={nameHandler} className="input" />
                </div>
                <div className="box">
                    <Input type="number" passRef={pincodeRef} label="Pinecode" id="pinecode" onChange={pincodeHandler} className="input" />
                </div>
                <div className="box">
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Container>
    )
}
export default AddSubscribe