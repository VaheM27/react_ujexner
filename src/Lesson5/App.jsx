import Navbar from "../components/Navbar/Navbar";
import CardSection from "../components/CardSection/CardSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardSection />
      <ServiceSection />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
