
import express from 'express';

import verifyToken from '../middlewares/auth.middleware.js';
import authorizeRoles from '../middlewares/role.middleware.js';

import createAdmin from '../controllers/admin/createAdmin.controller.js';
import getAdmins from '../controllers/admin/getAdmins.controller.js';
import getAdmin from '../controllers/admin/getAdmin.controller.js';
import updateAdmin from '../controllers/admin/updateAdmin.controller.js';
import updateAdminStatus from '../controllers/admin/updateAdminStatus.controller.js';
import resetAdminPassword from '../controllers/admin/resetAdminPassword.controller.js';

const router = express.Router();

// Create a secondary administrator
router.post(
    '/',
    verifyToken,
    authorizeRoles('superadmin'),
    createAdmin
);

router.get(
    '/',
    verifyToken,
    authorizeRoles('superadmin'),
    getAdmins
);

router.get(
    '/:id',
    verifyToken,
    authorizeRoles('superadmin'),
    getAdmin
);

router.patch(
    '/:id',
    verifyToken,
    authorizeRoles('superadmin'),
    updateAdmin
);

router.patch(
    '/:id/status',
    verifyToken,
    authorizeRoles('superadmin'),
    updateAdminStatus
);

router.patch(
    '/:id/password',
    verifyToken,
    authorizeRoles('superadmin'),
    resetAdminPassword
);

export default router;
