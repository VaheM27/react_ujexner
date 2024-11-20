import Navbar from "./components/Navbar/Navbar";
import Car from "./components/Main/Cars/Cars";
import Clothes from "./components/Main/Clothes/Clothes";
import Food from "./components/Main/Food/Food";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Car/>
      <Clothes/>
      <Food/>
    </div>
  );
};
export default App;
