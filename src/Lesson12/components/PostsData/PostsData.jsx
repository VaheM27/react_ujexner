import React from "react";

import "./PostsData.css"

const PostsData = ({ id, title, body }) => {
  return (
    <div id={id} className="post_item">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostsData;