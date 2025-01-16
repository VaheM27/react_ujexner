import React from "react";
import { useDispatch } from "react-redux";
import { getText } from "../../store/todoSlice/todoSlice";

import "./InputField.scss";

const InputField = () => {
  const dispatch = useDispatch();

  const submitFunction = (e) => {
    e.preventDefault();
    const form = e.target;
    const { input } = form;
    input.value && dispatch(getText(input.value));
    form.reset();
  };

  return (
    <div className="form">
      <form onSubmit={submitFunction}>
        <input type="text" name="input" placeholder="Task Title" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default InputField;
