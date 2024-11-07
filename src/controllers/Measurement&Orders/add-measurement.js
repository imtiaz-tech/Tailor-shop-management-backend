import Measurement from "../../models/measurement";

const addMeasurement = async (req, res) => {
  try {
    const { customerId, measurement, measurementType } = req.body;
    let data = await Measurement.findOne({ customerId, measurementType });
    if (data) {
      await Measurement.updateOne(
        { customerId, measurementType },
        {
          measurement,
          measurementType,
          customerId,
        }
      );
      data = await Measurement.findOne({ customerId, measurementType });
    } else {
      data = await Measurement.create({
        measurement,
        measurementType,
        customerId,
      });
    }
    return res.status(200).json({
      data,
      success: true,
      message: "Measurement Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addMeasurement;
