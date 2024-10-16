// import Order from "../../models/order";
//addOrder api used for add order to database it gets 12 parameters from frontend {firstName,lastName,country,address,apartmentAddress,city,state,postCode,phoneNumber,email,notes,cart} in req.body 
//this api response is save Order in database in product Table
//this api used in Checkout component web project
const addOrder = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      country,
      address,
      apartmentAddress,
      city,
      state,
      postCode,
      phoneNumber,
      email,
      notes,
      cart,
    } = req.body;
    const { _id } = req.user;
    const data = await Order.create({
      userId: _id,
      billingDetails: {
        firstName: firstName,
        lastName: lastName,
        country:country,
        address: address,
        apartmentAddress: apartmentAddress,
        city: city,
        state: state,
        postCode: postCode,
        phoneNumber: phoneNumber,
        email: email,
        notes: notes,
      },
      cart,
    });
    return res.status(200).json({
      data,
      success: true,
      message: "order Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addOrder;
