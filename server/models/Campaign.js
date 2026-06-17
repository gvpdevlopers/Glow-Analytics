const mongoose = require("mongoose");

const campaignSchema =
  new mongoose.Schema(
    {
      // CLIENT LINK
      clientId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },





      // PLATFORM
      platform: {
        type: String,

        enum: [
          "Meta Ads",
          "Google Ads",
        ],

        required: true,
      },





      // CAMPAIGN NAME
      campaignName: {
        type: String,

        required: true,
      },





      impressions: {
        type: Number,
        default: 0,
      },

      reach: {
        type: Number,
        default: 0,
      },

      clicks: {
        type: Number,
        default: 0,
      },

      leads: {
        type: Number,
        default: 0,
      },

      spend: {
        type: Number,
        default: 0,
      },

      cpc: {
        type: Number,
        default: 0,
      },

      ctr: {
        type: String,
        default: "0%",
      },





      // DATE
      date: {
        type: Date,
        default: Date.now,
      },
    },

    {
      timestamps: true,
    }
  );

const Campaign =
  mongoose.model(
    "Campaign",
    campaignSchema
  );

module.exports = Campaign;