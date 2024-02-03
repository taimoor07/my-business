import { User } from "./users.model.js";
// import { AttachWalletAttrs, UpdateAttachWalletAttrs } from "./users.types";
// import { findOneAndUpdateOptions } from "../../utilities/common_interfaces";

const findOneAndUpdate = (query, update, options) => {
  console.log("🚀 ~ findOneAndUpdate ~ query:", query);
  return User.findOneAndUpdate(query, update, options);
};
// const findOneAndUpdate = (
//   query: object,
//   update: object,
//   options: findOneAndUpdateOptions) => {
//     return User.findOneAndUpdate(query, update, options)
// }

export { findOneAndUpdate };
