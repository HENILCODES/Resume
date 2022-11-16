import './Subcription.css'
import Subdate from './Subdate'

export default function Subcription(props) {
 
    return (
        <div className="box">
            <h1> {props.id} </h1>
            <div className="date-box">
                <Subdate date={props.date} />
            </div>
            <div className="title-box">
                <span className="title"> {props.title}</span>
            </div>
            <div className="price-box">
                <span className="price"> {props.ammount} </span>
            </div>
        </div>
    )
}