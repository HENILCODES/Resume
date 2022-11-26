import Button from "../templates/Button";
import Container from "../templates/Container";
import './ShowSubcription.css'
function ShowSubcription(props) {
    
    let deleteHandler = () => {
        props.featchDelete(props.arrayId);
    }
    return (
        <Container className="da">
            <Button onClick={deleteHandler}>Delete</Button>
            <div className="data">
                <h3>Details</h3>
            </div>
            <div className="flex">
                <span>{props.arrayId}</span>
                <span>{props.name}</span>
                <span>{props.pincode}</span>
            </div>
        </Container>
    )
}

export default ShowSubcription