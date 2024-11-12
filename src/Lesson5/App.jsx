import Nav from "./components/Nav/Nav";
import { ReputationMain } from "./components/Reputation";
import { ServicesMain } from "./components/Services";
import Wecando from "./components/Wecando/Wecando";
import Footer from "./components/Footer/Footer";

import Logo from "./assets/logos/logo.png";

import "./App.scss";

function App() {
  return (
    <>
      <Nav source={Logo} />
      <ReputationMain />
      <ServicesMain />
      <Wecando />
      <Footer />
    </>
  );
}

export default App;
