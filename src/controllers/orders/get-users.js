// import Users from "../../models/users";
//getUsers api used for get User from database it gets 2 parameters from frontend { currentPage,recordsPerPage } in req.query
//this api response is return Users from database and Users count
//this api used in CustomerList component for show users  Dashboard project
//.skip used for frontend pagination how many categories skip for next or previous page
//.limit used for how many categories shows on single page

const getUsers = async (req, res) => {
    try {
      let { currentPage, recordsPerPage } = req.query;
      currentPage = parseInt(currentPage) || 1;
    recordsPerPage = parseInt(recordsPerPage) || 10;
      const data = await Users.find({ userType: "user" }).skip((currentPage - 1) * recordsPerPage)
      .limit(recordsPerPage);
      const count = await Users.count({ userType: "user" });
      return res.status(200).json({
        data,
        count,
        success: true,
        message: "Get users Succesfully",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export default getUsers;
  