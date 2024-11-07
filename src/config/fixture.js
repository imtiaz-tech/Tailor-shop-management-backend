import Users from "../models/users";

const fixture = async () => {
  const adminUser = await Users.findOne({ userType: "ADMIN" });
  if (!adminUser) {
    await Users.create({
      name: "superadmin",
      phoneNo: "03132300523",
      password: "123",
      userType: "ADMIN",
    });
  }
};

export default fixture;
