import express from 'express';

import verifyToken from '../middlewares/auth.middleware.js';
import authorizeRoles from '../middlewares/role.middleware.js';

import createNugget from '../controllers/wisdomNuggets/createNugget.controller.js';
import getNuggets from '../controllers/wisdomNuggets/getNuggets.controller.js';
import getNugget from '../controllers/wisdomNuggets/getNugget.controller.js';
import updateNugget from '../controllers/wisdomNuggets/updateNugget.controller.js';
import deleteNugget from '../controllers/wisdomNuggets/deleteNugget.controller.js';

const router = express.Router();

// Public routes
router.get('/', getNuggets);
router.get('/:id', getNugget);

// Protected routes
router.post(
    '/',
    verifyToken,
    authorizeRoles('superadmin', 'admin'),
    createNugget
);

router.patch(
    '/:id',
    verifyToken,
    authorizeRoles('superadmin', 'admin'),
    updateNugget
);

router.delete(
    '/:id',
    verifyToken,
    authorizeRoles('superadmin', 'admin'),
    deleteNugget
);

export default router;