import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

router.route("/").post(login);

export default router;
