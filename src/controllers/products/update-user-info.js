import Customer from "../../models/customer";
//updateSingleProduct api used for add update Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body and {id} req.params
//this api response is save updated Product in database
//this api used in ProductEdit component Dashboard project
const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name,phoneNo,address } = req.body;
    const data = await Customer.updateOne(
      { _id: id },
      { name,phoneNo,address }
    );
    return res.status(200).json({
      data,
      message: "Update Customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateUserInfo;
