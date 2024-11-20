import moment from "moment";
import Customer from "../../models/customer";
import Order from "../../models/order";
import Measurement from "../../models/measurement";

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
    const user = req.user;
    const assignedOrdersCount = await Order.count({ workerId: user._id });
    const completedOrdersCount = await Order.count({ workerId: user._id, status: "Completed" });

    const deliveryStart = moment().startOf("day").toDate();
    const deliveryEnd = moment().add(7, "days").endOf("day").toDate();
    const upcomingOrderCount = await Order.countDocuments({
      deliveryDate: {
        $gte: deliveryStart,
        $lte: deliveryEnd,
      },
    });
    const orderCount = await Order.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    const measurementCount = await Measurement.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    const customerCount = await Customer.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    const orderSalesCount = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(startTime), $lt: new Date(endTime) } } },
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
      measurementCount,
      upcomingOrderCount,
      average,
      orderCount,
      orderSalesCount,
      assignedOrdersCount,
      completedOrdersCount,
      success: true,
      message: "Get Dashboard details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getDashboardDetails;
