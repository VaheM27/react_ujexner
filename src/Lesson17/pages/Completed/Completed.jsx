import { useLocation } from "react-router-dom";
import "./Completed.scss";

export const Completed = () => {
  const location = useLocation();
  const { name } = location.state || {};
  return <main>Welcome {name}</main>;
};
