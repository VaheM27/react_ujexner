import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import LogIn from "./pages/logIn/logIn";
import Reg from "./pages/reg/Reg";
import Info from "./pages/Info/Info";

import './App.css';

const App = () => {
    const [userInfo, setUserInfo] = useState(null);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LogIn setUserInfo={setUserInfo} />} />
                <Route path="/register" element={<Reg />} />
                <Route path="/info" element={<Info userInfo={userInfo} />} />
                <Route path="/" element={<LogIn setUserInfo={setUserInfo} />} />
            </Routes>
        </div>
    );
};

export default App;
