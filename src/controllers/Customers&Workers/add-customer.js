import Customer from "../../models/customer";

const addCustomer = async (req, res) => {
  try {
    const { name, phoneNo, address } = req.body;
    const data = await Customer.create({ name, phoneNo, address });
    return res.status(200).json({
      data,
      success: true,
      message: "Customer Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addCustomer;
