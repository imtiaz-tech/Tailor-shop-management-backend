import Order from "../../models/order";
//addCategory api used for add Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body
//this api response is save Product in database in product Table
//this api used in ProductAdd component Dashboard project
const addOrders = async (req, res) => {
  try {
    const { otherPhoneNo, price, deliveryDate, extraCharges, worker, images,id,measurementId,measurementtype } = req.body;
    const data = await Order.create({
      otherPhoneNo,
      deliveryDate,
      extraCharges,
      price,
      customerId: id,
      userId: worker,
      measurementId:measurementId,
      images,
      measurementtype,
    });
    return res.status(200).json({
      data,
      success: true,
      message: "Order Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addOrders;
