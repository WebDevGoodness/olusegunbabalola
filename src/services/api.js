
import { getToken } from './auth';

const API = process.env.REACT_APP_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
    const token = getToken();

    const response = await fetch(`${API}${endpoint}`, {
        ...options,
        headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(token && {
            Authorization: `Bearer ${token}`,
        }),
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
};

export default API;