import Container from "../template/Container";
import "../template/Container.css";
import React, { useContext, useReducer } from 'react'
import bookContext from "./BookContext";

export default function BookDetailAdd() {

    let [book, setBook] = useReducer((latest, action) => {
        if (action.type === "Book") {
            return { ...latest, title: action.value };
        } else if (action.type === "Desc") {
            return { ...latest, desc: action.value };
        } else if (action.type === "clear") {
            return { title: '', desc: '' };
        }
    }, { title: '', desc: '' });

    let titleChange = (event) => {
        setBook({ type: "Book", value: event.target.value })
    }
    let descChange = (event) => {
        setBook({ type: "Desc", value: event.target.value })
    }


    let ctx = useContext(bookContext);
    let submitHandler = (event) => {
        event.preventDefault();
        setBook({ type: "clear" })
        ctx.data(book);
    }
    return (
        <Container className="controle">
            <form onSubmit={submitHandler} >
                <div>
                    <label> Title </label>
                    <input type="text" value={book.title} onChange={titleChange} />
                </div>
                <div>
                    <label> Descriotion </label>
                    <input type="text" value={book.desc} onChange={descChange} />
                </div>
                <div>
                    <button type="submit" className="addB">Send</button>
                </div>
            </form>
        </Container>
    )
}