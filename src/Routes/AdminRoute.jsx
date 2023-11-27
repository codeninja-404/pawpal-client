import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Loader from "../Components/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <>
        <Loader></Loader>
      </>
    );
  }
  if (!loading && isAdmin) {
    return children;
  }
  if (user) {
    return <Navigate to="/dashboard"></Navigate>;
  }
  return <Navigate to="/signin" state={{ from: location }} ></Navigate>;
};

export default AdminRoute;
