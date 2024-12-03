import React from "react";
import { Users, Todos, Posts, Albums, Comments } from "./pages";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/Todos" element={<Todos />} />
                <Route path="/Posts" element={<Posts />} />
                <Route path="/Albums" element={<Albums />} />
                <Route path="/Comments" element={<Comments />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App