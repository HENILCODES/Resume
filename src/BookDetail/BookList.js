import { useState } from 'react'
import Container from '../template/Container'
import BookDetailAdd from './BookDetailAdd'
export default function BookList() {


    const [dataBook, setBook] = useState(false);
    let BookDataSee = (data) => {
        setBook(data)
    }
    
    return (
        <Container>
            <h1>Book List</h1>
            <BookDetailAdd onSaveData={BookDataSee} />

            {
                !dataBook ? dataBook : dataBook.forEach(element => {
                    // document.write(element.title);
                    return <h1>{element.title}</h1>
                })
            }
        </Container>
    )
}