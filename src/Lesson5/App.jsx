import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CardSection from "./components/CardSection/CardSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardSection />
      <ServiceSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

