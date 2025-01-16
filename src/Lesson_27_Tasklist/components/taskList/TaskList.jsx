import "./TaskList.scss";

export default function TaskList({ task, checkTask, deleteTask }) {
  return (
    <ul className={task.checked ? "checked" : ""}>
      <li>
        {" "}
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => checkTask(task.id)}
        />
      </li>
      <li>{task.title}</li>
      <li>{task.task}</li>
      <li>{task.date.split(" ").splice(1).join(" ")}</li>
      <li>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    </ul>
  );
}
