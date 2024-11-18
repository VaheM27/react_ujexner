import { useState } from "react";
import Users from "./components/Users/Users";

import "./App.scss";

function App() {
  const [table, setTable] = useState(false);

  const changeView = () => {
    setTable(!table);
  };

  return (
    <div>
      <button onClick={changeView} className="button-49">
        Click!
      </button>
      {table ? <Users /> : <h1>&lt;/&gt;</h1>}
    </div>
  );
}

export default App;
