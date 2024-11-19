import { useState, useEffect } from "react";
import SortBtn from "../SortBtn/SortBtn";
import EyeIcon from "../EyeIcon/EyeIcon";
import "./Users.scss";

const Users = () => {
  const [data, setData] = useState([]);
  const [fromLowToHigh, setfromLowToHigh] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://6739f0baa3a36b5a62f02793.mockapi.io/usersData")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const sortByName = () => {
    let sortedByName = [];

    if (fromLowToHigh === 0 || fromLowToHigh === -1) {
      sortedByName = data.toSorted((a, b) => a.name.localeCompare(b.name));
      setfromLowToHigh(1);
    } else if (fromLowToHigh === 1) {
      sortedByName = data.toSorted((a, b) => b.name.localeCompare(a.name));
      setfromLowToHigh(-1);
    }

    setData(sortedByName);
  };

  const sortByAge = () => {
    let sortedByAge = [];

    if (fromLowToHigh === 0 || fromLowToHigh === -1) {
      sortedByAge = data.toSorted((a, b) => Number(a.age) - Number(b.age));
      setfromLowToHigh(1);
    } else if (fromLowToHigh === 1) {
      sortedByAge = data.toSorted((a, b) => Number(b.age) - Number(a.age));
      setfromLowToHigh(-1);
    }

    setData(sortedByAge);
  };

  const sortById = () => {
    let sortedById = [];

    if (fromLowToHigh === 0 || fromLowToHigh === -1) {
      sortedById = data.toSorted((a, b) => Number(b.id) - Number(a.id));
      setfromLowToHigh(1);
    } else if (fromLowToHigh === 1) {
      sortedById = data.toSorted((a, b) => Number(a.id) - Number(b.id));
      setfromLowToHigh(-1);
    }

    setData(sortedById);
  };

  const sortByCreate = () => {
    let sortedByCreatedDate = [];
    if (fromLowToHigh === 0 || fromLowToHigh === -1) {
      sortedByCreatedDate = data.toSorted(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      setfromLowToHigh(1);
    } else if (fromLowToHigh === 1) {
      sortedByCreatedDate = data.toSorted(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setfromLowToHigh(-1);
    }
    setData(sortedByCreatedDate);
  };

  const removeItem = (userNumber) => {
    const newArray = data.filter((element) => {
      return element.id !== userNumber;
    });
    setData(newArray);
  };

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <div className="tableDiv">
      <table className="table">
        <thead className="tableHead">
          <tr>
            <th className="filter" onClick={sortById}>
              No
              <SortBtn type={"numeric"} />
            </th>
            <th>Avatar</th>
            <th className="filter" onClick={sortByName}>
              Full Name
              <SortBtn type={"alphabetical"} />
            </th>
            <th className="filter" onClick={sortByAge}>
              Age
              <SortBtn type={"numeric"} />
            </th>
            <th className="filter" onClick={sortByCreate}>
              Created At
              <SortBtn type={"numeric"} />
            </th>
            <th className="passwordTh" onClick={changeShow}>
              Password
              <EyeIcon open={show} />
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {data.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>
                  <p>{elm.id}</p>
                </td>
                <td>
                  <img src={elm.avatar} alt="Avatar" width={100} />
                </td>
                <td>
                  <p>{elm.name}</p>
                </td>
                <td>
                  <p>Age: {elm.age}</p>
                </td>
                <td>
                  <p>{elm.createdAt}</p>
                </td>
                <td className="passwordTd">
                  {show === true ? <p>{elm.password}</p> : <p>••••••••••</p>}
                </td>
                <td>
                  <button
                    onClick={() => removeItem(elm.id)}
                    style={{ color: elm.color, backgroundColor: elm.textColor }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
