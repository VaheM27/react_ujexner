// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getText, makeTodo } from "./store/actions/todoActions";
// import { todoSelector } from "./store/selectors/todoSelectors";
// import { addUsers } from "./store/actions/userActions";
// import { makeUser } from "./helpers/makeUser";
// import { getUsers } from "./store/selectors/userSelectors";

import MakeUser from "./components/makeUser/MakeUser";
import ShowUser from "./components/showUser/ShowUser";

import "./App.css";

const App = () => {
  // const [state, setState] = useState(); // local State
  // const { inputText, todos } = useSelector(todoSelector); // global State

  return (
    <>
      <MakeUser />
      <ShowUser />
    </>
  );
};

export default App;
