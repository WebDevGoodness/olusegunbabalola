
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-6">
                Admin Dashboard
            </h1>

            <button
                onClick={() => navigate('/admin/wisdom-nuggets')}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 mr-3"
            >
                Manage Wisdom Nuggets
            </button>

            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    );
}

export default AdminDashboard;