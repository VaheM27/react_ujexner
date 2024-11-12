import Nav from "./components/Nav/Nav";
import Reputation from "./components/Reputation/Reputation";
import Service from "./components/Service/Service";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div>
      <Nav />
      <Reputation />
      <Service />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
