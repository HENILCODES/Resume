
import Container from "../template/Container";
import FormSubcription from "./FormSubcription"

const NewSubcription = (props) => {
    let onseaveHandler = (data) => {
        const subcripts = { ...data, id: Math.random()}
        props.onAdd(subcripts)
    }
    return (
        <Container>
        <FormSubcription onSave={onseaveHandler} />
        </Container>
    )
}
export default NewSubcription