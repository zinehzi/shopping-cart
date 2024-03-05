import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Outlet />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
