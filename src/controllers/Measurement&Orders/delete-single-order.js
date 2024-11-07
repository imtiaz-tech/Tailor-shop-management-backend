import Order from "../../models/order";

const deleteSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      data,
      message: "Deleted Product Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default deleteSingleOrder;
