
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';
import { logout } from '../../services/auth';

function AdminLogin() {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
            });

            const data = await response.json();

            if (!response.ok) {
            throw new Error(data.message || 'Login failed');
            }

            // Save authentication details
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(data.user));

            // Redirect based on user role
            if (data.user.role === 'superadmin') {
                navigate('/superadmin/dashboard');
            } else if (data.user.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                logout();
                throw new Error('Unauthorized user role');
            }

        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

            <h1 className="text-2xl font-bold text-center mb-2">
            Admin Login
            </h1>

            <p className="text-gray-500 text-center mb-8">
            Sign in to access your dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-5">

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Username
                    </label>

                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Password
                    </label>

                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>

                {error && (
        <p className="text-red-600 text-sm text-center">
            {error}
        </p>
        )}

        <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
            {loading ? 'Logging in...' : 'Login'}
        </button>

            </form>

        </div>
        </div>
    );
}

export default AdminLogin;
