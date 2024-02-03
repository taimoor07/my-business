import { findOneAndUpdate } from "./users.service.js";
import { successResponse } from "../../utilities/responses.js";

const registerNewUser = async (req, res, next) => {
  try {
    const body = req.body;

    const query = { email: body.email };
    const update = { $set: body };
    const options = { upsert: true, new: true };

    const result = await findOneAndUpdate(query, update, options);

    if (!result) {
      throw new Error("Bad Request!");
    }

    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

export { registerNewUser };
