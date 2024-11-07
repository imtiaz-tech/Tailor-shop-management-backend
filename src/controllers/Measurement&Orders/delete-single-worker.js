import Users from "../../models/users";

const deleteSingleWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Users.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      data,
      message: "Deleted Worker Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default deleteSingleWorker;
