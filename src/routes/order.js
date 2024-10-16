import express from 'express';
import { addOrder,getOrders,getSingleOrder,getUsers,updateOrderStatus,getDashboardDetails,updateUserStatus} from '../controllers/orders';

const router = express.Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.get("/get-single-order/:id", getSingleOrder);
router.post("/update-order-status/:id", updateOrderStatus);
router.get("/get-users", getUsers);
router.post("/update-user-status/:id", updateUserStatus);
router.post("/get-dashboard-details", getDashboardDetails);


export default router;

