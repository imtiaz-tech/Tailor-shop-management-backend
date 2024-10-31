import Order from "../../models/order";
//getProducts api used for get Products from database it gets three parameters from frontend pageno,perpage  in req.query
//this api response is return Products from database and Products count
//this api used in CardBlock component for show Products  Dashboard project
//.skip used for frontend pagination how many categories skip for next or previous page
//.limit used for how many categories shows on single page measurementId
const getOrders = async (req, res) => {
  try {
    let { pageno, perpage } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    const data = await Order.find()
      .populate("userId")
      .populate("customerId")
      .populate("measurementId")
      .skip((pageno - 1) * perpage)
      .limit(perpage);
    const count = await Order.count();
    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get Products Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getOrders;
