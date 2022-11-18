import Container from "../template/Container";

export default function Filter(props){
    let onselectHandler = (event)=>{
        props.onChangeFil(event.target.value);
    }
    return(
        <Container>
            <label >Filter by Year {props.filterVal}</label>
            <select value={props.filterVal} onChange={onselectHandler}>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
            </select>
        </Container>
    )
}