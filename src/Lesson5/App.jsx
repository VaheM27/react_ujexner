import Nav from "./components/Nav/Nav";
import SectionTop from "./components/SectionTop/SectionTop";
import SectionMiddle from "./components/SectionMiddle/SectionMiddle";
import SectionBottom from "./components/SectionBottom/SectionBottom";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <SectionTop />
      <SectionMiddle />
      <SectionBottom />
      <Footer />
    </div>
  );
}

export default App;
