import Container from "../template/Container";
import React, { useState } from 'react'

export default function BookDetailAdd(props) {
    let Book = [
        {
            title: 'JAva',
            desc: "Hello"
        },
        {
            title: 'C',
            desc: "Good"
        }
    ]
    let [book, setBook] = useState({ title: 'aman', desc: 'a' });
    let titleChange = (event) => {
        setBook({ ...book, title: event.target.value })
    }
    let descChange = (event) => {
        setBook({ ...book, desc: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault();
        const datass = {title:book.title,desc:book.desc};
        props.onSaveData([datass,...Book]);
    }
    return (
        <Container className="controle">
            <form onSubmit={submitHandler} >
                <div>
                    <label> Title </label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div>
                    <label> Descriotion </label>
                    <input type="text" onChange={descChange} />
                </div>
                <div>
                    <button type="submit" className="addB">Send</button>
                </div>
            </form>
        </Container>
    )
}