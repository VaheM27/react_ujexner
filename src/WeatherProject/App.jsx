import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "../WeatherProject/App.scss";

const App = () => {
  return (
    <div className="App-div">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
