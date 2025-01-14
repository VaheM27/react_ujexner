import { useDispatch, useSelector } from "react-redux";
import { getText, makeTodo } from "./store/todoSlice/todoSlice";
import NumberComponent from "./components/NumberComponent/NumberComponent";

const App = () => {
  const dispatch = useDispatch();
  const { inputText, todos } = useSelector((state) => state.todo);

  return (
    <div>
      <NumberComponent />
      <input
        type="text"
        placeholder="Text"
        onChange={(e) => dispatch(getText(e.target.value))}
        value={inputText}
      />
      <button type="submit" onClick={() => dispatch(makeTodo())}>
        Submit
      </button>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <p>{item.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
