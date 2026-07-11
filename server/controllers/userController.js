const User = require("../models/User");
const bcrypt = require("bcryptjs");


// =========================================
// GET ALL USERS
// =========================================
exports.getUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



// =========================================
// CREATE USER
// =========================================
exports.createUser = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      role,
      businessName,
      campaignIds,
    } = req.body;



    // Check existing user
    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }



    // Hash password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );



    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      businessName,
      campaignIds: campaignIds || [],
    });



    res.status(201).json({
      message: "User created successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
        campaignIds: user.campaignIds,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



// =========================================
// UPDATE USER
// =========================================
exports.updateUser = async (req, res) => {
  try {

    const user = await User.findById(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }



    user.name =
      req.body.name || user.name;

    user.email =
      req.body.email || user.email;

    user.role =
      req.body.role || user.role;

    user.businessName =
      req.body.businessName || user.businessName;



    // Update Campaign IDs
    if (Array.isArray(req.body.campaignIds)) {
      user.campaignIds = req.body.campaignIds;
    }



    // Update password only if entered
    if (req.body.password) {

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(
        req.body.password,
        salt
      );
    }



    const updatedUser = await user.save();



    res.status(200).json({
      message: "User updated successfully",

      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        businessName: updatedUser.businessName,
        campaignIds: updatedUser.campaignIds,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



// =========================================
// DELETE USER
// =========================================
exports.deleteUser = async (req, res) => {
  try {

    const user = await User.findById(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }



    await user.deleteOne();

    res.status(200).json({
      message: "User deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};