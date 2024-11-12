import Order from "../../models/order";
import axios from "axios";

const addOrder = async (req, res) => {
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
    return res.status(200).json({
      data,
      success: true,
      message: "Order Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addOrder;
