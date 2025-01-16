import TaskCreator from "./components/taskCreator/TaskCreator";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "./components/taskList/TaskList";

export default function App() {
  const taskList = useSelector((state) => state);
  const dispatch = useDispatch();

  function addTask(e) {
    e.preventDefault();
    dispatch({
      type: "add_task",
      payload: { title: e.target[0].value, task: e.target[1].value },
    });
    e.target.reset();
  }

  function checkTask(id) {
    const task = taskList.find((task) => task.id === id);
    if (task) {
      dispatch({
        type: "set_checked",
        payload: {
          ...task,
          checked: !task.checked,
        },
      });
    }
  }

  function deleteTask(id) {
    dispatch({ type: "delete_task", payload: id });
  }

  return (
    <div className="container">
      <TaskCreator addTask={addTask} />
      {taskList.length > 0 && (
        <div className="table">
          {taskList.map((task, i) => (
            <TaskList
              task={task}
              key={i}
              checkTask={checkTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
