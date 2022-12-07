import React, { memo, useEffect, useRef, useState } from 'react'

function InputChatBox(props) {

    let inputBox = useRef();
    const [message,setMessage] = useState({chat:'',sender:'',sendTime:''});

    // let send
    let submitHandler = (event)=>{
        event.preventDefault();
        setMessage({...message,sender:props.userName,sendTime:new Date()});
    }
    let inputChatHandler = (event)=>{
        setMessage({chat:event.target.value});
    }
    
    useEffect(()=>{
        console.log(message);
    },[message])

    return(
    <div className="bottom">
        <div id="chat_in">
            <form className="form" onSubmit={submitHandler}>
                <input type="text" ref={inputBox} onChange={inputChatHandler} className="input" id="ChatsBox" autoComplete="off" placeholder="Type Message" title="Type Message" />
                <button className="send bi bi-send" name="Done"> </button>
            </form>
        </div>
    </div>
    )
}

export default memo( InputChatBox);