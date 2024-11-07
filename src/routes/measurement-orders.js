import express from "express";

import {
  getOrders,
  getSingleCustomer,
  deleteSingleCustomer,
  addOrder,
  deleteSingleOrder,
  addMeasurement,
  getMeasurements,
  getSingleCustomerForEdit,
  getSingleWorkerForEdit,
  updateSingleWorker,
  deleteSingleWorker,
  updateSingleOrder,
} from "../controllers/Measurement&Orders";

const router = express.Router();

router.get("/get-single-customer/:id?", getSingleCustomer);
router.get("/get-single-customer-for-edit/:id?", getSingleCustomerForEdit);
router.get("/get-single-worker-for-edit/:id?", getSingleWorkerForEdit);
router.patch("/update-single-worker/:id", updateSingleWorker);
router.delete("/delete-single-customer/:id", deleteSingleCustomer);
router.delete("/delete-single-worker/:id", deleteSingleWorker);
router.patch("/update-single-order/:id", updateSingleOrder);

router.post("/add-order", addOrder);
router.post("/add-measurement", addMeasurement);
router.post("/get-measurements", getMeasurements);
router.get("/get-orders", getOrders);
router.delete("/delete-single-order/:id", deleteSingleOrder);

export default router;
