import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { noteRoutes } from './note.routes';
import {patientRoutes } from './patient.routes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/patients', patientRoutes)
router.use('/notes', noteRoutes)

export default router;