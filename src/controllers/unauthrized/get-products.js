// import Product from "../../models/product";
import mongoose, { Schema } from "mongoose";
const getProducts = async (req, res) => {
  try {
    let { pageno, perpage, searchProduct, selectCategory, sortBy } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    let filter = {};
    let sort = {};
    if (searchProduct) {
      filter.name = { $regex: searchProduct, $options: "i" };
    }
    if (selectCategory) {
      filter.categoryId = { $eq: selectCategory };
    }
    if (sortBy === "priceHighToLow") {
      sort.price = -1;
    } else if (sortBy === "priceLowToHigh") {
      sort.price = 1;
    }

    const data = await Product.find(filter)
      .skip((pageno - 1) * perpage)
      .limit(perpage)
      .sort(sort);

    const count = await Product.count(filter);
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

export default getProducts;
