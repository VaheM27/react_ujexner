import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginRegister from "./components/loginAndReg/loginRegister"
import Profile from "./components/profile/profile";

import './App.css'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <LoginRegister />
                <Profile />
            </div>
        </Provider>
    );
}

export default App;