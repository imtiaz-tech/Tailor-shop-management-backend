// import Product from "../../models/product";
//deleteSingleProduct api used for delete product from database it gets 1 parameters from frontend {id} in req.params  
//this api response is delete category from database
//this api used in CardBlock component Dashboard project
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
