// import Product from "../../models/product";

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
