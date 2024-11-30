import { useState } from "react";
import { ClientList } from "../Main";
import search from "../../assets/png/search.png";
import "./ClientSection.scss";

const ClientSection = ({ data, selected, chooseUser }) => {
  const [filteredData, setFilteredData] = useState(data);

  const filterUsers = (e) => {
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <section className="clientSection">
      <div className="cl-sec-h">
        <h2>Patients</h2>
        <div className="inputField">
          <input
            type="text"
            placeholder="Search by name"
            onChange={filterUsers}
          />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="clientList">
        <ul>
          {filteredData.map((client) => (
            <ClientList
              key={client.phone_number}
              src={client.profile_picture}
              alt={client.name}
              name={client.name}
              sex={`${client.gender}, ${client.age}`}
              chooseUser={() => chooseUser(client.id)}
              className={selected === client.id ? "selected" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientSection;
