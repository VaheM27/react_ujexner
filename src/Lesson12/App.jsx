import { Route, Routes } from "react-router-dom";
import { Home, Courses, Features, Staff, About, NotFound } from "./pages";
import ROUTES from "./Routes";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes path={ROUTES.HOME}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTES.COURSES} element={<Courses />}></Route>
        <Route path={ROUTES.FEATURES} element={<Features />}></Route>
        <Route path={ROUTES.STAFF} element={<Staff />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.NOTFOUND} element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
