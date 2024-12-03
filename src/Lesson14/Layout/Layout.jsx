import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const Layout = ({ categories, data }) => {
  return (
    <>
      <Nav categories={categories} />
      <Outlet data={data} />
    </>
  );
};

export default Layout;
