import Container from '../template/Container'
import Studentdetail from './Studentdetail'

export default function Student(props){

    return(
    <Container>
        <Studentdetail name={props.name} />
    </Container>      
    )
}