import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/dataSlice/dataSlice";
import { fetchUsersData } from "./store/dataSlice/api";
import { getNum, incrementNum } from "./store/numberSlice/numberSlice";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, errorMessage } = useSelector(getData);
  const number = useSelector(getNum);
  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  return (
    <div>
      <h1
        onClick={() => dispatch(incrementNum())}
        style={{ cursor: "pointer" }}
      >
        {number}
      </h1>
      {loading && <p>asumem loading</p>}
      {loading && !errorMessage ? <p>Loading.....</p> : <p>{errorMessage}</p>}
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.firstName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
