import Container from '../Container'
import ChartBar from './ChartBar'

export default function Chart(props) {

    return (
        <Container>
            {props.dataSets.map((data)=>{
                <ChartBar value={data.value} label={data.label} key={data.label} maxvalue={null}/>
            })}
        </Container>
    )
}