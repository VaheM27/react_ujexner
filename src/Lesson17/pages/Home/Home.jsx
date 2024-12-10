import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.scss";

const Home = () => {
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

    try {
      const response = await fetch(
        `http://localhost:3000/users?username=${username}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userData = await response.json();

      if (userData.length === 0) {
        throw new Error("Invalid username or password.");
      }

      setUser(userData[0]);
      setErrorMessage("");
      setUsername("");
      setPassword("");
      navigate(`/${username}`, { state: { user: userData[0] } });
    } catch (error) {
      setErrorMessage(error.message);
      setUser(null);
    }
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
          <button type="submit">Login</button>
          <p>or</p>
          <Link to="/registration">Create a new account</Link>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </form>
    </section>
  );
};

export default Home;
