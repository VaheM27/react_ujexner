import { useState } from "react";
import { nanoid } from "nanoid";

import NavigationField from "./components/NavigationField/NavigationField";
import DivBody from "./components/DivBody/DivBody";

import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  function AddDiv(e) {
    e.preventDefault();
    const form = e.target;
    const { name, phone, price, profit, company, helper } = form;
    const formData = {
      id: nanoid(10),
      name: name.value,
      phone: phone.value,
      price: price.value,
      profit: profit.value,
      company: company.value,
      helper: helper.value,
    };
    setTodo([...todo, formData]);
    form.reset();
  }

  const [sorted, setSorted] = useState(-1);
  function SortByName() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1 ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setSorted(newSortedData);
  }
  function SortByPhone() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1
        ? a.phone.localeCompare(b.phone)
        : b.phone.localeCompare(a.phone)
    );
    setSorted(newSortedData);
  }
  function SortByPrice() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1
        ? a.price.localeCompare(b.price)
        : b.price.localeCompare(a.price)
    );
    setSorted(newSortedData);
  }
  function SortByProfit() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1
        ? a.profit.localeCompare(b.profit)
        : b.profit.localeCompare(a.profit)
    );
    setSorted(newSortedData);
  }
  function SortByCompany() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1
        ? a.company.localeCompare(b.company)
        : b.company.localeCompare(a.company)
    );
    setSorted(newSortedData);
  }
  function SortByHelper() {
    const newSortedData = sorted.toSorted((a, b) =>
      sorted === 1
        ? a.helper.localeCompare(b.helper)
        : b.helper.localeCompare(a.helper)
    );
    setSorted(newSortedData);
  }

  return (
    <div className="container">
      <NavigationField
        add={AddDiv}
        SortByName={SortByName}
        SortByPhone={SortByPhone}
        SortByPrice={SortByPrice}
        SortByProfit={SortByProfit}
        SortByCompany={SortByCompany}
        SortByHelper={SortByHelper}
      />
      <DivBody Todo={todo} />
    </div>
  );
};
export default App;
