import Customer from "../../models/customer";

const deleteSingleCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      data,
      message: "Deleted Customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default deleteSingleCustomer;
