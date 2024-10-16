// import Product from "../../models/product";
//getProductsByCategory api used for get products by category from database it gets 1 parameters from frontend {categoryId} req.params
//this api response is return Products by category from database 
//this api used in single-product/index.js component for show products by category on single product page on web project
//.limt used because i want to display only four products
const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const data = await Product.find({ categoryId }).limit(4);
    return res.status(200).json({
      data,
      success: true,
      message: "Get Product Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getProductsByCategory;
