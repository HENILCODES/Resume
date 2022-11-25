import Button from './Button'
import Container from './Container'
import './ErrorModal.css'
function ErrorModal(props){

    return(
        <div className="bak" onClick={props.onClose}>

        <Container className='Error'>
            <div className="header">
                <h3>{props.title}</h3>
            </div>
            <div className="error">
                <p>{props.content}</p>
            </div>
            <div className="footer">
                <Button onClick={props.onClose} >OK</Button>
            </div>
        </Container>
        </div>
    )
}

export default ErrorModal