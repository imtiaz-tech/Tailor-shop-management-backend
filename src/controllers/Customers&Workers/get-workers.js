import Users from "../../models/users";

const getWorkers = async (req, res) => {
  try {
    let { pageno, perpage, all, searchWorker } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;

    let filter = { userType: "WORKER" };
    if (searchWorker) {
      filter = {
        ...filter,
        $or: [{ phoneNo: { $regex: searchWorker, $options: "i" } }, { name: { $regex: searchWorker, $options: "i" } }],
      };
    }

    let data = [];
    let count = undefined;
    if (all) {
      data = await Users.find({ userType: "WORKER" });
    } else {
      data = await Users.find(filter)
        .skip((pageno - 1) * perpage)
        .limit(perpage);
      count = await Users.count(filter);
    }

    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get Users Succesfully",
    });
  } catch (error) {
    console.log("🚀 ~ getWorkers ~ error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getWorkers;
