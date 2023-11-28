import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Petlisting from "../Pages/PetListing/PetListing/Petlisting";
import SignIn from "../Pages/Signin/SignIn";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../Layout/Dashboard";
import Addpet from "../Pages/Dashboard/User/Addpets/Addpet";
import Myaddedpets from "../Pages/Dashboard/User/Myaddedpets/Myaddedpets";
import PrivateRoute from "./PrivateRoutes";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import Allpets from "../Pages/Dashboard/Admin/Allpets/Allpets";
import Alldonations from "../Pages/Dashboard/Admin/AllDonation/Alldonations";
import AdminRoute from "./AdminRoute";
import UpdatePet from "../Pages/Dashboard/User/UpdatePet/UpdatePet";
import CreateDonationCampaign from "../Pages/Dashboard/User/CreateDonationCampaign/CreateDonationCampaign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petListing",
        element: <Petlisting></Petlisting>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // User routes
      {
        path: "/dashboard/addPet",
        element: <Addpet></Addpet>,
      },
      {
        path: "/dashboard/addedPets",
        element: <Myaddedpets></Myaddedpets>,
      },
      {
        path: "/dashboard/updatePet/:id",
        element: <UpdatePet></UpdatePet>,
      },
      {
        path: "/dashboard/createDonation",
        element: <CreateDonationCampaign></CreateDonationCampaign>,
      },
      // admin routes
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allPets",
        element: (
          <AdminRoute>
            <Allpets></Allpets>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDonations",
        element: (
          <AdminRoute>
            <Alldonations></Alldonations>
          </AdminRoute>
        ),
      },
    ],
  },
]);
