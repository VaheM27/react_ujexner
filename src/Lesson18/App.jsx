import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import instance from "./axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState("posts");
  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
    //   setPosts(res.data)
    // );
    // axios({
    //   baseURL: "https://jsonplaceholder.typicode.com",
    //   method: "GET",
    //   url: url,
    //   params: {
    //     _limit: 10,
    //     _start: 30,
    //   },
    // }).then((res) => console.log(res));
    // instance({
    //   url: url,
    //   method: "GET",
    //   params: {
    //     _limit: 10,
    //     _start: 30,
    //   },
    // }).then((res) => setPosts(res.data));
    instance({
      method: "DELETE",
      url: url + "/1",
      params: {
        _limit: 10,
        _start: 30,
      },
      data: {},
    });
  }, [url]);

  const buttons = ["posts", "comments"];
  return (
    <div>
      {posts?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
      <div>
        {buttons.map((item, index) => (
          <button key={index} onClick={() => setUrl(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
