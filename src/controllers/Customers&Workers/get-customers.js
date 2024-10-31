import Customer from "../../models/customer";

const getCustomers = async (req, res) => {
  try {
    let { pageno, perpage } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    let data = [];
    data = await Customer.find()
      .skip((pageno - 1) * perpage)
      .limit(perpage);
    const count = await Customer.count();
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
