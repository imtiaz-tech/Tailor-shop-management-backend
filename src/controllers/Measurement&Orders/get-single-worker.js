import Users from "../../models/users";
const getSingleWorker = async (req, res) => {
  try {
    const { search } = req.query;
    const data = await Users.findOne({ phoneNo: search });
    return res.status(200).json({
      data,
      success: true,
      message: "Get worker Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleWorker;
