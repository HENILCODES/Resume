import { useContext } from 'react';
import SubcripContext from '../Store/SubcriptionContext';
import Container from '../template/Container';
import Subcription from './Subcription';

export default function SubcriptionList(props) {

    const ctx = useContext(SubcripContext);

    if (props.filterdata.length === 0) {
        return <h1>No data {ctx.names}</h1>
    } else {
        return (
            // <SubcripContext.Consumer>
            //     {(ctx) => {
            <Container className="App">
                {ctx.subContextData.map((value) => <Subcription key={value.id} name={value.name} date={value.date} title={value.title} ammount={value.ammount} />)}
            </Container>
            //     }}
            // </SubcripContext.Consumer>
        )
    }
}