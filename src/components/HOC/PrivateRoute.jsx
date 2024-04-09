import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function PrivateRoute() {
  const user = useAuth();
  if (!user.token) return <Navigate to="/user/signin" />;
  return <Outlet />;
}

export default PrivateRoute;
