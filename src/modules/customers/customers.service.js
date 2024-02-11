import { Customer } from "./customers.model.js";

const create = (query, body, options) => {
  return Customer.create(body);
};

const getCustomer = (query) => {
  return Customer.findOne(query);
};

const getCustomers = (query) => {
  return Customer.find(query);
};

const deleteCustomer = (query) => {
  return Customer.deleteOne(query);
};

export { create, getCustomer, getCustomers, deleteCustomer };
