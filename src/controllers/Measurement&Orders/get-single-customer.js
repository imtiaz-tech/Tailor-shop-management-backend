import Customer from "../../models/customer";

const getSingleCustomer = async (req, res) => {
  try {
    const { search } = req.query;

    const data = await Customer.findOne({
      $or: [{ phoneNo: { $regex: search, $options: "i" } }, { name: { $regex: search, $options: "i" } }],
    });
    return res.status(200).json({
      data,
      success: true,
      message: "Get customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleCustomer;
