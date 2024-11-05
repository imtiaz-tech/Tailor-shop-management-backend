import express from "express";

import {
  getOrders,
  getSingleCustomer,
  getSingleWorker,
  updateSingleCustomer,
  deleteSingleCustomer,
  addOrders,
  deleteSingleProduct,
  getSingleProduct,
  addMeasurement,
  getMeasurements,
  getOrdersBySearch,
  getSingleCustomerForEdit,
} from "../controllers/Measurement&Orders";

const router = express.Router();

router.get("/get-single-customer/:id?", getSingleCustomer);
router.get("/get-single-worker/:id?", getSingleWorker);
router.get("/get-orders-by-search/:id?", getOrdersBySearch);
router.get("/get-single-customer-for-edit/:id?", getSingleCustomerForEdit);

router.patch("/update-single-customer/:id", updateSingleCustomer);
router.delete("/delete-single-customer/:id", deleteSingleCustomer);
router.post("/add-order", addOrders);
router.post("/add-measurement", addMeasurement);
router.post("/get-measurements", getMeasurements);
router.get("/get-orders", getOrders);
router.delete("/delete-single-product/:id", deleteSingleProduct);
router.get("/get-single-product/:id", getSingleProduct);

export default router;
