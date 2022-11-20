
import Container from "../template/Container";
import FormSubcription from "./FormSubcription"
import React,{useState} from 'react'

const NewSubcription = (props) => {
    let onseaveHandler = (data) => {
        const subcripts = { ...data, id: Math.random() }
        props.onAdd(subcripts)
        setShow(false);
    }
    const [show, setShow] = useState(false);
    let showHide = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <Container>
            <button className="addB" onClick={showHide}>{show ? <p>Close</p> : <p>Show</p>}</button>
            {show && <FormSubcription onSave={onseaveHandler} />}
        </Container>
    )
}
export default NewSubcription