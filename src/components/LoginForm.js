import React, { useContext, useEffect, useState } from "react";
import useInput from "./hook/useInput";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import MessageContext from "./templates/MessageContext";
import Error_Log from "./templates/Error_Log";
function LoginForm() {
  const [formValid, setFormValid] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [pending, setPending] = useState(false);
  let [error, setError] = useState(false);

  let ctx = useContext(MessageContext);
  let {
    input: nameInput,
    inputValid: nameValid,
    inputIsValid: nameIsValid,
    onChangeHandler: onNameChange,
    onBlurHandler: onNameBlur,
  } = useInput(
    (value) =>
      !value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  );

  let {
    input: passwordInput,
    inputValid: passwordValid,
    inputIsValid: passwordIsValid,
    onChangeHandler: onpasswordChange,
    onBlurHandler: onpasswordBlur,
  } = useInput((value) => value.trim().length < 6);

  let navigate = useNavigate();

  let onSubmitHandler = async (event) => {
    setPending(true);
    event.preventDefault();
    if (nameValid || passwordValid) {
      return;
    }
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvTfBn1R1_dvqxwq7hwXMD3ptiH3Ex3s0",
      {
        method: "POST",
        body: JSON.stringify({
          email: nameInput,
          password: passwordInput,
          returnSecureToken: true,
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
              setError(data.error.message);
            }
          });
        }
      })
      .finally(() => {
        setPending(false);
      });
  };

  let onShowClickHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!nameValid && !passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid, passwordValid]);
  let closeHandler = ()=>{
    setError(false);
  }
  return (
    <div className="infor">
      {error && <Error_Log Error={error}  setClose={closeHandler}/>}
      <form onSubmit={onSubmitHandler}>
        <div className="input_box">
          <label htmlFor="user" className="label">
            Email Address
          </label>
          <input
            type="email"
            className="input"
            value={nameInput}
            onChange={onNameChange}
            onBlur={onNameBlur}
            placeholder="type Email"
            id="email"
            title="User email"
          />
          {nameIsValid && <p className="error-p">*Name Required</p>}
        </div>
        <div className="input_box">
          <label className="label" htmlFor="password">
            password
          </label>
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              className="inputx"
              onChange={onpasswordChange}
              onBlur={onpasswordBlur}
              value={passwordInput}
              placeholder="type Password"
              id="password"
              title="Password"
            />
            <span
              className="bi bi-eye-fill"
              id="show_hide_password"
              onClick={onShowClickHandler}
            ></span>
          </div>
          {passwordIsValid && <p className="error-p">*Password Required</p>}
        </div>
        {pending ? (
          <div className="loader"></div>
        ) : (
          <button className="Log_Button" disabled={!formValid} type="submit">
            Log in
          </button>
        )}
      </form>
    </div>
  );
}
export default LoginForm;
