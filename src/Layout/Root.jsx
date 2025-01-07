import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Root = () => {
  return (
    <div>
        <div className="">
          <Navbar></Navbar>
        </div>
      <div className="min-h-[calc(100vh-272px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
