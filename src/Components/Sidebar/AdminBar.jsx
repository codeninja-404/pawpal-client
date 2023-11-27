import { List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { FaUsers } from "react-icons/fa6";
import { LiaCatSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const AdminBar = () => {
  return (
    <div className={` pb-10 w-full max-w-[20rem]  `}>
      <div className="mb-2 p-2 rounded-full uppercase border-white border-2 text-center">
        <Typography variant="h5" color="white">
          Admin
        </Typography>
      </div>
      <List id="sidebar">
        <NavLink  to="/dashboard/users">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <FaUsers className="text-2xl" /> Users
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard/allPets">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <LiaCatSolid className="text-2xl" /> All pets
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard/allDonations">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <GiReceiveMoney className="text-2xl" /> All donations
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
    
      </List>
    </div>
  );
};

export default AdminBar;
