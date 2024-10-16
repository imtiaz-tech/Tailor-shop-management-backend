// import Users from "../../models/users";
//updateUserStatus api used for update users status in database it gets 2 parameters from frontend {isActive } in req.body and {id} req.params
//this api response is update status of user {active,inactive} in database
//this api used in CustomerList component for change user status Dashboard project
const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const data = await Users.updateOne(
        { _id: id },
      {
        isActive,
      }
    );
    return res.status(200).json({
        data,
        message: "Update User Status Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateUserStatus;
