import express from "express";

import {
  getOrders,
  getSingleCustomer,
  updateSingleCategory,
  deleteSingleCategory,
  addOrders,
  deleteSingleProduct,
  getSingleProduct,
  addMeasurement,
  getMeasurements,
} from "../controllers/Measurement&Orders";

const router = express.Router();

router.get("/get-single-customer/:id?", getSingleCustomer);
router.patch("/update-single-category/:id", updateSingleCategory);
router.delete("/delete-single-category/:id", deleteSingleCategory);
router.post("/add-order", addOrders);
router.post("/add-measurement", addMeasurement);
router.post("/get-measurements", getMeasurements);
router.get("/get-orders", getOrders);
router.delete("/delete-single-product/:id", deleteSingleProduct);
router.get("/get-single-product/:id", getSingleProduct);

export default router;
