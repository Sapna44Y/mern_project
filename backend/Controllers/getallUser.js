const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "User fetch successfull", users });
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

module.exports = getAllUsers;
