import ComponentB from "../CompnentB/ComponentB";

import "./Component.css";

const ComponentA = () => {
  return (
    <div>
      <p>Component A</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
