// import Product from "../../models/product";

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);
    return res.status(200).json({
      data,
      success: true,
      message: "Get category Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleProduct;
