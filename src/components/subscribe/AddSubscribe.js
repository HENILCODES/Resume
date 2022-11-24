import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscribe.css'

function AddSubscribe() {

    let onSubmiteHanddler = (event) => {
        event.preventDefault();
    }
    let onClickHandler = () => {
        console.log("Click");
    }
    return (
        <Container className="AddSubscribe">
            <form onSubmit={onSubmiteHanddler} autoComplete="off">
                <div className="box">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" className="input" />
                </div>
                <div className="box">
                    <label htmlFor="pincode">Pine Code :</label>
                    <input type="number" id="pincode" className="input" />
                </div>
                <div className="box">
                    <Button type="submit" onClick={onClickHandler}>Send</Button>
                </div>
            </form>
        </Container>
    )
}
export default AddSubscribe