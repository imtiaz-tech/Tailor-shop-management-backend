// import Users from "../../models/users";

const getUsers = async (req, res) => {
  try {
    let { currentPage, recordsPerPage } = req.query;
    currentPage = parseInt(currentPage) || 1;
    recordsPerPage = parseInt(recordsPerPage) || 10;
    const data = await Users.find({ userType: "user" })
      .skip((currentPage - 1) * recordsPerPage)
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
