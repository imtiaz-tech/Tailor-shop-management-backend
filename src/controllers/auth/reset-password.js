// import Users from "../../models/users";

export const ResetPassword = async (req, res) => {
  try {
    const { email } = req.user;
    const { password } = req.body;

    const data = await Users.updateOne({ email }, { password: password });
    
    return res.status(200).json({
      data,
      success: true,
      message: "password updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export default ResetPassword;
