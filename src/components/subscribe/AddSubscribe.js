import Container from '../templates/Container';
import './AddSubscribe.css'

function AddSubscribe() {

    let onSubmiteHanddler = (event) => {
        event.preventDefault();
    }
    return (
        <Container className="AddSubscribe">
            <form onSubmit={onSubmiteHanddler} autocomplete="off">
                    <table>
                        <tr className="box">
                            <td>
                                <label htmlFor="name">Name : </label>
                            </td>
                            <td>
                                <input type="text" id="name" className="input" />
                            </td>
                        </tr>
                        <tr className="box">
                            <td>
                                <label htmlFor="pincode">Pine Code :</label>
                            </td>
                            <td>
                                <input type="number" id="pincode" className="input" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" className="button">Done</button>
                            </td>
                        </tr>
                    </table>
                </Container>
            </form>
        </Container>
    )
}
export default AddSubscribe