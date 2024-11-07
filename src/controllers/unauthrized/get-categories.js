// import Category from "../../models/category";

const getCategories = async (req, res) => {
  try {
    const data = await Category.find();
    return res.status(200).json({
      data,
      success: true,
      message: "Get categories Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getCategories;
