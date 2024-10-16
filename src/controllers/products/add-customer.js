import Customer from "../../models/customer";
//addCategory api used for add Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body
//this api response is save Product in database in product Table
//this api used in ProductAdd component Dashboard project
const addCustomer = async (req, res) => {
  try {
    const { name, phoneNo,address } = req.body;
    const data = await Customer.create({
      name, phoneNo,address  
    });
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
