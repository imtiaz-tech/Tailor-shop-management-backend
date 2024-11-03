import Order from "../../models/order";

const getOrdersBySearch = async (req, res) => {
  try {
    const { search } = req.query;
    const data = await Order.find({
      orderNumber: search,
    });
    return res.status(200).json({
      data,
      success: true,
      message: "Get orders Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getOrdersBySearch;
