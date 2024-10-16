import mongoose, { Schema } from "mongoose";
//table schema for category in database
//it has two fields name,status
const schema = new Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "order" },

  },
  { timestamps: true }
);

const Invoices = mongoose.model("invoices", schema);
export default Invoices;
