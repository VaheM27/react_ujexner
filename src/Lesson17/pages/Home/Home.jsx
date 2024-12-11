import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.scss";
import axios from "axios";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Invalid username or password.");
      return;
    }

    axios({
      method: "GET",
      url: "http://localhost:3000/users",
      params: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        const userData = response.data;

        if (userData.length === 0) {
          throw new Error("Invalid username or password.");
        }

        setUser(userData[0]);
        setErrorMessage("");
        setUsername("");
        setPassword("");
        navigate(`/${username}`, { state: { user: userData[0] } });
      })
      .catch((error) => {
        setErrorMessage(error.message || "An error occurred during login.");
        setUser(null);
      });
  };

  const showPass = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <section className="home">
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
      <form onSubmit={logIn}>
        <h1>Login</h1>
        <div className="form-footer">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Type your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div id="pass-div">
            <input
              type={type}
              name="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bi bi-eye${type === "password" ? "" : "-slash"}`}
              onClick={showPass}></i>
          </div>
          <div>
            <button type="submit">Sign in</button>
            <div className="signup">
              <p>Or create a new account</p>
              <Link to="/registration">Sign up</Link>
              {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
