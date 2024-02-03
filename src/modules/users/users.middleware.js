import Joi, { ValidationResult } from "joi";
import { findOneAndUpdate } from "./users.service.js";
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../../utilities/responses.js";
import { successResponse } from "../../utilities/responses.js";

//  req:Request, 
//   res:Response, 
//   next:NextFunction

const validateAddUserWalletParams = (req, res, next) => {
console.log("🚀 ~ validateAddUserWalletParams ~ req:", req)
const schema = Joi.object({
  walletAddress: Joi.string().required(),
  userName: Joi.string()
});

const { error } = schema.validate(req.body);
if (error) {
  return errorResponse(res, 400, error.details[0].message.replace(/['"]+/g, ""));
}
  return next();
};

const updateUser = async (req, res, next) => {
    console.log("🚀 ~ updateUser ~ req:", req)
    try {
      const { walletAddress, nftTemplateUrl } = req.body;
      const query = { walletAddress };
      const update = { 
        isClaimed: true,
        nftTemplateUrl: nftTemplateUrl
      };
      const options = { upsert: true, new: true };
  
      const result = await findOneAndUpdate(query, update, options);
  
      if (!result) {
        throw new Error("Bad Request!")
      }
      successResponse(res, 200, result);
    } catch (error) {
      next(error);
    }
};

export {
    updateUser,
    validateAddUserWalletParams
};
