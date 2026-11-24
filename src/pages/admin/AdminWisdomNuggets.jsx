
import { useState, useEffect } from 'react';
import { apiRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { logout, getUser } from '../../services/auth';

function AdminWisdomNuggets() {
    const navigate = useNavigate();
    const user = getUser();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleBackToDashboard = () => {
        if (user.role === 'superadmin') {
            navigate('/superadmin/dashboard');
        } else {
            navigate('/admin/dashboard');
        }
    };

    const [nuggets, setNuggets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [content, setContent] = useState('');
    const [reference, setReference] = useState('');
    const [date, setDate] = useState('');
    const [success, setSuccess] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleCreateNugget = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        try {
            const data = await apiRequest('/wisdom-nuggets', {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    reference,
                }),
            });

            setSuccess(data.message || 'Wisdom Nugget created successfully.');

            setContent('');
            setReference('');
            setDate('');

            fetchNuggets();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEditNugget = (nugget) => {
        

        setEditingId(nugget._id);
        setContent(nugget.content);
        setReference(nugget.reference);
        setDate(
            nugget.date
                ? new Date(nugget.date).toISOString().slice(0, 10)
                : new Date(nugget.createdAt).toISOString().slice(0, 10)
        );
        setError('');
        setSuccess('');
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setContent('');
        setReference('');
        setDate('');    
        setError('');
        setSuccess('');
    };

    const handleUpdateNugget = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        try {
            const data = await apiRequest(`/wisdom-nuggets/${editingId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    content,
                    reference,
                    date,
                }),
            });

            setSuccess(data.message || 'Wisdom Nugget updated successfully.');

            setEditingId(null);
            setContent('');
            setReference('');
            setDate('');

            fetchNuggets();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteNugget = async (id) => {
        if (!window.confirm('Are you sure you want to delete this Wisdom Nugget?')) {
            return;
        }

        setError('');
        setSuccess('');

        try {
            const data = await apiRequest(`/wisdom-nuggets/${id}`, {
                method: 'DELETE',
            });

            setSuccess(data.message || 'Wisdom Nugget deleted successfully.');

            fetchNuggets();
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchNuggets = async () => {
    try {
        setLoading(true);
        setError('');

        const data = await apiRequest('/wisdom-nuggets');

        setNuggets(data.nuggets);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {
        fetchNuggets();
    }, []);
    
    if (loading) {
        return <p className="p-8">Loading Wisdom Nuggets...</p>;
    }

    if (error) {
        return <p className="p-8 text-red-600">Error: {error}</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-6">
                Manage Wisdom Nuggets
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

            <form onSubmit={editingId ? handleUpdateNugget : handleCreateNugget} className="bg-white p-6 rounded-lg shadow mb-8 space-y-4">

                <div>
                    <label className="block font-medium mb-2">
                        Wisdom Nugget
                    </label>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter Wisdom Nugget"
                        className="w-full border border-gray-300 rounded-lg p-3"
                        rows="4"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-2">
                        Reference
                    </label>

                    <input
                        type="text"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        placeholder="e.g. John 3:16"
                        className="w-full border border-gray-300 rounded-lg p-3"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-2">
                        Date
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                    {editingId ? 'Update Wisdom Nugget' : 'Add Wisdom Nugget'}
                </button>

                {editingId && (
                    <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
                    >
                        Cancel Editing
                    </button>
                )}

            </form>

            <div className="space-y-4">
                {nuggets.length === 0 ? (
                    <p>No Wisdom Nuggets available yet.</p>
                ) : (
                    nuggets.map((nugget) => (
                        <div
                            key={nugget._id}
                            className="bg-white p-5 rounded-lg shadow"
                        >
                            <p className="font-medium mb-2">
                                {nugget.content}
                            </p>

                            <p className="text-gray-500 text-sm">
                                {nugget.reference}
                            </p>

                            <p className="text-gray-400 text-sm mt-2">
                                {new Date(nugget.date || nugget.createdAt).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => handleEditNugget(nugget)}
                                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteNugget(nugget._id)}
                                className="mt-4 ml-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>

    );
}

export default AdminWisdomNuggets;