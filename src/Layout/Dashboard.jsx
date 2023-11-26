import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";


const Dashboard = () => {
  return (
    <div>
      <NavBar></NavBar>
      
        <div className="flex bg-gray-200 lg:container mx-auto h-screen overflow-hidden">
          <div className="pt-16 z-10">
            <Sidebar></Sidebar>
          </div>

          <div className="pt-20 z-10">
            <Outlet></Outlet>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
