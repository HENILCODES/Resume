import Container from "../templates/Container";
import './ShowSubcription.css'
function ShowSubcription(props) {

    return (
        <Container className="da">
            <div className="data">
                <h3>Details</h3>
            </div>
            <div className="flex">
                <div >
                    <span>{props.name}</span>
                </div>
                <div >
                    <span>{props.pincode}</span>
                </div>
            </div>
        </Container>
    )
}

export default ShowSubcription