
import User from '../../models/user.model.js';
import generateToken from '../../utils/generateToken.js';

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required',
        });
        }

        // Find administrator
        const user = await User.findOne({
        username: username.trim().toLowerCase(),
        }).select('+password');

        if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid username or password',
        });
        }

        // Check account status
        if (!user.isActive) {
        return res.status(403).json({
            success: false,
            message: 'Your account has been deactivated',
        });
        }

        // Verify password
        const isPasswordCorrect = await user.isPasswordCorrect(password);

        if (!isPasswordCorrect) {
        return res.status(401).json({
            success: false,
            message: 'Invalid username or password',
        });
        }

        // Generate JWT
        const token = generateToken(user);
        

        return res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        user: {
            id: user._id,
            username: user.username,
            role: user.role,
        },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Login failed',
            error: error.message,
            });
        }
};

export default loginUser;
