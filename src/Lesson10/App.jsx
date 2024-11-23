import { useState } from "react";
import Inputs from "./components/Inputs/Inputs";
import Table from "./components/Table/Table";
import { nanoid } from "nanoid";

import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const [disable, setDisable] = useState(true);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [sort, setSort] = useState(false);

  function checkFirstState(e) {
    setFirstValue(e.target.value);
    setDisable(!(firstValue && secondValue));
  }
  function checkSecondValue(e) {
    setSecondValue(e.target.value);
    setDisable(!(firstValue && secondValue));
  }

  function createData(e) {
    e.preventDefault();
    const formData = e.target;
    const { userName, password } = formData;

    const eachItem = {
      id: nanoid(),
      name: userName.value.trim(),
      pass: password.value.trim(),
      showPass: false,
    };

    const isDuplicate = data.some(
      (item) => item.name.toLowerCase() === userName.value.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("This username is already used, please choose another one.");
      return;
    }

    if (userName.value.trim() && password.value.trim()) {
      setFirstValue("");
      setSecondValue("");
      setDisable(true);
      setData([...data, eachItem]);
    }
  }

  function sortByName() {
    const sortedArray =
      sort === false
        ? data.toSorted((a, b) => a.name.localeCompare(b.name))
        : data.toSorted((a, b) => b.name.localeCompare(a.name));

    setSort(!sort);
    setData(sortedArray);
  }

  const passwordShowHide = (userID) => {
    const passwordsArr = data.map((item) => {
      if (item.id === userID) {
        return { ...item, showPass: !item.showPass };
      }
      return { ...item, showPass: false };
    });
    setData(passwordsArr);
  };

  const deleteFunction = (userID) => {
    const deletedArr = data.filter((item) => {
      return item.id !== userID;
    });
    setData(deletedArr);
  };

  return (
    <div className="App">
      <Inputs
        sendData={createData}
        buttonState={disable}
        firstState={checkFirstState}
        secondState={checkSecondValue}
        firstInput={firstValue}
        secondInput={secondValue}
      />
      <Table
        arr={data}
        sortFunction={sortByName}
        passwordState={passwordShowHide}
        deleteUser={deleteFunction}
        sortIcon={sort}
      />
    </div>
  );
}

export default App;
