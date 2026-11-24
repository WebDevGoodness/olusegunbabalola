
import { useState, useEffect } from 'react';
import { apiRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';



function SuperAdminAdmins() {

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleBackToDashboard = () => {
        navigate('/superadmin/dashboard');
    };

    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [resettingAdminId, setResettingAdminId] = useState(null);

    const fetchAdmins = async () => {
        try {
            setLoading(true);
            setError('');

            const data = await apiRequest('/admins');

            setAdmins(data.admins);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

    const handleCreateAdmin = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        try {
            const data = await apiRequest('/admins', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            setSuccess(data.message);

            setUsername('');
            setPassword('');

            fetchAdmins();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleToggleAdminStatus = async (admin) => {
        setError('');
        setSuccess('');

        try {
            const data = await apiRequest(`/admins/${admin._id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({
                    isActive: !admin.isActive,
                }),
            });

            setSuccess(data.message);

            fetchAdmins();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleResetAdminPassword = async (admin) => {
        setError('');
        setSuccess('');

        if (!newPassword.trim()) {
            setError('Please enter a new password.');
            return;
        }

        try {
            const data = await apiRequest(`/admins/${admin._id}/password`, {
                method: 'PATCH',
                body: JSON.stringify({
                    newPassword,
                }),
            });

            setSuccess(data.message);

            setNewPassword('');
            setResettingAdminId(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-6">
                Manage Admins
            </h1>

            <div className="flex gap-3 mb-6">
                <button
                    onClick={handleBackToDashboard}
                    className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                >
                    Back to Dashboard
                </button>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                >
                    Logout
                </button>
            </div>

            {success && (
                <p className="text-green-600 mb-4">
                    {success}
                </p>
            )}

            {error && (
                <p className="text-red-600 mb-4">
                    {error}
                </p>
            )}

            <form
                onSubmit={handleCreateAdmin}
                className="bg-white p-6 rounded-lg shadow mb-8 space-y-4"
            >
                <h2 className="text-xl font-semibold">
                    Create New Admin
                </h2>

                <div>
                    <label className="block mb-2 font-medium">
                        Username
                    </label>

                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter admin username"
                        minLength={3}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        minLength={12}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                    Create Admin
                </button>
            </form>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                    Existing Admin Accounts
                </h2>
                {loading && (
                    <p className="text-gray-600">
                        Loading admin accounts...
                    </p>
                )}
                {!loading && admins.length === 0 && (
                    <p className="text-gray-600">
                        No secondary admin accounts have been created yet.
                    </p>
                )}

                {!loading && admins.length > 0 && (
                    admins.map((admin) => (
                        <div
                            key={admin._id}
                            className="bg-white p-5 rounded-lg shadow"
                        >
                            <p className="font-semibold">
                                {admin.username}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Status: {admin.isActive ? 'Active' : 'Inactive'}
                            </p>

                            <button
                                onClick={() => handleToggleAdminStatus(admin)}
                                className={`mt-4 px-4 py-2 rounded-lg text-white ${
                                    admin.isActive
                                        ? 'bg-red-600 hover:bg-red-700'
                                        : 'bg-green-600 hover:bg-green-700'
                                }`}
                            >
                                {admin.isActive ? 'Deactivate Admin' : 'Activate Admin'}
                            </button>

                            <button
                                onClick={() => {
                                    setResettingAdminId(admin._id);
                                    setNewPassword('');
                                    setError('');
                                    setSuccess('');
                                }}
                                className="mt-4 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Reset Password
                            </button>

                            {resettingAdminId === admin._id && (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleResetAdminPassword(admin);
                                    }}
                                    className="mt-4 space-y-3"
                                >
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        minLength={12}
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-3"
                                    />

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                    >
                                        Confirm Password Reset
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setResettingAdminId(null);
                                            setNewPassword('');
                                            setError('');
                                        }}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            )}

                            
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default SuperAdminAdmins;