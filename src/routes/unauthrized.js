import express from "express";
import { getCategories,getProducts,getSingleProduct,getProductsByCategory } from "../controllers/unauthrized";


const router = express.Router();

router.get("/get-categories", getCategories);
router.get("/get-products", getProducts);
router.get("/get-single-product/:id", getSingleProduct);
router.get("/get-products-by-category/:categoryId", getProductsByCategory);



export default router;

