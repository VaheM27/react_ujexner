import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"

import "./App.css";

function App() {
    const [path, setPath] = useState("");
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch(`https://dummyjson.com/${path}`)
        .then((res) => res.json())
        .then((data) => setData(data[path]))
    }, [path])

    return (
        <div className="App">
            <Navbar setPath={setPath} />
            <Main data={data} />
        </div>
    );
}

export default App;
