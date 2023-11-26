import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { DrawerDefault } from "../Components/Sidebar/Drawer";

const Dashboard = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="flex  lg:container mx-auto h-screen ">
        <div className="pt-16 z-10">
          <div className="hidden md:block">
            <Sidebar></Sidebar>
          </div>

          <DrawerDefault></DrawerDefault>
        </div>

        <div className="pt-20 z-60">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
