import React, { useReducer } from "react";
import initialState from "./initialState/initialState";
import reducer from "./reducer/reducer"
import Actions from "./actions/actions";
import Output from "./output/output";

import './App.css'

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <Actions dispatch={dispatch} />
            <Output state={state} />
        </div>
    );
}

export default App