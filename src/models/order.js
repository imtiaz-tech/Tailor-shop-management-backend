import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
    measurementId: { type: mongoose.Schema.Types.ObjectId, ref: "measurement" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    deliveryDate: String,
    image: String,
    additionalCharges: Number,
    name: String,
    price: Number,
    phoneNo:Number,
    address: String,
    otherPhoneNo:Number,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", schema);
export default Order;
