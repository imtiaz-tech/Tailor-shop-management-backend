// import Category from "../../models/category";
//updateSingleCategory api used for add update category to database it gets 3 parameters from frontend name,status in req.body and id req.params
//this api response is save updated category in database
//this api used in CategoriesEdit component Dashboard project
const updateSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    const data = await Category.updateOne(
      { _id: id },
      {
        name,
        status,
      }
    );
    return res.status(200).json({
      data,
      message: "Update category Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateSingleCategory;
