import Customer from "../../models/customer";

const updateCustomerInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNo, address } = req.body;
    const data = await Customer.updateOne({ _id: id }, { name, phoneNo, address });
    return res.status(200).json({
      data,
      message: "Update Customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateCustomerInfo;
