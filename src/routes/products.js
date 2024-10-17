import express from "express";

import {
  addCustomer,
  // getWorkers,
  getCustomers,
  getOrders,
  getSingleCustomer,
  updateSingleCategory,
  deleteSingleCategory,
  addOrders,
  deleteSingleProduct,
  getSingleProduct,
  updateCustomerInfo,
  addMeasurement,
  getMeasurements,
} from "../controllers/products";

const router = express.Router();

router.post("/add-customer", addCustomer);
// router.get("/get-workers", getWorkers);
router.get("/get-customers", getCustomers);
router.get("/get-single-customer/:id?", getSingleCustomer);
router.patch("/update-single-category/:id", updateSingleCategory);
router.delete("/delete-single-category/:id", deleteSingleCategory);
router.post("/add-order", addOrders);
router.post("/add-measurement", addMeasurement);
router.post("/get-measurements", getMeasurements);
router.get("/get-orders", getOrders);
router.delete("/delete-single-product/:id", deleteSingleProduct);
router.get("/get-single-product/:id", getSingleProduct);
router.patch("/update-Customer-info/:id", updateCustomerInfo);

export default router;
