import { Link, useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Register2.scss";

const Register2 = () => {
  const location = useLocation();
  const { newUser } = location.state || {};
  console.log(newUser);

  return (
    <main>
      <Nav user={newUser} />
      {newUser ? (
        <div className="container">
          <h1>
            Welcome, {newUser.firstName} {newUser.lastName} <br />
            Please finish the registration
          </h1>
        </div>
      ) : (
        <div className="container">
          <Link to="/">You have to log in at first</Link>
        </div>
      )}
    </main>
  );
};

export default Register2;
