import { successResponse } from "../../utilities/responses.js";
import { create } from "./customers.service.js";

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

export { registerNewCustomer };
