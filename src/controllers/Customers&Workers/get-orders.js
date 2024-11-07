// import Order from "../../models/order";

const getOrders = async (req, res) => {
  try {
    const { userId, status } = req.query;
    let filter = {};
    if (userId) {
      filter.userId = userId;
    }

    if (status) {
      filter.status = status;
    }
    const data = await Order.find(filter);
    return res.status(200).json({
      data,
      success: true,
      message: "Get Orders Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getOrders;
