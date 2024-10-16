// import Order from "../../models/order";

const getOrderByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.find({ userId: id })
    .populate("cart.productId")
    .populate("userId");
    return res.status(200).json({
      data,
      success: true,
      message: "Get Order Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getOrderByUserId;
