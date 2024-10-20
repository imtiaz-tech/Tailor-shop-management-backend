import express from 'express';
import { addOrder,getOrders,getSingleOrder,getUsers,
    getWorkers,addCustomer,getCustomers,updateCustomerInfo,updateOrderStatus,getDashboardDetails,updateUserStatus} from '../controllers/Customers&Workers';

const router = express.Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.get("/get-single-order/:id", getSingleOrder);
router.post("/update-order-status/:id", updateOrderStatus);
router.get("/get-users", getUsers);
router.post("/update-user-status/:id", updateUserStatus);
router.post("/get-dashboard-details", getDashboardDetails);
router.get("/get-workers", getWorkers);
router.post("/add-customer", addCustomer);
router.get("/get-customers", getCustomers);
router.patch("/update-Customer-info/:id", updateCustomerInfo);


export default router;

