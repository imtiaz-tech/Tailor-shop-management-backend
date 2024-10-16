import Users from "../../models/users";
import { generateTokenResponse } from "../../middlewares/auth";
//SignUp api used for add user to database it gets 3 parameters from frontend {name,email,password} in req.body
//this api used in Register component for signup
//this api response is return add user in  database
const SignUp = async (req, res) => {
  try {
    const { name,password,phoneNo,address } = req.body;
    if (!name  || !password)
      return res.status(400).json({
        success: false,
        message: "name, password required",
      });

    let user = await Users.findOne({ phoneNo });
    if (user) {
      return res.status(400).json({ success: false, message: "phoneNo already exist" });
    }

    const result = await Users.create({
      name,
      phoneNo,
      password,
      address,
    });
    const token = generateTokenResponse(result);
    return res.status(200).json({
      data: { token, user: result },
      success: true,
      message: "Signup successful!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export default SignUp;
