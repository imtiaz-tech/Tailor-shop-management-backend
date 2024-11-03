import Customer from "../../models/customer";

const getSingleCustomerForEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findById(id);
    return res.status(200).json({
      data,
      success: true,
      message: "Get customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleCustomerForEdit;
