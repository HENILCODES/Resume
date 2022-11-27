import Button from './Button'
import Container from './Container'
import './ErrorModal.css'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

const BackDrop = (props) => {
    return <div className="bak" onClick={props.onClose}></div>
}
const Overlay = (props) => {
    return (
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
    )
}
function ErrorModal(props) {

    return (
        // <div className="bak" onClick={props.onClose}>
        //     <Container className='Error'>
        //         <div className="header">
        //             <h3>{props.title}</h3>
        //         </div>
        //         <div className="error">
        //             <p>{props.content}</p>
        //         </div>
        //         <div className="footer">
        //             <Button onClick={props.onClose} >OK</Button>
        //         </div>
        //     </Container>
        // </div>
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClose={props.onClose}></BackDrop>, document.getElementById("back-root")
            )}
            {ReactDOM.createPortal(
                <Overlay title={props.title} content={props.content} onClose={props.onClose}></Overlay>, document.getElementById("overlay-root")
            )}
        </Fragment>
    )
}

export default ErrorModal