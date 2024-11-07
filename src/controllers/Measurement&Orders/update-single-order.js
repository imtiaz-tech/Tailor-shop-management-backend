import Order from "../../models/order";

const updateSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { otherPhoneNo, price, deliveryDate, workerId, customerId, extraCharges, orderItems } = req.body;
    const data = await Order.updateOne(
      { _id: id },
      { otherPhoneNo, price, deliveryDate, workerId, customerId, extraCharges, orderItems }
    );
    return res.status(200).json({
      data,
      message: "Update Order Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateSingleOrder;
