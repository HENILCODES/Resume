export default function ChartBar(props) {

    let barHight = 0;
    if (props.maxvalue > 0) {
        barHight = Math.round((props.value / props.maxvalue) * 100) + '%';
    }
    return (
        <div className="bar">
            <div className="inner">
                <div className="fill addB" style={{ 'height':barHight }}>

                </div>
            </div>
            <div className="label">
                {props.label}
            </div>
        </div>
    )
}