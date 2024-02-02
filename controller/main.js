const User = require("../models/user");

exports.postAddUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const data = await User.create({
      name: name,
      email: email,
    });
    res.status(201).json(data);
    console.log(data);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
