import React from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card/Card";
import InputField from "./components/InputField/InputField";

import "./App.scss";

const App = () => {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div className="app">
      <InputField />
      <Card arr={todoList} />
    </div>
  );
};

export default App;
