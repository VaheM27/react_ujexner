import ComponentC from "../CompnentC/ComponentC";

import "./Component.css";

const ComponentB = () => {
  return (
    <div>
      <p>Component B</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
