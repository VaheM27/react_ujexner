import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getFullState,
  getInputText,
  getTodoText,
  makeTodoUsers,
} from "./store/todoSlice/todoSlice";
import Box from "./components/Box/Box";

const App = () => {
  const dispatch = useDispatch();
  // const inputText = useSelector(getTodoText);
  // const data = useSelector(getData);
  // const data = useSelector(getFullState)
  // console.log(data)

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(makeTodoUsers(inputText));
        }}
      >
        <input
          type="text"
          onChange={(e) => dispatch(getInputText(e.target.value))}
          // value={inputText}
        />
        <button type="submit">Add</button>
      </form>
      {/* {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
      <Box />

      {/* <Cards>
        <Box />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, et?
        </h1>
        <p>Lorem, ipsum dolor.</p>
      </Cards>
      <Cards /> */}
      {/* <Cards name={"Poghos"} username={"Petros"} />
      <Box /> */}
    </div>
  );
};

export default App;
