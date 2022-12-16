import React, { useContext, useEffect, useState } from "react";
import useInput from "./hook/useInput";
import "./Login.css";
import MessageContext from "./templates/MessageContext";
function SignUpForm() {
  const [formValid, setFormValid] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let ctx = useContext(MessageContext);
  let {
    input: nameInput,
    inputValid: nameValid,
    inputIsValid: nameIsValid,
    onChangeHandler: onNameChange,
    onBlurHandler: onNameBlur,
    resetInput: nameReset,
  } = useInput((value) => value.trim().length === 0);

  let {
    input: passwordInput,
    inputValid: passwordValid,
    inputIsValid: passwordIsValid,
    onChangeHandler: onpasswordChange,
    onBlurHandler: onpasswordBlur,
    resetInput: passwordReset,
  } = useInput((value) => value.trim().length === 0);
  let {
    input: emailInput,
    inputValid: emailValid,
    inputIsValid: emailIsValid,
    onChangeHandler: onEmailChange,
    onBlurHandler: onEmailBlur,
    resetInput: emailReset,
  } = useInput((value) => value.trim().length === 0 || !value.includes("@"));

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if (nameValid || passwordValid | emailValid) {
      return;
    }
    console.log(nameInput, " ", passwordInput);
    ctx.setName(nameInput);
    nameReset();
    emailReset();
    passwordReset();
  };

  let onShowClickHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!nameValid && !passwordValid | !emailValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid, passwordValid, emailValid]);

  return (
    <div className="infor">
      <form autoComplete="off" onSubmit={onSubmitHandler}>
        <div className="input_box">
          <label htmlFor="user" className="label">
            User Email
          </label>
          <input
            type="text"
            className="input"
            value={emailInput}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
            placeholder="type Email"
            id="email"
            title="User Name"
          />
          {emailIsValid && <p className="error-p">*Email Not Valid</p>}
        </div>
        <div className="input_box">
          <label htmlFor="user" className="label">
            User name
          </label>
          <input
            type="text"
            className="input"
            value={nameInput}
            onChange={onNameChange}
            onBlur={onNameBlur}
            placeholder="type username"
            id="user"
            title="User Name"
          />
          {nameIsValid && <p className="error-p">*Name Not Valid</p>}
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
          {passwordIsValid && <p className="error-p">*Password Not Valid</p>}
        </div>
        <button className="Log_Button" disabled={!formValid} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUpForm;
