import Order from "../../models/order";
import axios from "axios";
//addCategory api used for add Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body
//this api response is save Product in database in product Table
//this api used in ProductAdd component Dashboard project
const addOrders = async (req, res) => {
  try {
    const { otherPhoneNo, price, deliveryDate, workerId, customerId, extraCharges, orderItems } = req.body;
    const data = await Order.create({
      otherPhoneNo,
      deliveryDate,
      extraCharges,
      price,
      customerId,
      workerId,
      orderItems,
    });
    const options = {
      method: POST,
      url: "https://graph.facebook.com/v21.0/03287547164/messages",
      headers: {
        "X-API-KEY": "E6xwOg2BY4RbmiJogfyegrt746r7te",
        "Content-Type": "application/json",
      },
    };
    const result = await axios(options);
    return res.status(200).json({
      data,
      result,
      success: true,
      message: "Order Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addOrders;
