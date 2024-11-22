// import { useState } from "react";

// import close from "../../assets/img/close.png";
// import open from "../../assets/img/open.png";

import "./DataBody.scss";

const DataBody = ({ data, sortData }) => {
  //   const [pass, setPass] = useState({});
  //   const showPass = (id) => {
  //     setPass({
  //       [id]: !pass[id]
  //     });
  //   };

  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th
                onClick={() => {
                  sortData("ID");
                }}
                className="short"
              >
                ID &#8593; &#8595;
              </th>
              <th
                onClick={() => {
                  sortData("NAME");
                }}
              >
                NAME &#8593; &#8595;
              </th>
              <th>EMAIL </th>
              <th>USERNAME</th>
              <th className="short">PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elm) => {
              return (
                <div key={elm.id} className="body">
                  <tr>
                    <td className="short">{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.email}</td>
                    <td>{elm.userName}</td>
                    <td className="short">
                      {elm.password}

                      {/* <img
                        onClick={() => {
                          showPass(elm.id);
                        }}
                        src={pass[id] ? open : close}
                        alt="eye-icon"
                      /> */}
                    </td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataBody;
