import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const ComFour = () => {
  const [data, setData] = useState([]);

  function addColumns() {
    setData([...data, { id: uuidv4() }]);
  }

  console.log(data);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <button onClick={addColumns}>Add Columns</button>
      {data.map((item) => {
        return (
          <div className="box2" key={item.id}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
