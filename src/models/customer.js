import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: String,
    phoneNo: {
      type: String,
      index: true,
      unique: true,
    },
    address: String,
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", schema);
export default Customer;
