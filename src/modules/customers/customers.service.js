import { Customer } from "./customers.model.js";

const create = (query, body, options) => {
  return Customer.create(body);
};

export { create };