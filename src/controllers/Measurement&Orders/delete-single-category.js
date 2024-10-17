// import Category from "../../models/category";
//deleteSingleCategory api used for delete category from database it gets 1 parameters from frontend {id} in req.params  
//this api response is delete category from database
//this api used in CategoriesList component Dashboard project
const deleteSingleCategory = async(req,res)=>{
    try {
        const { id } = req.params;
        const data = await Category.findByIdAndDelete({ _id: id });
        return res.status(200).json({
          data,
          message: "Deleted Category Succesfully",
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}
export default deleteSingleCategory;