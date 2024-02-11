import { successResponse } from "../../utilities/responses.js";
import { create, getCustomer, getCustomers, deleteCustomer } from "./customers.service.js";

const registerNewCustomer = async (req, res, next) => {
  try {
    const query = {};
    const update = req.body;
    const options = { upsert: true, new: true };
    // const query = { email: body.email };
    // const update = { $set: body };
    // const options = { upsert: true, new: true };

    const result = await create(query, update, options);

    if (!result) {
      throw new Error("Bad Request!");
    }

    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

const getOneCustomer = async (req, res, next) => {
  try {
    const query = req.query;

    const result = await getCustomer(query);

    if (!result) {
      throw new Error("Bad Request!");
    }

    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

const getAllCustomers = async (req, res, next) => {
  try {
    const query = req.query;

    const result = await getCustomers(query);

    if (!result) {
      throw new Error("Bad Request!");
    }

    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneCustomer = async (req, res, next) => {
  try {
    const query = req.query;

    const result = await deleteCustomer(query);

    if (!result) {
      throw new Error("Bad Request!");
    }

    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

export { registerNewCustomer, getOneCustomer, getAllCustomers, deleteOneCustomer };
