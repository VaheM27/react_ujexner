import { useState } from "react";

export default function useToggle(identifierType) {
  const [toggle, setToggle] = useState(identifierType);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return { toggle, changeToggle };
}
