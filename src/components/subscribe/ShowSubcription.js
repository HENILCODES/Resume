import React from "react";
import deleteElContext from "../deleteElContext";
import Button from "../templates/Button";
import Container from "../templates/Container";
import './ShowSubcription.css'
function ShowSubcription(props) {
    let ctx = React.useContext(deleteElContext);
    
    let deletes = ()=>{
        ctx.getDelete(props.arrayId);
    }

    return (
        <Container className="da">
            <Button onClick={deletes}>Delete</Button>
            <div className="data">
                <h3>Details</h3>
            </div>
            <div className="flex">
                <span>{props.name}</span>
                <span>{props.pincode}</span>
            </div>
        </Container>
    )
}

export default ShowSubcription