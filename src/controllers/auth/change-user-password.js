// import Users from "../../models/users";
//changeUserPassword api used for change user password in database it gets 3 parameters from frontend { password } in req.body 
//this api used in MyAccount component
//this api response is return change user password in  database
const changeUserPassword = async (req, res) => {
  try {
    const user = req.user;
    const { password } = req.body;
    user.password = password;
    const data = await user.save();
    return res.status(200).json({
      data,
      message: "Change Password Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeUserPassword;
