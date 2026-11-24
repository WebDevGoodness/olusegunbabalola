import { useState, useEffect } from 'react';
import { apiRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function SuperAdminContactMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const fetchMessages = async () => {
        try {
            setLoading(true);
            setError('');

            const data = await apiRequest('/contact');

            setMessages(data.messages);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await apiRequest(`/contact/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({ status }),
            });

            fetchMessages();
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDelete = async (id) => {
    const confirmed = window.confirm(
        'Are you sure you want to delete this contact message?'
    );

    if (!confirmed) return;

        try {
            await apiRequest(`/contact/${id}`, {
                method: 'DELETE',
            });

            fetchMessages();
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl font-bold mb-6">
                Contact Messages
            </h1>

            <button
                onClick={() => navigate('/superadmin/dashboard')}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 mb-6"
            >
                Back to Dashboard
            </button>

            {loading && <p>Loading messages...</p>}

            {error && (
                <p className="text-red-600">{error}</p>
            )}

            {!loading && !error && messages.length === 0 && (
                <p>No contact messages found.</p>
            )}

            {!loading && messages.length > 0 && (
                <div className="space-y-4">
                    <p className="font-semibold">
                        Total messages: {messages.length}
                    </p>

                    {messages.map((message) => (
                        <div
                            key={message._id}
                            className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                        >
                            <h2 className="font-bold text-lg">
                                {message.subject}
                            </h2>

                            <p><strong>Name:</strong> {message.name}</p>
                            <p><strong>Email:</strong> {message.email}</p>
                            <p><strong>Status:</strong> {message.status}</p>

                            <p className="text-sm text-gray-500">
                                <strong>Date:</strong>{' '}
                                {new Date(message.createdAt).toLocaleString()}
                            </p>

                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={() => handleStatusUpdate(message._id, 'read')}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Mark as Read
                                </button>

                                <button
                                    onClick={() => handleStatusUpdate(message._id, 'replied')}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Mark as Replied
                                </button>

                                <button
                                    onClick={() => handleDelete(message._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Delete Message
                                </button>
                            </div>

                            <p className="mt-3">
                                <strong>Message:</strong>
                            </p>

                            <p className="text-gray-700 whitespace-pre-wrap">
                                {message.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SuperAdminContactMessages;