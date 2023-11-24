import { Outlet } from "react-router-dom";

import NavBar from "../Components/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="pt-20 z-10">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
