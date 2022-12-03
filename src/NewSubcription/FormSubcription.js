import './FormSubcription.css'
import React, { useEffect, useReducer } from 'react'

const reducrFun = (latest, action) => {
    console.log("Call Fun Reducer", latest, action);
    if (action.type === 'TITLE') {
        return { ...latest, userTitle: action.val }
    } else if (action.type === 'DATE') {
        return { ...latest, userDate: action.val }

    } else if (action.type === 'AMMOUNT') {
        return { ...latest, userAmmount: action.val }

    } else if (action.type === 'NAME') {
        return { ...latest, name: action.val }
    } else {
        console.log("D");
    }
    return { userTitle: '0', userDate: '0', userAmmount: '0', name: '0' };
}
const FormSubcription = (props) => {
    
    const [formReducer, setFormReducer] = useReducer(reducrFun, { userTitle: '', userDate: '', userAmmount: '', name: '' });

    // const {userTitle:titleRedusar} = formReducer;
    // console.log(titleRedusar);

    useEffect(() => {
        let timerId = setTimeout(() => {
            console.log("title effect");
        }, 2000);
        return () => { console.log("S"); clearTimeout(timerId); }
    }, [formReducer.userTitle])


    let titileChange = (event) => {

        setFormReducer({ type: 'TITLE', val: event.target.value });


    }
    let dateChange = (event) => {
        setFormReducer({ type: 'DATE', val: event.target.value });


    }
    let ammountChange = (event) => {
        setFormReducer({ type: 'AMMOUNT', val: event.target.value });

    }
    let namechnage = (event) => {
        setFormReducer({ type: 'NAME', val: event.target.value });

    }
    let onsubmithandler = (events) => {
        events.preventDefault();
        if (formReducer.userTitle.trim().length === 0) {
            return;
        }
        const Subcript = { title: formReducer.userTitle, ammount: formReducer.userAmmount, date: new Date(formReducer.userDate), name: formReducer.name }
        props.onSave(Subcript);
    }

    return (
        <form onSubmit={onsubmithandler}>
            <div className="controle">
                <label> name </label>
                <input type="text" value={formReducer.name} onChange={namechnage} />
            </div>
            <div className="controle">
                <label> Title </label>
                <input type="text" value={formReducer.userTitle} onChange={titileChange} />
            </div>
            <div className="controle">
                <label> Date </label>
                <input type="date" onChange={dateChange} value={formReducer.userDate} />
            </div>
            <div className="controle">
                <label> ammount </label>
                <input type="text" max={10} onChange={ammountChange} value={formReducer.userAmmount} />
            </div>
            <div className="controle">
                <button type='submit' className="addB">Add Subcription</button>
            </div>
        </form>
    )
}
export default FormSubcription