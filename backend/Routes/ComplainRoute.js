import express from 'express';
import { postComplain, getComplain, updateComplainStatus } from '../Controllers/ComplainController.js';

const router = express.Router();

// Route to post a new complain
router.post('/complains', postComplain);

// Route to get all complains
router.get('/complains', getComplain);

// Route to update complain status
router.patch('/complains/:id/update-status', updateComplainStatus);

export default router;
