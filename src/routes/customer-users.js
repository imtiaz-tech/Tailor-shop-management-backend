import express from "express";
import {
  getSingleOrder,
  getWorkers,
  addCustomer,
  getCustomers,
  updateCustomerInfo,
  updateOrderStatus,
  getDashboardDetails,
  getPreAsignedUrl,
  changeWorker,
} from "../controllers/Customers&Workers";

const router = express.Router();

router.get("/get-single-order/:id", getSingleOrder);
router.post("/update-order-status/:id", updateOrderStatus);
router.post("/change-worker/:id", changeWorker);
router.post("/get-dashboard-details", getDashboardDetails);
router.get("/get-workers", getWorkers);
router.post("/add-customer", addCustomer);
router.get("/get-customers", getCustomers);
router.patch("/update-customer-info/:id", updateCustomerInfo);
router.post("/get-pre-asigned-url", getPreAsignedUrl);

export default router;
