import Container from '../template/Container'
import BookDetailAdd from './BookDetailAdd'
export default function BookList(){

    let BookDataSee = (data)=>{
        console.log("List ", data);
    }
    return(
        <Container>
            <h1>Book List</h1>
            <BookDetailAdd onSaveData={BookDataSee}/>
        </Container>
    )
}