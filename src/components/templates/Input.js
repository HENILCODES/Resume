
let Input = (props) => {

    return (
        <>
            <label htmlFor={props.id}>{props.label} : </label>
            <input type={props.type} ref={props.passRef} id={props.id} className={props.className} onChange={props.onChange} />
        </>
    )
}
export default Input;