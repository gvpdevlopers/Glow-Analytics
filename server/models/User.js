const mongoose = require("mongoose");

const userSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },

      password: {
        type: String,
        required: true,
      },

      role: {
        type: String,
        enum: ["admin", "client"],
        default: "client",
      },

      // BUSINESS NAME
      businessName: {
        type: String,
        default: "",
      },

      // ASSIGNED META CAMPAIGNS
      campaignIds: {
        type: [String],
        default: [],
      },
    },

    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "User",
  userSchema
);