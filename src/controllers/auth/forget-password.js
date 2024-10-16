import { credentialsSyncedTemplated } from "../../utils/email-template";
import { sendEmail } from "../../utils/send-email";
import Users from "../../models/users";
import { generateTokenResponse } from "../../middlewares/auth";

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "email not found",
      });
    }
    let token = generateTokenResponse(user);
    const emailSend = await sendEmail(
      user.email,
      user.name,
      "Password Recovery",
      credentialsSyncedTemplated(user.name, token.token)
    );
    if (emailSend) {
      return res.status(200).json({
        success: true,
        message: "Please check your email!",
      });
    }
    return res.status(400).json({
      success: false,
      message: "something went wrong!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export default ForgetPassword;
