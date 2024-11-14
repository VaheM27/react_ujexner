import { users } from "../../constants/data";
import { useState } from "react";
import "./DatenList.scss";

const DatenList = () => {
  const [displayMap, setDisplayMap] = useState(users);

  const handleDelete = (userId) => {
    const newData = displayMap.filter((user) => userId !== user.id);
    setDisplayMap(newData);
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayMap.map((user) => (
            <tr
              key={user.id}
              style={{
                display: displayMap[user.id],
                backgroundColor: user.id % 2 === 0 ? "#141414" : "#000",
              }}
            >
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={user.firstName} />
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{`${user.address.address}, ${user.address.postalCode} ${user.address.city}, ${user.address.state}, ${user.address.country}`}</td>
              <td>
                <a href={`tel:${user.phone.replaceAll(/[+\-\s]/g, "")}`}>
                  {user.phone}
                </a>
              </td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DatenList;
