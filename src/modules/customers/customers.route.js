import express from "express";
const router = express.Router();
import { registerNewCustomer, getOneCustomer, getAllCustomers, deleteOneCustomer } from "../customers/customers.controller.js";

router.route("/register").post(registerNewCustomer);
router.route("/get-customer").get(getOneCustomer);
router.route("/get-customers").get(getAllCustomers);
router.route("/delete").delete(deleteOneCustomer);
// router.route("/update").put(updateNewCustomer);

export default router;
