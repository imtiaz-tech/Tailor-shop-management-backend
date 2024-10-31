import Order from "../../models/order";
//updateOrderStatus api used for add update order status to database it gets 3 parameters from frontend {name,status} in req.body and {id} req.params
//this api response is save updated status of single order {pending,completed,progress} in database
//this api used in StatusOrderBlock component for change order status Dashboard project
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Order.updateOne(
      { _id: id },
      {
        status,
      }
    );
    return res.status(200).json({
      data,
      message: "Update Order Status Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateOrderStatus;
