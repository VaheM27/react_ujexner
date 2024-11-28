import React, { useEffect, useState } from "react";
import PostsData from "../../components/PostsData/PostsData";
import Sorting from "../../components/Sorting/Sorting";

import "./Posts.css";

export const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="posts_div">
      <div className="post_welcome">
        <h1>Posts Page</h1>
      </div>

      <Sorting
        setData={setData}
        data={data}

        fields={["title", "body"]}
      />

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
};
