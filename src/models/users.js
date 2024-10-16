import mongoose, { mongo, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const schema = new Schema(
  {
    name: String,
    email: String,
    phoneNo: {
      type: String,
      index: true,
      unique: true,
    },
    address: String,
    password: String,
    userType: { type: String, default: "WORKER" },
  },
  { timestamps: true }
);

schema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(this.password, 10);
  return next();
});
schema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};
const Users = mongoose.model("users", schema);

export default Users;
