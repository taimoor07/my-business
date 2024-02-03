import express from "express";
const router = express.Router();
import { registerNewCustomer } from "../customers/customers.controller.js";

router.route("/register").post(registerNewCustomer);

export default router;
