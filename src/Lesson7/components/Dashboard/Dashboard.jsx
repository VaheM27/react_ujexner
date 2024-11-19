import { useState } from "react";

import "./Dashboard.scss";

const Dashboard = ({ arr, changeOrder }) => {
  return (
    <div className="board">
      <table>
        {arr[0] && (
          <thead>
            <tr>
              <th>Code</th>
              <th>Image</th>
              <th className="filter">
                Title
                <span onClick={changeOrder}>&#11167;</span>
              </th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
        )}
        <tbody>
          {arr.map((element) => {
            return (
              <tr key={element.id}>
                <td className="productIdTd">
                  <p className="productInfo productID">{element.id}</p>
                </td>
                <td>
                  <img
                    src={element.image}
                    alt="Product Image"
                    className="productImg"
                  />
                </td>
                <td className="infoTd">
                  <p className="productInfo name">{element.title}</p>
                </td>
                <td className="infoTd">
                  <p className="productInfo descPar">{element.description}</p>
                </td>
                <td className="infoTd">
                  <p className="productInfo">${element.price}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
