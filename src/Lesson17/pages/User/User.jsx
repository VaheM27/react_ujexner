import { useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./User.scss";

const User = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p>User data is unavailable.</p>;
  }

  const {
    image,
    firstName = "N/A",
    lastName = "N/A",
    company = {},
    address = {},
    bank = {},
  } = user;

  return (
    <main>
      <Nav user={user} />
      <div className="container main">
        <div className="user-left">
          <img
            src={image || "default-user-image.jpg"}
            alt={`${firstName} ${lastName}`}
          />
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{company.title || "No title available"}</p>
          <div className="user-left-footer">
            <ul className="left-list">
              <li>Age</li>
              <li>Education</li>
              <li>Address</li>
            </ul>
            <ul className="right-list">
              <li>{user.age || "N/A"}</li>
              <li>{user.university || "N/A"}</li>
              <li>
                {address.address || "N/A"}, {address.postalCode || "N/A"}{" "}
                {address.city || "N/A"}, {address.country || "N/A"}
              </li>
            </ul>
          </div>
        </div>
        <div className="user-right">
          <div>
            <h2>Personal Information</h2>
            <ul>
              <li>
                <span>Name:</span>
                <span>
                  {firstName} {lastName}
                </span>
              </li>
              <li>
                <span>Gender:</span>
                <span>{user.gender || "N/A"}</span>
              </li>
              <li>
                <span>Birthdate:</span>
                <span>{user.birthDate || "N/A"}</span>
              </li>
              <li>
                <span>Phone:</span>
                <span>{user.phone || "N/A"}</span>
              </li>
              <li>
                <span>Email:</span>
                <span>{user.email || "N/A"}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Bio</h2>
            <ul>
              <li>
                <span>Height:</span>
                <span>{user.height || "N/A"} cm</span>
              </li>
              <li>
                <span>Weight:</span>
                <span>{user.weight || "N/A"} kg</span>
              </li>
              <li>
                <span>Eye Color:</span>
                <span>{user.eyeColor || "N/A"}</span>
              </li>
              <li>
                <span>Hair:</span>
                <span>
                  {user.hair?.type || "N/A"} {user.hair?.color || ""}
                </span>
              </li>
              <li>
                <span>Blood Group:</span>
                <span>{user.bloodGroup || "N/A"}</span>
              </li>
            </ul>
          </div>
          {company.name && (
            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <span>Company:</span>
                  <span>{company.name}</span>
                </li>
                <li>
                  <span>Department:</span>
                  <span>{company.department || "N/A"}</span>
                </li>
                <li>
                  <span>Title:</span>
                  <span>{company.title || "N/A"}</span>
                </li>
                <li>
                  <span>Address:</span>
                  <span>
                    {company.address?.address || "N/A"},{" "}
                    {company.address?.postalCode || "N/A"}
                  </span>
                </li>
                <li>
                  <span></span>
                  <span>
                    {company.address?.city || "N/A"},{" "}
                    {company.address?.country || "N/A"}
                  </span>
                </li>
              </ul>
            </div>
          )}
          {bank.iban && (
            <div>
              <h2>Banking</h2>
              <ul>
                <li>
                  <span>IBAN:</span>
                  <span>{bank.iban || "N/A"}</span>
                </li>
                <li>
                  <span>Card Number:</span>
                  <span>{bank.cardNumber || "N/A"}</span>
                </li>
                <li>
                  <span>Type:</span>
                  <span>{bank.cardType || "N/A"}</span>
                </li>
                <li>
                  <span>Expire:</span>
                  <span>{bank.cardExpire || "N/A"}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default User;
