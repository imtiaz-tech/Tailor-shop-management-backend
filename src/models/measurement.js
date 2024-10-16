import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer", required: true },
    measurementType: {
      type: String,
      enum: ["shirt", "pent", "coat", "waistcoat", "shairwani", "kurta", "pajama", "sot", "shalwar", "pentcoat"],
      required: true,
    },
    measurement: {
      chest: Number,
      tera: Number,
      ban: Number,
      banReady: Number,
      hip: Number,
      waist: Number,
      belly: Number,
      bottom: Number,
      knee: Number,
      length: Number,
      cross: Number,
      half: Number,
      zip: Number,
      shoulder: Number,
      collor: Number,
      front: Number,
      thai: Number,
      aasan: Number,
      pocket: Number,
      pocketfront: Number,
      sidepocket: Number,
      dolla: Number,
      kaff: Number,
      armlength: Number,
      collornok: Number,
      banpati: Number,
      circlegaheera: Number,
      squaregaheera: Number,
      alti: Number,
    },
  },
  { timestamps: true }
);

schema.index({ customerId: 1, measurementType: 1 }, { unique: true });
const Measurement = mongoose.model("measurement", schema);

export default Measurement;
