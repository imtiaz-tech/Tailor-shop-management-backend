import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    orderNumber: {
      type: String,
      default: () => new Date().getTime(),
    },
    price: Number,
    otherPhoneNo: String,
    deliveryDate: Date,
    extraCharges: [
      {
        name: String,
        price: Number,
      },
    ],
    orderItems: [
      {
        measurementId: { type: mongoose.Schema.Types.ObjectId, ref: "measurement" },
        imageUrl: String,
      },
    ],
    status: {
      type: String,
      enum: ["Pending", "Progress", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", schema);
export default Order;
