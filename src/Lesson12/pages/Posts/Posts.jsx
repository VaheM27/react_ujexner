import React, { useEffect, useState } from "react";
import PostsData from "../../components/PostsData/PostsData";
import Sorting from "../../components/Sorting/Sorting";

import "./Posts.css"

export const Posts = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);


  const sordByName = (arg) => {
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === "asc") return a[arg].toLowerCase() > b[arg].toLowerCase() ? 1 : -1;
      return a[arg].toLowerCase() < b[arg].toLowerCase() ? 1 : -1;
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };


  return (
    <div className="posts_div">

      <div className="post_welcome">
      <h1>Posts Page</h1>
      </div>

      <Sorting sordByName={sordByName} fields={['title', 'body']} />

      {data.map((item) => {
        return (
          <PostsData
            key={item.id}
            title={item.title}
            id={item.id}
            body={item.body}
          />
        );
      })}
    </div>
  );
}

