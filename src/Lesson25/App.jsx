import { useRef } from "react";
import useCount from "../hooks/useCount";
import useAxios from "../hooks/useAxios";
import useToggle from "../hooks/useToggle";
import MovingText from "react-moving-text";
import MovingComponent from "react-moving-text";
import emailjs from "@emailjs/browser";

import "./App.css";

const App = () => {
  const [number, { plus, minus }] = useCount(0, 0, 40);

  //   const [number, plus, minus] = useCount({
  //     initialValue: 0,
  //     min: 0,
  //     max: 40,
  //   });

  const { data, loading, error } = useAxios({
    baseURL: "https://jsonplaceholder.typicode.com/",
    endPoint: "/users",
    dataType: "",
  });

  const {
    data: newData,
    loading: nLoading,
    error: nError,
  } = useAxios({
    baseURL: "https://dummyjson.com",
    endPoint: "/carts",
    dataType: "carts",
  });

  const { toggle, changeToggle } = useToggle(true);

  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    console.log(formRef.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
    form.reset();
  }

  return (
    <div className="container">
      <form onSubmit={sendEmail} ref={formRef}>
        <input type="text" placeholder="Username" name="userName" />
        <input type="password" name="userPass" placeholder="Password" />
        <div className="roles">
          <label htmlFor="admin">Admin</label>
          <input type="radio" id="admin" name="user_role" value="Admin" />
          <label htmlFor="moderator">Moderator</label>
          <input
            type="radio"
            id="moderator"
            name="user_role"
            value="Moderator"
          />
          <label htmlFor="support">Support</label>
          <input type="radio" id="support" name="user_role" value="Support" />
          <label htmlFor="user">User</label>
          <input type="radio" id="user" name="user_role" value="User" />
        </div>
        <input type="submit" />
      </form>
      {/* <MovingText
        type="fadeInFromRight"
        duration="5000ms"
        delay="0s"
        direction="normal"
        timing="linear"
        iteration="1"
        fillMode="none"
      >
        <button onClick={changeToggle}>Toggle</button>
      </MovingText>
      <MovingComponent
        type="zoomIn"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <p>{number}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <div>{loading && <p>Users data is Loading</p>}</div>
        {data?.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
        {error && <p>{error}</p>}
        <div>{nLoading && <p>Products data is Loading</p>}</div>
        <div>
          {toggle ? (
            <div>
              {newData?.map((item) => {
                return <div key={item.id}>{item.id}</div>;
              })}
            </div>
          ) : null}
        </div>

        {nError && <p>{error}</p>}
      </MovingComponent> */}
    </div>
  );
};

export default App;
