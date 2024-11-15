import Navbar from "./components/Navbar/Navbar";
import Reputation from "./components/Reputation/Reputation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
    return (
        <div className="box">
            <Navbar/>
            <Reputation/>
            <Main/>
            <Footer/>
        </div>
    )
};

export default App;

