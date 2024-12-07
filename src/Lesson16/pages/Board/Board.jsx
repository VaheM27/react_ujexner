import React, { useState } from "react";
import Fields from "../../components/Fields/Fields";
import Box from "../../components/Box/Box";

import "./Board.scss";

export const Board = () => {
  const [data, setData] = useState([]);

  return (
    <div className="board">
      <Fields addData={setData} />
      <div className="boxes">
        {data.map((elm, index) => {
          return (
            <Box
              key={index}
              fName={elm.fullName}
              mail={elm.email}
              phone={elm.phone}
              pass={elm.passport}
              zip={elm.zipCode}
              address1={elm.address}
              address2={elm.secondAddress}
            />
          );
        })}
      </div>
    </div>
  );
};
