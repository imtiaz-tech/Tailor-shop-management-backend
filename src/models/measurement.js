import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer", required: true },
    measurementType: {
      type: String,
      enum: ["shirt", "pent", "coat", "waistcoat", "shairwani", "kurta", "trouser", "qameez", "shalwar", "pentcoat"],
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
      zip: { type: Boolean, default: true },
      shoulder: Number,
      collor: Number,
      front: Number,
      thai: Number,
      aasan: Number,
      pocket: Number,
      pocketfront: { type: Boolean, default: true },
      sidepocket: Number,
      dolla: Number,
      kaff: Number,
      armlength: Number,
      collornok: Number,
      banpati: Number,
      circlegaheera: { type: Boolean, default: true },
      squaregaheera: { type: Boolean, default: true },
      alti: Number,
      gaheera: Number,
    },
  },
  { timestamps: true }
);

schema.index({ customerId: 1, measurementType: 1 }, { unique: true });
const Measurement = mongoose.model("measurement", schema);

export default Measurement;
