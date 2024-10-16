import Order from "../../models/order";
//getSingleOrder api used for get single order by id from database it gets 1 parameters from frontend {id} req.params
//this api response is return get single order by id from database
//this api used in OrderDetail component for show Single order detail Dashboard project
//.populate used for populate with cart and userId
// populate reference fields in a document of a certain collection with documents from another collection
const getSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.findOne({ _id: id })
    .populate("cart.productId")
    .populate("userId");
    return res.status(200).json({
      data,
      success: true,
      message: "Get Single Order Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleOrder;
