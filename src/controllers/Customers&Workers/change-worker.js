import Order from "../../models/order";

const changeWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const { workerId } = req.body;
    const data = await Order.updateOne({ _id: id }, { workerId });
    return res.status(200).json({
      data,
      message: "change worker Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeWorker;
