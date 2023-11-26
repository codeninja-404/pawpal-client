import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
} from "@material-tailwind/react";
import { MdPlaylistAddCircle } from "react-icons/md";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState("hidden");
  const handleDashboard = () => {
    if (!open) {
      setOpen("hidden");
    } else {
      setOpen("");
    }
  };
  console.log(open);

  return (
    <div className="bg-deep-orange-200 p-4 text-white">
      <Button className="md:hidden" onClick={handleDashboard}>
        {open ? "Open" : "Close"}
      </Button>
      <div className={`${open} md:block h-screen w-full max-w-[20rem]  `}>
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white">
            User Dashboard
          </Typography>
        </div>
        <List id="sidebar">
          <NavLink to="/dashboard/addPet">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 items-center">
                  <MdPlaylistAddCircle className="text-2xl" /> Add a pet
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/addedPets">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 items-center">
                  <MdPlaylistAddCircle className="text-2xl" /> My added pets
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/adoptionRequest">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 items-center">
                  <MdPlaylistAddCircle className="text-2xl" /> Adoption request
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/createDonation">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 text-sm items-center">
                  <MdPlaylistAddCircle className="text-2xl" /> Create donation campaign
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/myDoCa">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 items-center">
                  <MdPlaylistAddCircle className="text-2xl" />My donation campaign
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/myDonation">
            <ListItem>
              <ListItemPrefix>
                <p className="text-black uppercase flex gap-2 items-center">
                  <MdPlaylistAddCircle className="text-2xl" /> My donation
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
         
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
