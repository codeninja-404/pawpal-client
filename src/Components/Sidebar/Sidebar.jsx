import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { MdPlaylistAddCircle } from "react-icons/md";
import { CgPlayListCheck } from "react-icons/cg";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { MdCampaign } from "react-icons/md";
import { SiCampaignmonitor } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import AdminBar from "./AdminBar";
import useAdmin from "../../Hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  
  return (
    <div className=" bg-blue-gray-300  p-4 lg:my-5 text-white">
      {isAdmin ? (
        <>
          <AdminBar></AdminBar>
        </>
      ) : (
        <></>
      )}
      <div className={` h-screen w-full max-w-[20rem]  `}>
        <div className="mb-2 p-2 rounded-full uppercase border-white border-2 text-center">
          <Typography variant="h5" color="white">
            User
          </Typography>
        </div>
        <List id="sidebar">
          <NavLink to="/dashboard/addPet">
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
                  <CgPlayListCheck className="text-2xl" /> My added pets
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/adoptionRequest">
            <ListItem className="p-1">
              <ListItemPrefix>
                <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                  <VscGitPullRequestNewChanges className="text-2xl" /> Adoption request
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/createDonation">
            <ListItem className="p-1">
              <ListItemPrefix>
                <p className="text-black text-xs font-bold uppercase flex gap-2 items-center">
                  <MdCampaign className="text-2xl" /> Create donation
                  campaign
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/myDonationCampaigns">
            <ListItem className="p-1">
              <ListItemPrefix>
                <p className="text-black text-xs font-bold uppercase flex gap-2 items-center">
                  <SiCampaignmonitor className="text-2xl" />
                  My donation campaign
                </p>
              </ListItemPrefix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/myDonation">
            <ListItem className="p-1">
              <ListItemPrefix>
                <p className="text-black text-sm font-bold uppercase flex gap-2 items-center">
                  <GiPayMoney className="text-2xl" /> My donation
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
