import { useState } from "react";
import FormBox from "./components/FormBox/FormBox";
import Card from "./components/Card/Card";

import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  const addCard = (e) => {
    e.preventDefault();
    const { fname, lname, email, pass } = e.target;
    const boxData = {
      id: new Date().getTime(),
      fname: fname.value.trim(),
      lname: lname.value.trim(),
      email: email.value.trim(),
      pass: pass.value.trim(),
      isChecked: false,
      isOpen: false,
    };

    if (
      !fname.value.trim() ||
      !lname.value.trim() ||
      !email.value.trim() ||
      !pass.value.trim()
    ) {
      return;
    }

    setData([...data, boxData]);
    fname.value = "";
    lname.value = "";
    email.value = "";
    pass.value = "";
  };

  const hideCard = (userId) => {
    const checkedData = data.map((item) => {
      if (item.id === userId) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setData(checkedData);
  };

  const deleteCard = (userId) => {
    const filteredData = data.filter((item) => {
      return item.id !== userId;
    });
    setData(filteredData);
  };

  const showPass = (elementId) => {
    const openPasswordData = data.map((item) => {
      if (item.id === elementId) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setData(openPasswordData);
  };

  return (
    <div className="mainDiv">
      <FormBox foo={addCard} />
      <Card
        arr={data}
        deleteCard={deleteCard}
        hideCard={hideCard}
        showPass={showPass}
      />
    </div>
  );
}

export default App;
