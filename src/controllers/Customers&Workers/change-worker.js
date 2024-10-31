import Order from "../../models/order";

const changeWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.updateOne({ workerId: id });
    return res.status(200).json({
      data,
      message: "change worker Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeWorker;
