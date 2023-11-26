import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Sidebar from "./Sidebar";

export function DrawerDefault() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="md:hidden  absolute ">
      <Button className="sticky p-2 bg-transparent text-black border-black border-2 m-2 text-2xl" onClick={openDrawer}>
        <RiMenuUnfoldFill />
      </Button>
      <Drawer open={open} onClose={closeDrawer} className=" mt-16 overflow-auto ">
        <div className="mb-6  flex-row items-center justify-between">
          <div className="flex   bg-blue-gray-300 justify-between items-center">
            <h1 className="text-2xl font-bold uppercase px-2 text-gray-200">Dashboard</h1>
            <IconButton className="sticky p-2 bg-transparent text-white border-white border-2 m-2 text-2xl" variant="text" color="black" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Sidebar></Sidebar>
        </div>
      </Drawer>
    </div>
  );
}
