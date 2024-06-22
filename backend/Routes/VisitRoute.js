import express from 'express';
import { addEntry, addExit } from '../Controllers/VisitController.js';

const router = express.Router();

// Route to add a new entry
router.post('/entries', addEntry);

// Route to add a new exit
router.post('/exits', addExit);

export default router;