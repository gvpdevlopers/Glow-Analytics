require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const connectDB = require("./config/db");

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({
      email: "gvp.prakashparmar@gmail.com",
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit();
    }

    const hashedPassword =
      await bcrypt.hash("GVPxAds#2026", 10);

    await User.create({
      name: "Admin",
      email: "gvp.prakashparmar@gmail.com",
      password: hashedPassword,
      role: "admin",
      businessName: "Glow Ventures",
    });

    console.log("✅ Admin created successfully!");
    console.log("Email: gvp.prakashparmar@gmail.com");
    console.log("Password: GVPxAds#2026");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

createAdmin();