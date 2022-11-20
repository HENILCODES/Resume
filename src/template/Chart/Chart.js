import Container from '../Container'
import ChartBar from './ChartBar'

export default function Chart(props) {
    const datavalue = props.dataSets.map((dataSets) => { 
        console.log(dataSets);
        return 0;
     })
    const max = Math.max(...datavalue)
    return (
        <Container>
            {props.dataSets.map((data) => {
               return <ChartBar value={data.value} label={data.label} key={data.label} maxvalue={max} />
            })}
        </Container>
    )
}