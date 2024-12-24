import {useEffect} from "react";

const App = () => {


    useEffect(() => {
        fetch('http://localhost:8080')
            .then((res) => res.json().then(json => console.log(json)))
    }, []);

    return (
        <div className="App">

        </div>
    )
}

export default App;