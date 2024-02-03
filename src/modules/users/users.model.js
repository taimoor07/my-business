import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = model("User", userSchema);
export { User };
