import express from "express";
import customersRoutes from "../modules/customers/customers.route.js";

const router = express.Router();
const mainResource = "/api";

router.use(`${mainResource}/customers`, customersRoutes);

export default router;
