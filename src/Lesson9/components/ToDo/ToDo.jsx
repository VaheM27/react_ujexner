import "./ToDo.css";

const ToDo = ({ todo }) => {
  return (
    <div>
      {todo.map((item) => {
        return <div key={item.id}>{item.text}</div>;
      })}
    </div>
  );
};

export default ToDo;
