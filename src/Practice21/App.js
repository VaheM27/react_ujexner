import { useState } from "react";
import { HeaderInputs } from "./components/HeaderInputs/HeaderInputs";
import { DataBody } from "./components/DataBody/DataBody";

import "./App.css";
import { nanoid } from "nanoid";

export const App = () => {
  const [todo, setTodo] = useState([]);

  function AddToDo(e) {
    e.preventDefault();
    const form = e.target;
    const { login, pass } = form;
    const formData = {
      id: nanoid(),
      // login: e.target.elemenys.login.value,
      // pass: e.target.elements.pass.value,
      login: login.value,
      pass: pass.value,
    };
    setTodo([...todo, formData]);
    form.reset();
  }

  // function SortByLogin() {
  //   setTodo([...todo].sort((a, b) => (a.login > b.login ? 1 : -1)));
  // }

  // function SortByPassword() {
  //   setTodo([...todo].sort((a, b) => (a.pass > b.pass ? 1 : -1)));
  // }

  console.log(todo);
  return (
    <div className="App container">
      <HeaderInputs
        add={AddToDo}
        // sort={SortByLogin}
        // passSort={SortByPassword}
      />
      <DataBody todo={todo} />
    </div>
  );
};
