import express from "express";
import auth from "./auth";
import user from "./users";
import measurementOrders from "./measurement-orders";
import customerUsers from "./customer-users";
import { authenticateAuthToken } from "../middlewares/auth";

const router = express.Router();
router.use("/auth", auth);
router.use("/users", authenticateAuthToken, user);
router.use("/measurement-orders", authenticateAuthToken, measurementOrders);
router.use("/customer-users", authenticateAuthToken, customerUsers);
export default router;
