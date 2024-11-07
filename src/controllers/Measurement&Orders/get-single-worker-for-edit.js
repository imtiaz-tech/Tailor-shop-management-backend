import Users from "../../models/users";

const getSingleWorkerForEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Users.findById(id);
    return res.status(200).json({
      data,
      success: true,
      message: "Get Worker Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleWorkerForEdit;
