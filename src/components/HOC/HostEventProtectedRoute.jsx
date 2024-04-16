import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function HostEventProtectedRoute() {
  const user = useAuth();
  if (user.role === 'user') return <div>Sign in as admin to continue</div>;
  return <Outlet />;
}

export default HostEventProtectedRoute;
