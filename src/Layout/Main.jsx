import { Outlet } from "react-router-dom";

import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <NavBar></NavBar>
     
        <div className="pt-20 z-10">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      
    </div>
  );
};

export default Main;
