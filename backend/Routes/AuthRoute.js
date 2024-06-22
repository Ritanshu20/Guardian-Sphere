import express from 'express';
import {loginSecurity, loginStudent, loginAdmin, registerstudent } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/registerstudent', registerstudent);
router.post('/loginstudent', loginStudent);
router.post('/loginsecurity', loginSecurity);
router.post('/loginadmin', loginAdmin);

export default router;