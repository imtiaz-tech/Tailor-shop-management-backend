// import Users from "../../models/users";
//changeUserDetails api used for add order to database it gets 12 parameters from frontend {name,lastName,country,streetAddress,apartmentAddress,city,state,postCode,phone,email} in req.body 
//this api used in MyAccount component
//this api response is return change user details in  database
const changeUserDetails = async (req, res) => {
  try {
    const user = req.user;
    const { name,lastName,
    email,phone,city,country,state,postcode,
    streetAddress,apartmentAddress, } = req.body;
    user.name = name;
    user.lastName=lastName;
    user.email=email;
    user.phone=phone;
    user.address.city=city;
    user.address.country=country;
    user.address.state=state;
    user.address.postcode=postcode;
    user.address.streetAddress=streetAddress;
    user.address.apartmentaddress=apartmentAddress;


   
    const data = await user.save();
    return res.status(200).json({
      data,
      message: "Change User Details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeUserDetails;
