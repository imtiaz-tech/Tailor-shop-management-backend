import Customer from "../../models/customer";

const getCustomers = async (req, res) => {
  try {
    let { pageno, perpage, searchCustomer } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    let filter = {};
    if (searchCustomer) {
      filter = {
        $or: [
          { phoneNo: { $regex: searchCustomer, $options: "i" } },
          { name: { $regex: searchCustomer, $options: "i" } },
        ],
      };
    }
    let data = [];
    data = await Customer.find(filter)
      .skip((pageno - 1) * perpage)
      .limit(perpage);
    const count = await Customer.count(filter);
    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get Customer Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getCustomers;
