import express from "express";

import {
  getOrders,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
  addOrders,
  deleteSingleProduct,
  getSingleProduct,
  addMeasurement,
  getMeasurements,
  getSingleCustomerForEdit,
  getSingleWorkerForEdit,
  updateSingleWorker,
} from "../controllers/Measurement&Orders";

const router = express.Router();

router.get("/get-single-customer/:id?", getSingleCustomer);
router.get("/get-single-customer-for-edit/:id?", getSingleCustomerForEdit);
router.get("/get-single-worker-for-edit/:id?", getSingleWorkerForEdit);
router.patch("/update-single-worker/:id", updateSingleWorker);
router.patch("/update-single-customer/:id", updateSingleCustomer);
router.delete("/delete-single-customer/:id", deleteSingleCustomer);
router.post("/add-order", addOrders);
router.post("/add-measurement", addMeasurement);
router.post("/get-measurements", getMeasurements);
router.get("/get-orders", getOrders);
router.delete("/delete-single-product/:id", deleteSingleProduct);
router.get("/get-single-product/:id", getSingleProduct);

export default router;
