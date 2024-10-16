// import Category from "../../models/category";

//getCategories api used for get categories from database 
//this api response is return categories from database 
//this api used in ShopCategories component for show categories on shop page of web project

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
  
  