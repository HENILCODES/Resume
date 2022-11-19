import Container from '../template/Container';
import Subcription from './Subcription';

export default function SubcriptionList(props) {
    
    if (props.filterdata.length === 0) {
        return <h1>No data</h1>
    } else {
        return (
            <Container className="App">
                {props.filterdata.map((value) => <Subcription key={value.id} name={value.name} date={value.date} title={value.title} ammount={value.ammount} />)}
            </Container>
        )
    }
}