// import Product from "../../models/product";
//getSingleProduct api used for get single Product from database it gets 1 parameters from frontend {id} req.params
//this api response is return single Product from database 
//this api used in ProductEdit component for edit category Dashboard project
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
