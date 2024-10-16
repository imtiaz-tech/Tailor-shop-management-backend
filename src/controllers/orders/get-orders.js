// import Order from "../../models/order";
//getOrders api used for get orders from database it gets 2 parameters from frontend { userId, status }  in req.query
//this api response is return Orders from database 
//this api used in RecentTransaction component for show orders by status  Dashboard project
//this api used in OrderListData component for show orders  Dashboard project
//this api used in CustomerDetail component for show orders by user  Dashboard project
//filter used for filter orders by userId and Order status
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
