const User = require("../model/User");

//.create -> model
// .save -> object

const createUser = async (req, res) => {
  const { name, email, role, dept, img, title } = req.body;
  const imageurl = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;

  const newUser = new User({ name, email, role, dept, title, img: imageurl });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.console.error("Error creation");
  }
};

module.exports = createUser;
