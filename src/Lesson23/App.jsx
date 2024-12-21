import React, { createContext, useState } from "react";
import ComponentA from "./components/ComponentA/ComponentA";
import Navbar from "./components/Navbar/Navbar";

export const UserData = createContext();

const App = () => {
  const [data, setData] = useState([{ id: "1", name: "Bdgo" }]);

  return (
    <div>
      <UserData.Provider value={data}>
        <Navbar />
        <ComponentA />
      </UserData.Provider>
    </div>
  );
};

export default App;
