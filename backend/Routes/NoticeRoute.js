import express from 'express';
import { addNotice, getAllNotices } from '../Controllers/NoticeController.js';

const router = express.Router();

// Route to add a new notice
router.post('/notices', addNotice);

// Route to get all notices
router.get('/notices', getAllNotices);

export default router;
