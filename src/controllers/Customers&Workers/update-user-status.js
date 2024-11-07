// import Users from "../../models/users";

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
