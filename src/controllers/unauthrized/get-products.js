// import Product from "../../models/product";
import mongoose, { Schema } from "mongoose";
//getProducts api used for get Products from database it gets 5 parameters from frontend {pageno,perpage,searchProduct,selectCategory,sortBy} in req.query
//filter used for filter products by name,categoryId;
//sort used for products sort by price high to low and low to high
//.skip used for frontend pagination how many categories skip for next or previous page
//.limit used for how many categories shows on single page
//this api response is return products from database and product count,product sort by price,product filter by name,product filter by categoryId
//this api used in home/index component for show products on homepage,shop/index component for show products by category,show products by price range,and products search
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
