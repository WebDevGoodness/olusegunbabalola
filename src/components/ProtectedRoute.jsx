
import { Navigate, Outlet } from 'react-router-dom';
import { getToken, getUser } from '../services/auth';

function ProtectedRoute({ allowedRoles }) {
    const token = getToken();
    const user = getUser();

    if (!token || !user) {
        return <Navigate to="/admin/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        if (user.role === 'admin') {
        return <Navigate to="/admin/dashboard" replace />;
        }

        if (user.role === 'superadmin') {
        return <Navigate to="/superadmin/dashboard" replace />;
        }

        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;