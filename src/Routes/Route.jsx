import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Petlisting from "../Pages/PetListing/PetListing/Petlisting";
import SignIn from "../Pages/Signin/SignIn";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../Layout/Dashboard";
import Addpet from "../Pages/Dashboard/Addpet";
import Myaddedpets from "../Pages/Dashboard/Myaddedpets/Myaddedpets";
import PrivateRoute from "./PrivateRoutes";

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
    ],
  },
]);
