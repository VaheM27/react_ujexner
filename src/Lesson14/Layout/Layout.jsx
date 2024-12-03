import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Layout = ({ categories, selectCategory }) => {
  return (
    <>
      <Nav categories={categories} selectCategory={selectCategory} />
      <Outlet />
    </>
  );
};

export default Layout;
