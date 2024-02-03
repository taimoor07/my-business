import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const CustomerSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exist"],
  },
  cell: {
    type: String,
  },
});
CustomerSchema.plugin(uniqueValidator);

const Customer = model("Customer", CustomerSchema);

export { Customer };
