import Container from "../template/Container";

export default function Filter(props){
    let onselectHandler = (event)=>{
        props.onChangeFil(event.target.value);
    }
    return(
        <Container>
            <label >Filter by Year {props.filterVal}</label>
            <select value={props.filterVal} onChange={onselectHandler}>
                <option value="2020">2020</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </Container>
    )
}