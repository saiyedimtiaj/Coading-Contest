/* eslint-disable react/prop-types */
import { FadeLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useRole();

  if (loading || isPending) {
    return (
      <div className="min-h-[calc(100vh-90px)] flex items-center justify-center">
        <FadeLoader height={30} width={5} color="#36d7b7" />
      </div>
    );
  }
  if(user && isAdmin.role === 'admin'){
    return children
  }
  return <Navigate to='/login' state={location.pathname} replace />
};

export default AdminRoutes;
