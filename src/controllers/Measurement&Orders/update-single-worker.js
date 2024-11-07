import Users from "../../models/users";

const updateSingleWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNo, address } = req.body;
    const data = await Users.updateOne(
      { _id: id },
      {
        name,
        phoneNo,
        address,
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
export default updateSingleWorker;
