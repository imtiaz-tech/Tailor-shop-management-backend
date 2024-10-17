import Customer from "../../models/customer";
//addCategory api used for add category to database it gets two parameters from frontend name,status in req.body  
//this api response is save category in database
//this api used in CategoriesAdd component Dashboard project
const addCustomer = async (req, res) => {
  try {
    const { name, phoneNo,address } = req.body;
    const data = await Customer.create({ name, phoneNo,address });
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
