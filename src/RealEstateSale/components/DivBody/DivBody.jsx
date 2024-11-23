import "./DivBody.css";

const DivBody = ({ todo }) => {
  return (
    <div>
      {todo.map((elm) => {
        return (
          <div>
            <p>{elm.id}</p>
            <p>{elm.name}</p>
            <p>{elm.phone}</p>
            <p>{elm.price}</p>
            <p>{elm.profit}</p>
            <p>{elm.company}</p>
            <p>{elm.helper}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DivBody;
