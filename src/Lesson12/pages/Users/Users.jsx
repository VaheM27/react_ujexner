import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import TableHead from "../../components/TableHead/TableHead";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortVar, setSortVar] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);

  const sortArrByTitle = () => {
    const sortedByTitle = users.toSorted((a, b) => {
      if (sortVar === false) {
        return a.username.localeCompare(b.username);
      } else {
        return b.username.localeCompare(a.username);
      }
    });
    setSortVar(!sortVar);
    setUsers(sortedByTitle);
  };

  const sortArrByNum = () => {
    const sortedByNum = users.toSorted((a, b) => {
      return sortVar === false ? a.age - b.age : b.age - a.age;
    });
    setSortVar(!sortVar);
    setUsers(sortedByNum);
  };

  return (
    <div className="data">
      <div className="header">
        <TableHead
          title="Username"
          num="Age"
          info="Email"
          sortByTitle={sortArrByTitle}
          sortByNum={sortArrByNum}
        />
      </div>
      <div className="dashboard">
        {users.map((item) => {
          return (
            <Dashboard
              key={item.id}
              id={item.id}
              name={item.username}
              image={item.image}
              number={item.age}
              someDetail={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};
