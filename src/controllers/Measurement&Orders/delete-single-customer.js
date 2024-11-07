import Customer from "../../models/customer";

const deleteSingleCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🚀 ~ deleteSingleCategory ~ id:", id);
    const data = await Customer.findByIdAndDelete({ _id: id });
    console.log("🚀 ~ deleteSingleCategory ~ data:", data);
    return res.status(200).json({
      data,
      message: "Deleted Customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default deleteSingleCustomer;
