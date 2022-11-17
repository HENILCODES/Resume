import './Subdate.css'

export default function Subdate(props) {
    const day = props.date.toLocaleString("default", { day: "2-digit" });
    const month = props.date.toLocaleString("default", { month: "long" });
    const year = props.date.getFullYear();

    return (

        <div className="date">
            <h5><span> {day}<span> - <span>{month}</span> - {year}</span> </span></h5>
        </div>

    )
}