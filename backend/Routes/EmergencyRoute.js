import express from 'express';
import { emergencyRequest, getAllEmergency } from '../Controllers/EmergencyController.js';

const router = express.Router();

// Route to add a new emergency request
router.post('/emergencies', emergencyRequest);

// Route to get all emergency requests
router.get('/emergencies', getAllEmergency);

export default router;
