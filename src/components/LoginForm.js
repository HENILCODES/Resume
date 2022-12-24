import React, { useContext, useEffect, useState } from "react";
import useInput from "./hook/useInput";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import MessageContext from "./templates/MessageContext";
function LoginForm() {
  const [formValid, setFormValid] = useState(false);
  let [pending, setPending] = useState(false);

  let ctx = useContext(MessageContext);
  let {
    input: nameInput,
    inputValid: nameValid,
    inputIsValid: nameIsValid,
    onChangeHandler: onNameChange,
    onBlurHandler: onNameBlur,
  } = useInput(
    (value) => !value.match(/^[\w a-zA-Z0-9]*$/) || value.trim().length > 15 || value.trim().length ===0
  );

  let navigate = useNavigate();

  let onSubmitHandler = async (event) => {
    setPending(true);
    event.preventDefault();
    if (nameValid) {
      return;
    }
    await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/UserLog.json",
      {
        method: "POST",
        body: JSON.stringify({
          Name: nameInput,
          Date: new Date().toLocaleString(),
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          ctx.setContexts(nameInput, true);
          navigate("/");
        } else {
          return response.json().then((data) => {
            if (data || data.error) {
              alert(data.error.message);
            }
          });
        }
      })
      .finally(() => {
        setPending(false);
      });
  };

  useEffect(() => {
    if (!nameValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid]);
  return (
    <div className="infor">
   <form onSubmit={onSubmitHandler}>
        <div className="input_box">
          <label htmlFor="user" className="label">
            User Name
          </label>
          <input
            type="text"
            className="input"
            autoComplete="off"
            value={nameInput}
            onChange={onNameChange}
            onBlur={onNameBlur}
            placeholder="type User Name"
            id="user"
            maxLength="15"
            title="User email"
          />
          {nameIsValid && <p className="error-p">*Name Required</p>}
        </div>
        {pending ? (
          <div className="loader"></div>
        ) : (
          <button className="Log_Button" disabled={!formValid} type="submit">
            Start Chat
          </button>
        )}
      </form>
    </div>
  );
}
export default LoginForm;
