import express from 'express';
import auth from './auth';
import user from './users';
import measurement_orders from './measurement_orders';
import unauthrized from './unauthrized';
import customer_users from './customer_users'
import { authenticateAuthToken } from '../middlewares/auth';


const router = express.Router();
router.use('/auth', auth);
router.use('/users', authenticateAuthToken, user);
router.use('/measurement_orders', authenticateAuthToken, measurement_orders);
router.use('/unauthrized', unauthrized);
router.use('/customer_users',authenticateAuthToken,customer_users)
export default router;
