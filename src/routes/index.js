import express from "express";
import usersRoutes from "../modules/users/users.route.js";
import customersRoutes from "../modules/customers/customers.route.js";

const router = express.Router();
const mainResource = "/api";

router.use(`${mainResource}/users`, usersRoutes);
router.use(`${mainResource}/customers`, customersRoutes);

export default router;
