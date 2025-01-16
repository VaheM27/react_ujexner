import "./TaskCreator.scss";

export default function TaskCreator({ addTask }) {
  return (
    <form onSubmit={addTask}>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Task" />
      <button type="submit">Add Task</button>
    </form>
  );
}
