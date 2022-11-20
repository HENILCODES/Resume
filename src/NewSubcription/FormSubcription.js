import './FormSubcription.css'
import React, { useState } from 'react'

const FormSubcription = (props) => {

    const [valid, Setvalid] = useState(false);

    const [form, setForm] = useState({ userTitle: '', userDate: '', userAmmount: '', name: '' })

    let CheckValid = (data) => {
        if (data.target.value.trim().length > 0) {
            Setvalid(true);
            data.target.className = "Valid";
        } else {
            Setvalid(false);
            data.target.className = "notValid";
        }
    }
    let titileChange = (event) => {
        setForm({ ...form, userTitle: event.target.value });
        CheckValid(event);
    }
    let dateChange = (event) => {
        setForm({ ...form, userDate: event.target.value });
        CheckValid(event);
    }
    let ammountChange = (event) => {
        setForm({ ...form, userAmmount: event.target.value });
        CheckValid(event);
    }
    let namechnage = (event) => {
        setForm({ ...form, name: event.target.value });
        CheckValid(event);
    }
    let onsubmithandler = (events) => {
        events.preventDefault();
        if (form.userTitle.trim().length ===0) {
            return valid
        }
        const Subcript = { title: form.userTitle, ammount: form.userAmmount, date: new Date(form.userDate), name: form.name }
        props.onSave(Subcript);
    }

    return (
        <form onSubmit={onsubmithandler}>
            <div className="controle">
                <label> name </label>
                <input type="text" value={form.name} onChange={namechnage} />
            </div>
            <div className="controle">
                <label> Title </label>
                <input type="text" value={form.userTitle} onChange={titileChange} />
            </div>
            <div className="controle">
                <label> Date </label>
                <input type="date" onChange={dateChange} value={form.userDate} />
            </div>
            <div className="controle">
                <label> ammount </label>
                <input type="text" min="10" onChange={ammountChange} value={form.userAmmount} />
            </div>
            <div className="controle">
                <button type='submit' className="addB">Add Subcription</button>
            </div>
        </form>
    )
}
export default FormSubcription