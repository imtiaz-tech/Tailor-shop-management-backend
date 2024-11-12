import Order from "../../models/order";

const getOrders = async (req, res) => {
  try {
    let { pageno, perpage, searchOrderCustomer, deliveryDate, workerId, status } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;

    let filter = {};
    if (searchOrderCustomer) {
      filter = {
        $or: [
          { orderNumber: { $regex: searchOrderCustomer, $options: "i" } },
          { otherPhoneNo: { $regex: searchOrderCustomer, $options: "i" } },
          { "customerId.name": { $regex: searchOrderCustomer, $options: "i" } },
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
      .populate("measurementId")
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
