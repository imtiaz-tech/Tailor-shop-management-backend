import Measurement from "../../models/measurement";

const getMeasurements = async (req, res) => {
  try {
    const { measurementTypes, customerId } = req.body;
    const data = await Measurement.find({ customerId, measurementType: { $in: measurementTypes } });
    return res.status(200).json({
      data,
      success: true,
      message: "Measurements Get Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getMeasurements;
