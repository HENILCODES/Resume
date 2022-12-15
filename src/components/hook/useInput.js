import { useReducer } from "react";

let useInput = (Validation) => {
  let inputStateValue = { inputs: "", inputValid: false };
  let [inputState, setInputState] = useReducer((state, action) => {
    if (action.type === "INPUT") {
      return { inputs: action.value, inputValid: false };
    } else if (action.type === "TECH") {
      return { inputs: state.inputs, inputValid: action.value };
    } else if (action.type === "CLEAR") {
      return inputStateValue;
    }
    return inputStateValue;
  }, inputStateValue);

  let inputValid = Validation(inputState.inputs);

  const onChangeHandler = (event) => {
    setInputState({ type: "INPUT", value: event.target.value });
  };
  let onBlurHandler = () => {
    if (inputValid) {
      setInputState({ type: "TECH", value: true });
    }
  };
  let resetInput = () => {
    setInputState({ type: "CLEAR" });
  };
  return {
    input: inputState.inputs,
    inputValid,
    inputIsValid: inputState.inputValid,
    onChangeHandler,
    onBlurHandler,
    resetInput,
  };
};
export default useInput;
