import { List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import { MdPlaylistAddCircle } from "react-icons/md";

const AdminBar = () => {
  return (
    <div className={` pb-10 w-full max-w-[20rem]  `}>
      <div className="mb-2 p-2 rounded-full uppercase border-white border-2 text-center">
        <Typography variant="h5" color="white">
          Admin
        </Typography>
      </div>
      <List id="sidebar">
        <NavLink  to="/dashboard/addPet">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <MdPlaylistAddCircle className="text-2xl" /> Add a pet
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard/addedPets">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <MdPlaylistAddCircle className="text-2xl" /> My added pets
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard/adoptionRequest">
          <ListItem className="p-1">
            <ListItemPrefix>
              <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                <MdPlaylistAddCircle className="text-2xl" /> Adoption request
              </p>
            </ListItemPrefix>
          </ListItem>
        </NavLink>
    
      </List>
    </div>
  );
};

export default AdminBar;
