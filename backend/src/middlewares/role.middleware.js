
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Check whether the user has the required role
        if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
            success: false,
            message: 'You do not have permission to perform this action.',
        });
        }

        next();
    };
};

export default authorizeRoles;
