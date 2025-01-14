import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  Increment,
  DECREMENT,
  INCREMENT,
} from "../../store/number/numberSlice";

const NumberComponent = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  return (
    <div>
      <div>{number}</div>
      <button onClick={() => dispatch(Increment(INCREMENT))}>Increment</button>
      <button onClick={() => dispatch(Decrement(DECREMENT))}>Decrement</button>
    </div>
  );
};

export default NumberComponent;
