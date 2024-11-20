import Customer from "../../models/customer";

const addCustomer = async (req, res) => {
  try {
    const { name, phoneNo, address } = req.body;
    let data = await Customer.findOne({ phoneNo });
    if (data) {
      return res.status(400).json({ success: false, message: "PhoneNo already exist" });
    } else {
      data = await Customer.create({ name, phoneNo, address });
    }

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
