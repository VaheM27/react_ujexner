import { useLocation } from "react-router-dom";
import Success from "../../components/Success/Success";
import "./Completed.scss";

export const Completed = () => {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <main>
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
      <div className="container completed">
        <Success name={name} />
      </div>
    </main>
  );
};
