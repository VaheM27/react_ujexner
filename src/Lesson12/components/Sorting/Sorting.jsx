import { useState } from "react";

import "./Sorting.css";

const Sorting = ({ fields, setData, data }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sordByName = (arg) => {
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === "asc")
        return a[arg].toLowerCase() > b[arg].toLowerCase() ? 1 : -1;
      return a[arg].toLowerCase() < b[arg].toLowerCase() ? 1 : -1;
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="sorting_buttons">
      {fields.includes("name") ? (
        <button onClick={() => sordByName("name", "asc")}>By Name</button>
      ) : null}

      {fields.includes("username") ? (
        <button onClick={() => sordByName("username", "asc")}>
          By Username
        </button>
      ) : null}

      {fields.includes("email") ? (
        <button onClick={() => sordByName("email", "asc")}>By Email</button>
      ) : null}
      {fields.includes("title") ? (
        <button onClick={() => sordByName("title", "asc")}>By Title</button>
      ) : null}
      {fields.includes("body") ? (
        <button onClick={() => sordByName("body", "asc")}>By Text</button>
      ) : null}
    </div>
  );
};

export default Sorting;
