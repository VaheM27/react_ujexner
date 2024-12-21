import React, { useContext } from "react";
import { UserData } from "../../App";

const Navbar = () => {
  const dt = useContext(UserData);

  return (
    <div>
      <p>{JSON.stringify(dt)}</p>

      <p>Navbar</p>
    </div>
  );
};

export default Navbar;
