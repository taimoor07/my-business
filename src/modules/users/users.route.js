import express from 'express';
import { registerNewUser } from './users.controller.js';
const router = express.Router();

router.route('/register').post(registerNewUser);

export default router;
