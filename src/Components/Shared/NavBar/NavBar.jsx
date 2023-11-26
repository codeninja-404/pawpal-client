import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { ProfileMenu } from "./ProfileMenu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 nav-items mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to="/">HOME</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to="/petListing">PET LISTING</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to="/">DONATION CAMPAIGNS</NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full fixed z-40  shadow-md">
      <div className=" max-h-[768px] lg:container  mx-auto  ">
        <Navbar className="  shadow-none  h-max  rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img className="cursor-pointer w-44   " src={logo} />

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Link to="/signin" className={`${user ? "hidden" : ""}`}>
                  <Button size="sm" className="hidden lg:inline-block">
                    <span>sign in</span>
                  </Button>
                </Link>

                <div className="hidden lg:inline-block">
                  <ProfileMenu></ProfileMenu>
                </div>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
              <div className="lg:hidden">
                <ProfileMenu></ProfileMenu>
              </div>
            </div>
          </div>
          <div className="z-40">
            <Collapse open={openNav}>
              {navList}
              <div className="flex items-center gap-x-1">
                <Link to="/signin"  className={`${user ? "hidden" : ""}`}>
                  <Button size="sm">
                    <span>sign in</span>{" "}
                  </Button>
                </Link>
              </div>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
