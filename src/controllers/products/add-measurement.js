import Measurement from "../../models/measurement";
//addCategory api used for add Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body
//this api response is save Product in database in product Table
//this api used in ProductAdd component Dashboard project
const addMeasurement = async (req, res) => {
  try {
    const { customerId, measurement, measurementType } = req.body;
    let data = await Measurement.findOne({ customerId, measurementType });
    if (data) {
      data = await Measurement.updateOne(
        { customerId, measurementType },
        {
          measurement,
          measurementType,
          customerId,
        }
      );
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
