import Customer from "../../models/customer";
import Order from "../../models/order";
import utils from "util";

const getOrders = async (req, res) => {
  try {
    let { currentPage, perpage, searchOrderCustomer, deliveryDate, workerId, status } = req.query;
    let pageno = parseInt(currentPage) || 1;
    perpage = parseInt(perpage) || 10;

    let filter = {};

    if (searchOrderCustomer) {
      const customers = await Customer.find({
        name: { $regex: searchOrderCustomer, $options: "i" },
      }).select("_id");
      const customerIds = customers.map((cust) => cust._id);

      filter = {
        ...filter,
        $or: [
          { orderNumber: { $regex: searchOrderCustomer, $options: "i" } },
          { otherPhoneNo: { $regex: searchOrderCustomer, $options: "i" } },
          { customerId: { $in: customerIds } },
        ],
      };
    }
    if (deliveryDate) {
      filter.deliveryDate = deliveryDate;
    }
    if (workerId) {
      filter.workerId = workerId;
    }
    if (status) {
      filter.status = status;
    }
    const data = await Order.find(filter)
      .populate("userId")
      .populate("customerId")
      .populate("orderItems.measurementId")
      .skip((pageno - 1) * perpage)
      .limit(perpage);
    const count = await Order.count(filter);
    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get Orders Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getOrders;
