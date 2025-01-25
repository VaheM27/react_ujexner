import React from "react";
import Cards from "../Card/Cards";
import { useSelector } from "react-redux";
import { getIsDraggable } from "../../store/todoSlice/todoSlice";

const Box = () => {
  // const aaaaaa = useSelector(getIsDraggable);
  // console.log(aaaaaa);
  

  return (
    <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>
      <Cards name={"asdasd"} username={"asdasdaadas"} />
    </div>
  );
};

export default Box;
