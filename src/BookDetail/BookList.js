import { useState } from 'react'
import Container from '../template/Container'
import BookDetailAdd from './BookDetailAdd'
import BookContext from './BookContext'
import BookListDisplay from './BookListDisplay'
export default function BookList() {

 
    let Book = [
        {
            title: 'Java',
            desc: "Hello"
        },
        {
            title: 'C',
            desc: "Good"
        }
    ]
    const [dataBook, setBook] = useState(Book);
    let BookDataSee = (data) => {
        setBook([...dataBook, data]);
    }

    return (
        <Container>
            <BookContext.Provider value={{data:BookDataSee,DatabookContex:dataBook,name:'henil'}}>
                <h1>Book List</h1>
                <BookDetailAdd/>
                <BookListDisplay />
            </BookContext.Provider>
        </Container>
    )
}