// import Product from "../../models/product";

const deleteSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      data,
      message: "Deleted Product Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default deleteSingleProduct;
