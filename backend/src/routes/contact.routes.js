import express from 'express';

import verifyToken from '../middlewares/auth.middleware.js';
import authorizeRoles from '../middlewares/role.middleware.js';

import createContactMessage from '../controllers/contact/createContactMessage.controller.js';
import getContactMessages from '../controllers/contact/getContactMessages.controller.js';
import updateContactMessageStatus from '../controllers/contact/updateContactMessageStatus.controller.js';
import deleteContactMessage from '../controllers/contact/deleteContactMessage.controller.js';

const router = express.Router();

// Public contact form submission
router.post('/', createContactMessage);

// Superadmin-only message retrieval
router.get(
    '/',
    verifyToken,
    authorizeRoles('superadmin'),
    getContactMessages
);

// Superadmin-only message status update
router.patch(
    '/:id/status',
    verifyToken,
    authorizeRoles('superadmin'),
    updateContactMessageStatus
);

// Superadmin-only message deletion
router.delete(
    '/:id',
    verifyToken,
    authorizeRoles('superadmin'),
    deleteContactMessage
);

export default router;