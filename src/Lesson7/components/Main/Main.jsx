import { useState } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";
const Main = ({ arr }) => {
  return (
    <div className="main">
      <table className="table table-bordered table-dark">
        {arr[0] && (
          <thead className="">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
        )}
        <tbody>
          {arr.map((e, index) => {
            return (
              <tr key={index}>
                <td scope="row">
                  <img src={e.image} />
                </td>
                <td scope="row">{e.title}</td>
                <td scope="row">
                  <p>{e.price ? `${e.price}$` : e.start_production}</p>
                </td>
                <td scope="row">
                  <p>{e.description ? e.description : e.class}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
