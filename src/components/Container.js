export default function Container(props) {
    const classNAme = "container " + props.className;
    return (
        <div className={classNAme} >
        {props.children}
        </div>
    )
}