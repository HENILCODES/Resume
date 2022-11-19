import './FormSubcription.css'
import React, { useState } from 'react'

const FormSubcription = (props) => {

    const [form, setForm] = useState({ userTitle: 'Enter', userDate: '', userAmmount: '2000',name:'hi' })
    let titileChange = (event) => {
        setForm({...form , userTitle:event.target.value});
    }
    let dateChange = (event) => {
        setForm({ ...form, userDate: event.target.value });
    }
    let ammountChange = (event) => {
        setForm({ ...form, userAmmount: event.target.value });
    }
    let namechnage = (event) => {
        setForm({ ...form, name: event.target.value });
    }
    let onsubmithandler = (events)=>{
        events.preventDefault()

        const Subcript = {title:form.userTitle,ammount:form.userAmmount,date:new Date(form.userDate),name:form.name}
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