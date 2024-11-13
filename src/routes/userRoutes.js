import express from 'express';
import { getAllUsers, createUser, getSingleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(updateUser);

export default router;
