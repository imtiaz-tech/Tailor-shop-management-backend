// import Order from "../../models/order";
import moment from "moment";
import Customer from "../../models/customer";
import Order from "../../models/order";

// import Product from "../../models/product";
// import Users from "../../models/users";
//getDashboardDetails api used for get getDashboardDetails from database it gets 2 parameters from frontend {startTime,endTime} in req.query
//orderCount used for count order by start time and end time,
//productCount used for count product. add product by start time and end time,
//customerCount used for count customer. add customer by start time and end time,
//orderSalesCount used for count total sale by start time and end time,
//orderProductCount used for count product in cart,
//average used for count averge by start time and end time,
//averageItemSale used for count averageItemSale by start time and end time,
//this api response return orderCount,productCount,customerCount,orderSalesCount,average,averageItemSale
//Moment is a JavaScript library that helps manipulate date objects in JavaScript
//this api used in Dashboard component for show all above data
const getDashboardDetails = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    let filter = {};
    if (startTime && endTime) {
      filter.createdAt = {
        $gte: startTime,
        $lt: endTime,
      };
    }
    const orderCount = await Order.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    // const productCount = await Product.countDocuments({
    //   createdAt: {
    //     $gte: moment(startTime),
    //     $lte: moment(endTime),
    //   },
    // });
    const customerCount = await Customer.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    const orderSalesCount = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(startTime), $lt: new Date(endTime) } } },
      // { $unwind: "$cart" },
      // {
      //   $project: {
      //     totalSaleAmount: { $multiply: ["$cart.unitPrice", "$cart.quantity"] },
      //   },
      // },
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$price" },
        },
      },
    ]);

    const orderProductCount = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(startTime), $lt: new Date(endTime) } } },
      { $unwind: "$cart" },
      {
        $project: {
          totalProduct: { $sum: ["$cart.quantity"] },
        },
      },
      {
        $group: {
          _id: null,
          totalProduct: { $sum: "$totalProduct" },
        },
      },
    ]);
    const average = orderSalesCount[0]?.totalSales / orderCount;
    const averageItemSale = orderSalesCount[0]?.totalSales / orderProductCount[0]?.totalProduct;

    return res.status(200).json({
      averageItemSale,
      customerCount,
      // productCount,
      average,
      orderCount,
      orderSalesCount,
      success: true,
      message: "Get Dashboard details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getDashboardDetails;
