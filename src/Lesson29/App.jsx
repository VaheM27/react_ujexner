import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUsersData } from "./store/selectors/userSelectors";
import { getAllUsersMiddleWare } from "./store/reducers/userReducer";
import { inputText } from "./store/selectors/inputSelectors";
import { getText } from "./store/actions/inputAction";

import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(inputText);
  const users = useSelector(useUsersData);
  console.log(styles);

  useEffect(() => {
    dispatch(getAllUsersMiddleWare());
  }, []);

  function add(e) {
    e.preventDefault();
    dispatch(getText(e.target[0].value));
  }

  return (
    <div>
      <Navbar />
      <p className={styles.paragraph}>{inputValue}</p>
      <form
        onSubmit={(e) => {
          add(e);
        }}
      >
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
